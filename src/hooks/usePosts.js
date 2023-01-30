import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

export const useSortedAndSearchPosts = (posts, sort, search) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((el) =>
      el.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortedPosts]);

  return sortedAndSearchPosts;
};
