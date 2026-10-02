import { config } from "@/config";

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
}

/** Profiles maintained by the community, separate from the Discord roster. */
export function getAllMembers(): Member[] {
  return Object.entries(config.members).map(([name, meta]) => ({
    name,
    ...(meta as MemberMeta),
  }));
}
