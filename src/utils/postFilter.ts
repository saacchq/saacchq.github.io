import type { CollectionEntry } from "astro:content";

const SCHEDULED_POST_MARGIN = 15 * 60 * 1000; // 15 minutes

export function postFilter({ data }: CollectionEntry<"posts">) {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SCHEDULED_POST_MARGIN;
  return (
    (import.meta.env.DEV || !data.draft) &&
    (import.meta.env.DEV || isPublishTimePassed)
  );
}
