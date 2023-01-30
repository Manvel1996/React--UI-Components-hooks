import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../API/PostService";
import Loader from "../../components/UI/loader/Loader";
import useFetching from "../../hooks/useFetching.js";

export default function FullPost() {
  const [post, setPost] = useState({});
  const [postComments, setPostComments] = useState([]);
  const params = useParams();
  const { id } = params;

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(
    async () => {
      const response = await PostService.getCommentsById(id);
      setPostComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById();
    fetchCommentsById();
  }, []);

  return (
    <div>
      <h2>FullPost by ID = {id}</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {id}
          {post.title}
        </div>
      )}
      <h2>Comments</h2>
      {isCommentsLoading ? (
        <Loader />
      ) : (
        postComments.map((com) => (
          <div key={com.id} style={{marginTop:"15px"}}>
            <h5>{com.email}</h5>
            <div>{com.body}</div>
          </div>
        ))
      )}
    </div>
  );
}
