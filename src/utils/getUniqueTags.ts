import type { CollectionEntry } from "astro:content";
import { postFilter } from "./postFilter";

export function getUniqueTags(posts: CollectionEntry<"posts">[]) {
  const tags = posts
    .filter(postFilter)
    .flatMap((post) => post.data.tags)
    .map((tag) => tag.toLowerCase());
  return [...new Set(tags)].sort();
}
