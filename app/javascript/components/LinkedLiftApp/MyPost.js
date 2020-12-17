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
  margin: 0 25px;
  margin-top: 30px;
  width: 22.3%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const Button = styled.button`
  border-radius: 25px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  font-size: 100%;
  cursor: pointer;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  width: 49px;
  display: flex;
  align-self: center;
  align-items: center;
`;

const TextArea = styled.textarea`
  border-radius: 15px;
  border: 2px solid #d6cec2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 100%;
  color: gray;
  width: 85%;
  align-self: center;
  margin: 15px 0px;
`;

const FormWrapper = styled.div`
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BottomLine = styled.hr`
  border-bottom: 1px solid var(--warm-gray-40, #cfcfcf);
  width: 97%;
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
      <FormWrapper>
        <Form onSubmit={addPost}>
          <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
          <ButtonWrapper>
            <div>Photo</div>
            <div>Video</div>
            <div>Event</div>
            <Button type="submit">Post</Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
      <BottomLine />
      <PostsFeed />
    </Wrapper>
  );
};
