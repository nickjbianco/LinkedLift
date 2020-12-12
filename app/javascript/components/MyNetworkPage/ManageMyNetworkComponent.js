import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersThunk, alreadyConnected } from "../../reducers/UsersReducer";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  margin-top: 30px;
  margin-right: 20px;
  margin-left: 40px;
  text-align: center;
  width: 290px;
  height: 700px;
  margin-bottom: 30px;
`;

const ManageMyNetwork = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  line-height: 0px;
  height: 335px;
`;

const ManageMyNetworkTitle = styled.p`
  font-size: 16px;
  color: #00000099;
  margin-top: 8px;
`;

const ManageMyNetworkBody = styled.p`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 5px;
  color: #00000099;
`;

const LatestNews = styled.div`
  background-color: transparent;
`;

const LatestNewsTitle = styled.div`
  font-size: 12px;
  color: #0000008c;
`;

const LatstNewsBody = styled.div`
  font-size: 15px;
  color: #0000008c;
  margin-right: 10px;
  margin-left: 10px;
`;

const FollowButton = styled.button`
  border-radius: 25px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  font-size: 90%;
  cursor: pointer;
  width: 20%;
  height: 40%;
`;

const PersonalContacts = styled.div`
  background-color: transparent;
`;

const PersonalContactsTitle = styled.p`
  font-size: 14px;
  color: #000000e6;
`;

const PersonalContactsMessage = styled.p`
  font-size: 12px;
  color: #00000099;
  margin-right: 10px;
  margin-left: 10px;
`;

const LearnMore = styled.p`
  font-size: 12px;
  color: #0a66c2;
`;

const EmailHolder = styled.input`
  margin: 0px 0px 8px;
  padding: 6px 8px;
`;

const ContinueButton = styled.button`
  border-radius: 25px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  font-size: 90%;
  cursor: pointer;
  width: 30%;
  height: 25px;
`;

const MoreOptions = styled.p`
  font-size: 14px;
  color: #00000099;
`;

export default () => {
  const dispatch = useDispatch();
  const allConnections = useSelector(alreadyConnected);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(usersThunk());
  }, []);

  return (
    <Wrapper>
      <ManageMyNetwork>
        <ManageMyNetworkBody>
          <ManageMyNetworkTitle>
            <b>Manage my network</b>
          </ManageMyNetworkTitle>
          <p>Connections {allConnections.length}</p>
          <p>Teammates</p>
          <p>Contacts</p>
          <p>People I Follow</p>
          <p>Groups</p>
          <p>Events</p>
          <p>Pages</p>
          <p>Newsletters</p>
          <p>Hashtags</p>
        </ManageMyNetworkBody>
      </ManageMyNetwork>

      <hr />

      <LatestNews>
        <LatestNewsTitle>Get the latest jobs and industry news</LatestNewsTitle>
        <LatstNewsBody>
          {" "}
          <p>
            {currentUser.first_name}, explore relevant opportunities with{" "}
            <b>EliteFTS</b>
          </p>
          <FollowButton>Follow</FollowButton>
        </LatstNewsBody>
      </LatestNews>

      <hr />

      <PersonalContacts>
        <PersonalContactsTitle>Add personal contacts</PersonalContactsTitle>
        <PersonalContactsMessage>
          We'll periodically import and store your contacts to help you and
          others connect. You choose who to connect to and who to invite.
        </PersonalContactsMessage>
        <LearnMore>
          <b>Learn more</b>
        </LearnMore>
        <EmailHolder placeholder={currentUser.email} disabled={true} />
        <br />
        <ContinueButton disabled={true}>Continue</ContinueButton>
        <MoreOptions>More options</MoreOptions>
      </PersonalContacts>
    </Wrapper>
  );
};
