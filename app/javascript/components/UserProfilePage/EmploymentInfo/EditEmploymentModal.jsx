import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { YearPicker } from "react-dropdown-date";
import { gymsThunk } from "../../../reducers/GymsReducer";
import axios from "axios";

export default (props) => {
  const dispatch = useDispatch();
  const gyms = useSelector((state) => state.gyms);
  const currentEmployment = props.currentEmployment;
  const [title, setTitle] = useState("");
  const [gymId, setGymId] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [startMonth, setStartMonth] = useState(undefined);
  const [startYear, setStartYear] = useState(undefined);
  const [endMonth, setEndMonth] = useState(undefined);
  const [endYear, setEndYear] = useState(undefined);
  const fullEndDate =
    endMonth && endYear ? `${endYear}-${endMonth}-01` : undefined;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    dispatch(gymsThunk());
    setTitle(currentEmployment.title);
    setGymId(currentEmployment.gymId);
    setStartMonth(months.indexOf(currentEmployment.startMonth) + 1);
    setStartYear(currentEmployment.startYear);
    setEndMonth(months.indexOf(currentEmployment.endMonth) + 1);
    setEndYear(currentEmployment.endYear);
  }, []);

  const handleCloseModal = (e) => {
    e.preventDefault();
    axios
      .patch(
        `http://localhost:3000/employments/${currentEmployment.id}`,
        {
          employment: {
            title,
            gym_id: gymId,
            start_date: `${startYear}-${startMonth}-01`,
            end_date: fullEndDate,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        setShowModal(false);
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  return (
    <div>
      <span>
        <button onClick={() => setShowModal(true)}>Edit Gym</button>
        <ReactModal
          isOpen={showModal}
          contentLabel="Add Gym"
          ariaHideApp={false}
          onRequestClose={() => setShowModal(false)}
        >
          <form onSubmit={handleCloseModal}>
            <h2>Edit Previous Gym</h2>
            <div>
              <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <select value={gymId} onChange={(e) => setGymId(e.target.value)}>
                <option value="">--Select Gym</option>
                {gyms.map((gym) => (
                  <option key={gym.id} value={gym.id}>
                    {gym.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
              >
                <option value="">--Select Start Month</option>
                {months.map((month, idx) => (
                  <option key={month} value={idx + 1}>
                    {month}
                  </option>
                ))}
              </select>
              <YearPicker
                value={startYear}
                onChange={(year) => setStartYear(year)}
                defaultValue={"--Select Start Year"}
                start={1990}
                end={2020}
              />
            </div>
            <div>
              <select
                value={endMonth}
                onChange={(e) => setEndMonth(e.target.value)}
              >
                <option value="">--Select End Month</option>
                {months.map((month, idx) => (
                  <option key={month} value={idx + 1}>
                    {month}
                  </option>
                ))}
              </select>
              <YearPicker
                value={endYear}
                onChange={(year) => setEndYear(year)}
                defaultValue={"--Select End Year"}
                start={1990}
                end={2020}
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </ReactModal>
      </span>
    </div>
  );
};
