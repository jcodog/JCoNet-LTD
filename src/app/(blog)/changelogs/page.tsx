"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/client";
import { Image as ImageIcon, CalendarDays, History } from "lucide-react";

// Local minimal types matching the Marble listAll response shape
type Author = { id: string; name: string; image?: string | null };
type Category = { id: string; name: string; slug: string };
type PostTag = { id: string; name: string; slug: string };

type Post = {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage?: string | null;
  publishedAt: string;
  updatedAt?: string | null;
  authors: Author[];
  category: Category;
  tags: PostTag[];
  attribution?: string | null;
};

type Pagination = {
  limit: number;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  totalPages: number;
  totalItems: number;
};

// API response shape from marbleRouter.listAll for type 'test'
type ListAllResponse =
  | { success: true; posts: Post[]; pagination: Pagination }
  | { success: false; posts: null; pagination: null };

const dateTimeFmt = (d: string) =>
  new Date(d).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

const initialFromName = (name: string) =>
  (name?.trim()?.charAt(0) || "?").toUpperCase();

const TagBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-muted-foreground">
    {label}
  </span>
);

const CoverPlaceholder = ({ title }: { title: string }) => (
  <div className="relative h-full w-full overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-muted/25 to-muted" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/70 shadow-sm backdrop-blur-sm">
        <ImageIcon className="h-6 w-6 text-muted-foreground" aria-hidden />
      </div>
    </div>
    <span className="sr-only">No cover image for {title}</span>
  </div>
);

const AuthorStack = ({ authors }: { authors: Author[] }) => (
  <div className="flex items-center -space-x-2">
    {authors.map((a) => {
      const hasImg = !!a.image && a.image.trim().length > 0;
      return hasImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={a.id}
          src={a.image!}
          alt={a.name}
          width={24}
          height={24}
          className="h-6 w-6 rounded-full ring-2 ring-white/10 object-cover backdrop-blur-[1px]"
        />
      ) : (
        <div
          key={a.id}
          aria-label={a.name}
          title={a.name}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-background/60 backdrop-blur-sm text-[10px] font-semibold uppercase ring-2 ring-white/10 shadow-sm"
        >
          {initialFromName(a.name)}
        </div>
      );
    })}
  </div>
);

const PostCard = ({ post }: { post: Post }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/30 backdrop-blur-md text-card-foreground shadow-sm ring-1 ring-white/5 transition hover:bg-card/40 hover:shadow-md">
    <Link href={`/changelogs/${post.slug}`} className="flex h-full flex-col">
      <div className="relative aspect-[16/9] w-full">
        {post.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <CoverPlaceholder title={post.title} />
        )}
      </div>
      <div className="flex flex-1 flex-col space-y-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          {(() => {
            const updatedTs = post.updatedAt ?? null;
            const isDifferent =
              updatedTs !== null &&
              new Date(updatedTs).getTime() !==
                new Date(post.publishedAt).getTime();
            const ts = isDifferent ? updatedTs! : post.publishedAt;
            const Icon = isDifferent ? History : CalendarDays;
            return (
              <span className="inline-flex items-center gap-1">
                <Icon className="h-3.5 w-3.5" aria-hidden />
                <time dateTime={ts}>{dateTimeFmt(ts)}</time>
              </span>
            );
          })()}
          {post.attribution ? (
            <span className="truncate">{post.attribution}</span>
          ) : null}
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold leading-snug">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {post.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((t) => (
              <TagBadge key={t.id} label={t.name} />
            ))}
            {post.tags.length > 3 ? (
              <span className="text-xs text-muted-foreground">
                +{post.tags.length - 3}
              </span>
            ) : null}
          </div>
          <AuthorStack authors={post.authors} />
        </div>
      </div>
    </Link>
  </article>
);

const PaginationBar = ({
  current,
  total,
}: {
  current?: number;
  total?: number;
}) => (
  <div className="flex items-center justify-between border-t pt-6">
    <button
      disabled
      className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-muted-foreground opacity-60"
    >
      Previous
    </button>
    <div className="text-sm text-muted-foreground">
      Page {current ?? 1} of {total ?? 1}
    </div>
    <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
      Next
    </button>
  </div>
);

const ChangelogHome = () => {
  const { data, isLoading, isError } = useQuery<ListAllResponse>({
    queryKey: ["marble", "listAll", "changelogs"],
    queryFn: async () => {
      const res = await client.marble.listAll.$get({ type: "test" });
      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
      const body = (await res.json()) as unknown;
      return body as ListAllResponse;
    },
    staleTime: 1000 * 60,
  });

  return (
    <section id="changelog-home" className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Changelogs
        </h1>
        <p className="text-muted-foreground">
          Latest releases, improvements, and fixes across our products.
        </p>
      </header>

      {/* Grid of posts */}
      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : isError || !data || data.success === false || !("posts" in data) ? (
        <div className="rounded-md border p-4 text-sm text-red-500">
          Failed to load changelogs.
        </div>
      ) : (
        <div
          id="post-list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {/* Simple, non-functional pagination (no logic) */}
      <PaginationBar
        current={data && data.success ? data.pagination.currentPage : undefined}
        total={data && data.success ? data.pagination.totalPages : undefined}
      />
    </section>
  );
};

export default ChangelogHome;

// Nicer skeleton matching the card layout
const SkeletonCard = () => (
  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/20 backdrop-blur-md shadow-sm ring-1 ring-white/5">
    <div className="aspect-[16/9] w-full animate-pulse bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30" />
    <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
      <div className="flex items-center gap-3">
        <div className="h-3 w-28 animate-pulse rounded bg-muted/50" />
      </div>
      <div className="h-4 w-3/4 animate-pulse rounded bg-muted/50" />
      <div className="h-3.5 w-full animate-pulse rounded bg-muted/40" />
      <div className="h-3.5 w-5/6 animate-pulse rounded bg-muted/40" />
      <div className="mt-auto flex items-center justify-between pt-2">
        <div className="flex gap-2">
          <div className="h-5 w-10 animate-pulse rounded-full border border-white/10 bg-muted/40" />
          <div className="h-5 w-12 animate-pulse rounded-full border border-white/10 bg-muted/40" />
        </div>
        <div className="flex -space-x-2">
          <div className="h-6 w-6 animate-pulse rounded-full bg-muted/50 ring-2 ring-white/10" />
          <div className="h-6 w-6 animate-pulse rounded-full bg-muted/50 ring-2 ring-white/10" />
        </div>
      </div>
    </div>
  </article>
);
