import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditEmploymentModal from "./EditEmploymentModal";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { userThunk } from "../../../reducers/ViewUserReducer";

const Wrapper = styled.div`
  background-color: transparent;
  width: 80%;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  padding: 20px 72px 0 24px;
  line-height: 1.5;
`;

const LineBreak = styled.hr`
  width: 119%;
  margin-top: 16px;
`;

const GymTitle = styled.div`
  font-size: 16px;
`;

const GymBody = styled.div`
  font-size: 14px;
`;

const SingleGymInfo = styled.ul`
  background-color: transparent;
  line-height: 5px;
  padding-left: 0px;
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
          <SingleGymInfo key={employment.id}>
            <GymTitle>
              <p>
                <b>{employment.title}</b>
              </p>
            </GymTitle>

            <GymBody>
              <p>{employment.gymName}</p>
              <p>
                {employment.startDate} - {employment.endDate}
              </p>
              <EditEmploymentModal currentEmployment={employment} />
            </GymBody>

            <LineBreak />
          </SingleGymInfo>
        );
      })}
    </Wrapper>
  );
};
