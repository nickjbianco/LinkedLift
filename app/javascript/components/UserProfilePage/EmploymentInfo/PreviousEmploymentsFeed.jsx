import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditEmploymentModal from "./EditEmploymentModal";
import { employmentsThunk } from "../../../reducers/EmploymentsReducer";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: orange;
`;

export default () => {
  const dispatch = useDispatch();
  const employments = useSelector((state) => state.employments);

  useEffect(() => {
    dispatch(employmentsThunk());
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
            <p>{employment.gymLocation}</p>
            <EditEmploymentModal currentEmployment={employment} />
            <hr />
          </ul>
        );
      })}
    </Wrapper>
  );
};
