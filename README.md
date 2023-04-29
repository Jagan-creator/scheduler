# Interview Scheduler

Interview Scheduler is a single page web app that allows for the user to book appointments with various interviewers on a pre set schedule showing availability. Each of these bookings has additional functionality in that they can edit, delete, or cancel them. This project was developed primarily with React for the front end while also using an API to initilize data for the various scheduler days. Additional frameworks such as Jest, Storybook, and Cypress were used to help test and better the code that was written for this project.

## Primary Features

- users are shown which days are available with spots and which are not
- when a user books an appointment that will in turn remove a spot available for that day
- when a user deletes an appointment that will in turn add a spot available for that day
- editing an appointments student name and the interviewer they have selected
- full deletion of appointments
- cancel out of an appointment booking if you change your mind
- confirmation checks when you are trying to delete a booking
- error handlers for making sure user picks a student name and an interviewer

## Scheduler Preview

### Day Selection

!["day selection"](https://raw.githubusercontent.com/Jagan-creator/scheduler/248fec8a0d31f968b210019ff3ba3bce7d1a8b39/public/images/scheduler-day-selection.gif)

### Booking an Appointment

!["booking an appointment"](https://raw.githubusercontent.com/Jagan-creator/scheduler/248fec8a0d31f968b210019ff3ba3bce7d1a8b39/public/images/scheduler-booking-creation.gif)

### Edit and Delete an Appointment

!["edit and delete an appointment"](https://raw.githubusercontent.com/Jagan-creator/scheduler/248fec8a0d31f968b210019ff3ba3bce7d1a8b39/public/images/scheduler-booking-edit-and-delete.gif)

## Dependencies

```sh
axios
classnames
normalize.css
react
react-dom
react-hooks-testing-library
react-scripts
```

## devDependencies

```sh
babel/core
storybook/addon-actions
storybook/addon-backgrounds
storybook/addon-links
storybook/addons
storybook/react
testing-library/jest-dom
testing-library/react
babel-loader
prop-types
react-test-renderer
sass
```

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

Go to <http://localhost:8000/> in your browser to see the displayed client.

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
