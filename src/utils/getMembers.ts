import type { CollectionEntry } from "astro:content";
import { config } from "@/config";
import { getSortedPosts } from "./getSortedPosts";
import { getSeriesFromTags, getAllSeries } from "./getSeries";

interface MemberMeta {
  slug: string;
  role?: string;
  roleAr?: string;
  discord?: string;
  handle?: string;
  url?: string;
  avatar?: string;
  bio?: string;
  bioAr?: string;
}

export interface Member extends MemberMeta {
  name: string;
  posts: CollectionEntry<"posts">[];
  /** Series this member leads (from config.series). */
  series: { name: string; nameAr: string; key: string }[];
}

/** A post's effective author = its series lead, else its `author` field. */
function effectiveAuthor(post: CollectionEntry<"posts">): string {
  return getSeriesFromTags(post.data.tags)?.author ?? post.data.author;
}

/** All members from config.members, each enriched with their posts + led series. */
export function getAllMembers(allPosts: CollectionEntry<"posts">[]): Member[] {
  const posts = getSortedPosts(allPosts);
  const registry = config.members as Record<string, MemberMeta>;
  const allSeries = getAllSeries();

  return Object.entries(registry).map(([name, meta]) => ({
    name,
    ...meta,
    posts: posts.filter((p) => effectiveAuthor(p) === name),
    series: allSeries
      .filter((s) => s.author === name)
      .map((s) => ({ name: s.name, nameAr: s.nameAr, key: s.key })),
  }));
}

export function getMemberBySlug(
  slug: string,
  allPosts: CollectionEntry<"posts">[]
): Member | undefined {
  return getAllMembers(allPosts).find((m) => m.slug === slug);
}
