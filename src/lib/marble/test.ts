import { PostsResponse } from "@/lib/marble/types";

export const getAllTests = async ({
  url,
  key,
}: {
  url: string;
  key: string;
}): Promise<PostsResponse | null> => {
  try {
    const raw = await fetch(`${url}/${key}/posts?category=tests&limit=9`);
    if (!raw.ok) {
      console.error(`${raw.status} - ${raw.statusText}`);
      return null;
    }
    const data = await raw.json();

    return data as PostsResponse;
  } catch (err) {
    console.error(err);
    return null;
  }
};
