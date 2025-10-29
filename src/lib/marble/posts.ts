import { PostResponse } from "@/lib/marble/types";

export const getPost = async ({
  url,
  key,
  identifier,
}: {
  url: string;
  key: string;
  identifier: string;
}): Promise<PostResponse | null> => {
  try {
    const raw = await fetch(
      `${url}/${key}/posts/${identifier}?format=markdown`
    );
    if (!raw.ok) {
      console.error(`${raw.status} - ${raw.statusText}`);
      return null;
    }
    const data = await raw.json();

    return data as PostResponse;
  } catch (err) {
    console.error(err);
    return null;
  }
};
