# Task

Create a [React](https://reactjs.org) application that provides the features described in this document.
The basic requests of the task must be fulfilled. Further creative approaches are of course always desired and a great bonus.

Good luck and have fun!

# Setting up the project

You can use [create-react-app](https://facebook.github.io/create-react-app/) in order to kickstart your assignment. 
If you prefer, you can setup [webpack](https://webpack.github.io) yourself as well, or use [Parcel](https://parceljs.org).

# Git

Just fork the repository and add your solutions to your fork, so that we can have a look at your work. Thank you very much!

# Description

You are developing a new dashboard. Your task is to create a new dashboard with which the user can manage his account.
Of course, it is not supposed to be complete. We would like to limit ourselves to just one excerpt.

In this scenario, the form for changing user data is to be created. The user has called this page in the previous step and wants to be able to do the following:

In the first tab (basic data):

- Change e-mail address
- Change Password
- The password must have certain properties:
  - "Password" and "Password repeat" fields need to be identical (including an indicator for this equality)
  - The password field should accept Uppercase letters, lowercase letters, numbers and special characters
  - A multi-color password strength indicator should be implemented
- Button to update the user data

In the second tab (Address):

- Change first name
- Change Last Name
- Change address (street, house number, postal code)
- Change country (Germany, Austria, Switzerland are available)
- Button to update the user data

It is important that the user receives feedback if his input is incorrect, correct, his data has not been saved and his data has been successfully saved.

# Layout

You can use Bootstrap framework or other CSS frameworks, or of course you could just build your own custom frontend styles, or a mix of the two approaches.

Please note that this dashboard should also works mobile (on tablets as well as on smartphones).

When styling, you can decide for yourself what it should look like.
However, bonus points are awarded if the styles resemble those of [energieloft.de](https://energieloft.de) and could fit as seamlessly as possible within that website..

A layout mockup can be found in the file: [mockup.jpg](https://gitlab.com/innoloft/innoloft_frontend_application/blob/master/mockup.jpg)

# Code structure

The application should at the very least use the following:

- It uses the React.js framework
- A CSS pre-compiler (SASS, LESS, SCSS) or other CSS approaches (CSS modules, Styled components)

You can use external modules like [Redux](https://redux.js.org), [informed](https://joepuzzo.github.io/informed/), and whatever you think is necessary.

In React, the application is to be assembled into suitable, reusable React components.

Possible components would be:

- Header
- Footer
- User
- UserInputTabs
- Aside

It is however up to you to provide the structure you think works best in a production-level app.


Thank you, and have fun!
