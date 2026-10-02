import { writeFile } from 'node:fs/promises';

const token = process.env.DISCORD_BOT_TOKEN;
const guildId = process.env.DISCORD_GUILD_ID || '1481044663086481472';
if (!token) {
  console.error('DISCORD_BOT_TOKEN is required to sync the member roster.');
  process.exit(1);
}

const members = [];
let after = '0';
for (;;) {
  const url = new URL(`https://discord.com/api/v10/guilds/${guildId}/members`);
  url.searchParams.set('limit', '1000');
  url.searchParams.set('after', after);
  let response;
  for (let attempt = 0; attempt < 3; attempt++) {
    response = await fetch(url, { headers: { Authorization: `Bot ${token}` } });
    if (response.status !== 429) break;
    const retry = await response.json();
    await new Promise((resolve) => setTimeout(resolve, Math.max(1000, (retry.retry_after || 1) * 1000)));
  }
  if (!response.ok) {
    console.error(`Discord member sync failed (${response.status}). Check bot membership and Guild Members intent.`);
    process.exit(1);
  }
  const batch = await response.json();
  if (!Array.isArray(batch)) throw new Error('Discord returned an unexpected member response.');
  for (const member of batch) {
    if (!member.user?.id || member.user.bot) continue;
    const user = member.user;
    const name = member.nick || user.global_name || user.username;
    const avatar = member.avatar
      ? `https://cdn.discordapp.com/guilds/${guildId}/users/${user.id}/avatars/${member.avatar}.png?size=128`
      : user.avatar
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`
        : null;
    members.push({ id: user.id, name, username: user.username, avatar });
  }
  if (batch.length < 1000) break;
  after = batch.reduce((highest, member) =>
    BigInt(member.user.id) > BigInt(highest) ? member.user.id : highest, after);
}

members.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
await writeFile(new URL('../src/data/discord-members.json', import.meta.url), JSON.stringify(members, null, 2) + '\n');
console.log(`Synced ${members.length} human Discord members.`);
