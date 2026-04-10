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
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
