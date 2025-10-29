import { getPost } from "@/lib/marble/posts";
import { getAllTests } from "@/lib/marble/test";
import { j, publicProcedure } from "@/server/jstack";
import { env } from "hono/adapter";
import z from "zod";

export const marbleRouter = j.router({
  listAll: publicProcedure
    .input(
      z.object({
        type: z.enum("blog", "changelog", "test"),
      })
    )
    .query(async ({ c, ctx, input: { type } }) => {
      if (type === "test") {
        const data = await getAllTests({
          url: env(c).MARBLE_API_URL,
          key: env(c).MARBLE_WORKSPACE_KEY,
        });

        if (!data) {
          return c.superjson({
            success: false,
            posts: null,
            pagination: null,
          });
        }

        return c.superjson({
          success: true,
          posts: data.posts.map((p) => ({
            id: p.id,
            slug: p.slug,
            title: p.title,
            authors: p.authors,
            publishedAt: p.publishedAt,
            updatedAt: (p as any).updatedAt ?? null,
            description: p.description,
            coverImage: p.coverImage,
            category: p.category,
            tags: p.tags,
          })),
          pagination: data.pagination,
        });
      }
    }),

  getPost: publicProcedure
    .input(
      z
        .object({
          slug: z.string().min(1).optional(),
          id: z.string().min(1).optional(),
        })
        .refine(({ slug, id }) => (slug ? 1 : 0) + (id ? 1 : 0) === 1, {
          message: "Provide exactly one of slug or id",
        })
        .transform(({ slug, id }) => ({
          identifier: slug ?? id!,
        }))
    )
    .query(async ({ c, ctx, input: { identifier } }) => {
      const data = await getPost({
        url: env(c).MARBLE_API_URL,
        key: env(c).MARBLE_WORKSPACE_KEY,
        identifier,
      });

      if (!data) {
        return c.superjson({
          success: false,
          post: null,
        });
      }

      return c.json({
        success: true,
        post: data.post,
      });
    }),
});
