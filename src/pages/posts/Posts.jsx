import React, { useEffect, useRef, useState } from "react";
import PostService from "../../API/PostService";
import PostFilter from "../../components/PostFilter";
import PostForm from "../../components/PostForm";
import PostList from "../../components/PostList";
import MyButton from "../../components/UI/button/MyButton";
import Loader from "../../components/UI/loader/Loader";
import MyModal from "../../components/UI/modal/MyModal";
import Pagination from "../../components/UI/pagination/Pagination";
import MySelect from "../../components/UI/select/MySelect";
import useFetching from "../../hooks/useFetching";
import useObserver from "../../hooks/useObserver";
import { useSortedAndSearchPosts } from "../../hooks/usePosts";
import { getPageCount } from "../../utils/pages";
import "./Posts.scss";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [visible, setVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const sortedAndSearchPosts = useSortedAndSearchPosts(
    posts,
    filter.sort,
    filter.search
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page,limit]);

  function createNewPost(newPost) {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  function removePost(id) {
    setPosts(posts.filter((el) => el.id !== id));
  }

  function changePage(p) {
    setPage(p);
  }

  return (
    <div className="posts">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setVisible(true)}>
        Create new post
      </MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm createNewPost={createNewPost} />
      </MyModal>
      <hr style={{ marginBlock: "15px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect 
        value={limit}
        onChangeSelect={val=>setLimit(val)}
        defaultValue="Page count"
        options={[
          {value:5,name:5},
          {value:10,name:10},
          {value:15,name:15},
          {value:-1,name:"all"},
        ]}
      />
      {postsError && <h2>`Post Error ${postsError}`</h2>}
      {isPostsLoading && <Loader />}
      <PostList
        removePost={removePost}
        posts={sortedAndSearchPosts}
        title="Posts List"
      />
      <div ref={lastElement} />

      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
