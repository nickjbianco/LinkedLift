import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsThunk } from "../../reducers/PostsReducer";
import styled from "styled-components";
import axios from "axios";
import { deletePost } from "../../reducers/PostsReducer";

const MainWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 25px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  font-size: 90%;
  cursor: pointer;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  width: 25%;
  height: 70%;
  display: flex;
  align-self: center;
  align-items: center;
`;

const SinglePost = styled.ul`
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  padding: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  line-height: 20px;
`;

const PostTitle = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  font-size 14px;
`;

const PostBody = styled.p`
  background-color: transparent;
`;

const PostOptions = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
`;

const BottomLine = styled.hr`
  border-bottom: 1px solid var(--warm-gray-40, #cfcfcf);
  width: 100%;
`;

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const currentUser = useSelector((state) => state.currentUser);
  const [postBody, setPostBody] = useState("");
  const [deletePostButton, setDeletePostButton] = useState(true);

  useEffect(() => {
    dispatch(postsThunk());
  }, []);

  const handleDeletePost = (e, postId, postBody) => {
    e.preventDefault();
    setPostBody(postBody);
    axios
      .delete(
        `/api/posts/${postId}`,
        {
          post: { body: postBody, user: currentUser },
        },
        { withCredentials: true }
      )
      .then((response) => {
        dispatch(deletePost(response.data.id));
      });
    // .catch((error) => {
    //   console.log("login error", error);
    // });
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
              <p>
                <b>{fullName}</b>
                <br />
                <em>{postTitle}</em> - 1 hr ago
              </p>
            </PostTitle>
            <PostBody>{postBody}</PostBody>
            <BottomLine />
            <PostOptions>
              <p>Like</p>
              <p>Comment</p>
              <p>Share</p>
              {currentUser.id === post.user.id && (
                <Button onClick={(e) => handleDeletePost(e, post.id, postBody)}>
                  Delete Post
                </Button>
              )}
            </PostOptions>
          </SinglePost>
        );
      })}
    </MainWrapper>
  );
};
