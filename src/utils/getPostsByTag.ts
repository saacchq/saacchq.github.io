import type { CollectionEntry } from "astro:content";
import { getSortedPosts } from "./getSortedPosts";

export function getPostsByTag(
  posts: CollectionEntry<"posts">[],
  tag: string
) {
  return getSortedPosts(posts).filter((post) =>
    post.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}
