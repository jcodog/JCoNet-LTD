export type PostsResponse = {
  posts: {
    id: string;
    slug: string;
    title: string;
    content: string;
    description: string;
    coverImage: string;
    publishedAt: string;
    authors: {
      id: string;
      name: string;
      image: string;
    }[];
    category: {
      id: string;
      name: string;
      slug: string;
    };
    tags: {
      id: string;
      name: string;
      slug: string;
    }[];
    attribution: string | null;
  }[];
  pagination: {
    limit: number;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    totalPages: number;
    totalItems: number;
  };
};

export type PostResponse = {
  post: {
    id: string;
    slug: string;
    title: string;
    content: string;
    description: string;
    coverImage: string;
    publishedAt: string;
    authors: {
      id: string;
      name: string;
      image: string;
    }[];
    category: {
      id: string;
      name: string;
      slug: string;
    };
    tags: {
      id: string;
      name: string;
      slug: string;
    }[];
    attribution: string | null;
  };
};
