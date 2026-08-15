import type { CollectionEntry } from "astro:content";
import { config } from "@/config";
import { getSortedPosts } from "./getSortedPosts";

export interface SeriesMeta {
  name: string;
  nameAr: string;
  author: string;
  handle: string;
  authorUrl: string;
}

export interface Series extends SeriesMeta {
  /** The tag that identifies this series (also its /tags/<key> route). */
  key: string;
}

/**
 * A series is identified by a tag: any post carrying a tag that matches a key
 * in config.series belongs to that author-led series. Returns the first match,
 * or null when the post has no series tag.
 */
export function getSeriesFromTags(tags?: string[]): Series | null {
  if (!tags) return null;
  const registry = config.series as Record<string, SeriesMeta>;
  for (const tag of tags) {
    const key = tag.toLowerCase();
    if (registry[key]) return { key, ...registry[key] };
  }
  return null;
}

/** All series in the registry, in declaration order. */
export function getAllSeries(): Series[] {
  const registry = config.series as Record<string, SeriesMeta>;
  return Object.entries(registry).map(([key, meta]) => ({ key, ...meta }));
}

export interface SeriesWithPosts extends Series {
  posts: CollectionEntry<"posts">[];
}

/** Every series with its posts (newest first), for /series and /series/<key>. */
export function getSeriesWithPosts(
  allPosts: CollectionEntry<"posts">[]
): SeriesWithPosts[] {
  const posts = getSortedPosts(allPosts);
  return getAllSeries().map((series) => ({
    ...series,
    posts: posts.filter((post) =>
      post.data.tags.some((t) => t.toLowerCase() === series.key)
    ),
  }));
}
