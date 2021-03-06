# LinkedLift

![MainPage](/LinkedLiftMainPage.png)

Live App: https://rocky-plateau-63509.herokuapp.com/

LinkedLift is a clone of the popular professional networking site LinkedIn. The app allows weight lifters to create an account, register past employments, and write posts. They can also connect to other lifters. The app allows users to create past employments, posts, as well as connect to other professionals. This app is built with Ruby on Rails, React/Redux and a PostgreSQL database.

## The app operates as follows

- User creates or logs in to an account.
- User lists their full name, title, location and past gym (employment) history.
- User is free to browse the site looking at Gyms (employment opportunities) as well as other lifters (professionals).

## Features

- User Authentication

  - Users will be greeted by a registration/login page upon first navigating to website. Existing users can login while new users can sign up.
  - Users who have not signed up or who have not logged in with proper info will not gain access to the website.

- Posts

  - Users can share their thoughts via posts and choose to delete them, as well.

- Connections

  - Users can interact with one another via making a connection.
  - Making a connection then puts both connected users in the same network.

- Employments
  - Users can create a previous employment histroy consisting of the gym they lifted at, their title at that gym, as well as the starting and end dates.

## Languages, Frameworks, and Libraries

- Backend

  - Ruby on Rails framework
  - PostgreSQL database

- Frontend

  - React.js for visual components
  - Redux for state management

- Gems
  - JBuilder for custom JSON responses
  - Bcrypt for user authentication

## Sample Code

```javascript
export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVED_EMPLOYMENTS:
      const allIds = action.payload.map((employment) => employment.id);

      const byIds = {};
      action.payload.forEach((employment) => {
        byIds[employment.id] = employment;
      });

      return {
        byIds,
        allIds,
      };
    case ADD_EMPLOYMENT:
      return {
        byIds: {
          ...state.byIds,
          [action.payload.id]: action.payload,
        },
        allIds: [...state.allIds, action.payload.id],
      };
    case EDIT_EMPLOYMENT:
      return {
        byIds: {
          ...state.byIds,
          [action.payload.id]: action.payload,
        },
        allIds: state.allIds,
      };
    default:
      return state;
  }
};
```
