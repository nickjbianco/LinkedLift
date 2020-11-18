import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { employmentsThunk } from "../../../reducers/EmploymentsReducer"; // All employments
import { gymsThunk } from "../../../reducers/GymsReducer"; // All gyms
import EditEmploymentModal from "./EditEmploymentModal";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: orange;
`;

export default () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const employments = useSelector((state) => state.employments);
  const myEmployments = employments.filter(
    (employment) => employment.userId === currentUser.id
  );

  useEffect(() => {
    dispatch(employmentsThunk());
    dispatch(gymsThunk());
  }, [employments]);

  return (
    <Wrapper>
      {myEmployments.map((myEmployment) => (
        <ul key={myEmployment.id}>
          <h3>{myEmployment.title}</h3>
          <p>{myEmployment.gymName}</p>
          <p>
            {myEmployment.startDate} - {myEmployment.endDate}
          </p>
          <p>{myEmployment.gymLocation}</p>
          <EditEmploymentModal currentEmployment={myEmployment} />
          <hr />
        </ul>
      ))}
    </Wrapper>
  );
};
