import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditEmploymentModal from "./EditEmploymentModal";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { userThunk } from "../../../reducers/ViewUserReducer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white, #fff);
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 20px 72px 0 24px;
  line-height: 1.5;
`;

const LineBreak = styled.hr`
  width: 120%;
  margin-top: 16px;
`;

export default () => {
  const params = useParams();
  const dispatch = useDispatch();
  const employments = useSelector((state) => state.employments);

  useEffect(() => {
    dispatch(userThunk(params.id));
  }, []);

  return (
    <Wrapper>
      {employments.allIds.map((id) => {
        const employment = employments.byIds[id];

        return (
          <ul key={employment.id}>
            <h3>{employment.title}</h3>
            <p>{employment.gymName}</p>
            <p>
              {employment.startDate} - {employment.endDate}
            </p>
            <EditEmploymentModal currentEmployment={employment} />
          </ul>
        );
      })}
    </Wrapper>
  );
};
