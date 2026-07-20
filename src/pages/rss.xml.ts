import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { config } from "@/config";
import { getSortedPosts } from "@/utils/getSortedPosts";

export async function GET(context: { site: URL }) {
  const allPosts = await getCollection("posts");
  const sortedPosts = getSortedPosts(allPosts);

  return rss({
    title: config.title,
    description: config.description,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDatetime,
      link: `/posts/${post.data.slug ?? post.id}/`,
      categories: [...post.data.tags],
    })),
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData:
      `<language>en</language>` +
      `<atom:link href="${new URL("rss.xml", context.site).href}" rel="self" type="application/rss+xml"/>`,
  });
}
