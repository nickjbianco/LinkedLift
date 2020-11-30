import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PostsFeed from "./PostsFeed";
import { addMyNewPost } from "../../reducers/PostsReducer";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f3f2ef;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  background-color: transparent;
  display: flex;
  align-self: center;
  width: 500px;
`;

const Button = styled.button`
  border-radius: 2px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  font-size: 150%;
  cursor: pointer;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 10px;
`;

const TextArea = styled.textarea`
  border-radius: 25px;
  border: 2px solid #d6cec2;
  width: 90%;
  padding-left: 10px;
  display: flex;
  align-self: center;
`;

export default () => {
  const [body, setBody] = useState("Start a post...");
  const dispatch = useDispatch();

  const addPost = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/posts",
        {
          post: { body },
        },
        { withCredentials: true }
      )
      .then((response) => {
        dispatch(addMyNewPost(response.data));
        setBody("Start a post");
      })
      .catch((error) => {
        console.log("post error", error);
      });
  };

  return (
    <Wrapper>
      <Form onSubmit={addPost}>
        <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
        <Button type="submit">Post</Button>
      </Form>

      <PostsFeed />
    </Wrapper>
  );
};
