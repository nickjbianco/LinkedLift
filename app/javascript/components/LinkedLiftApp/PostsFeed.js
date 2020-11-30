import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsThunk } from "../../reducers/PostsReducer";
import styled from "styled-components";
import axios from "axios";
import { deletePost } from "../../reducers/PostsReducer";

const SinglePost = styled.ul`
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  margin-left: 10px;
  margin-right: 80px;
  padding-bottom: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 20px;
`;

const Button = styled.button`
  border-radius: 2px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  padding: 0;
  font-size: 100%;
  cursor: pointer;
  margin-left: 8px;
  line-height: 1.2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 2px;
`;

const MainWrapper = styled.div`
  background-color: #f3f2ef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostTitle = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  align-self: flex-start;
  line-height: 1%;
`;

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const currentUser = useSelector((state) => state.currentUser);
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    dispatch(postsThunk());
  }, []);

  const handleDeletePost = (e, postId, postBody) => {
    e.preventDefault();
    setPostBody(postBody);
    axios
      .delete(
        `http://localhost:3000/posts/${postId}`,
        {
          post: { body: postBody, user: currentUser },
        },
        { withCredentials: true }
      )
      .then((response) => {
        dispatch(deletePost(response.data.id));
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  return (
    <MainWrapper>
      {posts.map((post) => {
        const fullName = `${post.user.first_name} ${post.user.last_name}`;
        const postTitle = post.user.title;
        const postBody = post.body;

        return (
          <SinglePost key={post.id}>
            <PostTitle>
              <h4>{fullName}</h4>
              <p>
                <em>{postTitle}</em>
              </p>
            </PostTitle>
            <p>{postBody}</p>
            <Button onClick={(e) => handleDeletePost(e, post.id, postBody)}>
              Delete Post
            </Button>
          </SinglePost>
        );
      })}
    </MainWrapper>
  );
};
