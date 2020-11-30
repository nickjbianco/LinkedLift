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
  align-items: space-evenely;
`;

const Form = styled.form`
  background-color: transparent;
  display: flex;
`;
const Button = styled.button`
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  width: 90%;
  padding: 0;
  font-size: 150%;
  cursor: pointer;
  line-height: 1.2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  width: 10%;
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
