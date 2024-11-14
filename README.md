# Weight Tracker Interview Test

Welcome to our Weight Tracker Test! This repository is designed to evaluate your coding skills, particularly in ReactJS. Here, we are interested in how you structure code, manage state, and perhaps also how you approach UI design. Creating a "pretty" web appliaction is not important here, but we do want to see you use some certain packages.

### Tech Stack
- ReactJS
- TailwindCSS
- TypeScript (JavaScript is also fine, but TypeScript is preferred)

## How to submit your code:
We think the easiest way for you to submit your code, is to:
1. `Fork` this repository.
2. `Clone` your fork on your machine locally.
2. Make modifications to your `fork`.
3. Once you are done, `push` your code to your own fork.
4. Notify us so that we can start reviewing your fork! We should be able to see your fork inside `GitHub`.

You may also `compress` (`.zip`) your code and send it back to us. However we aim to see your `git` knowledge (basics: `clone`, `commit`, `push`)

## Test
### Objective

To build a simple weight tracking application using React, demonstrating your proficiency in:
- React fundamentals (hooks, components, state management)
- Basic routing
- Simple form/input handling on a login page
- Conditional rendering, e.g. hide/show a component

### Setup Instructions

1. **Initialize your React App**: Use `create-react-app` or any similar tool to set up your project. 
> PS: Setting up React from scratch using Webpack is a bonus, but not required.
2. Install Dependencies:
- `react` (Ensure it's `v18` or later)
- `react-router-dom`
- `tailwindcss`
- `typescript`
- Any additional packages you believe will enhance the application

## Application Requirements

### Pages:
1. Login Page (`login.tsx`)
> Features:
- Two inputs: 
  - Email
  - Password
- A login button
- Hardcode a valid email and password for testing (e.g., `test@example.com` / `password123`).

2. Main Page (`main.tsx`)
> Features:
- Display three predefined weights in a list format.
- The list should be managed through React state. Using `Redux` is a bonus, but not required.
- An "Add Weight" button to toggle visibility of an AddWeight component. It can be hidden/shown below the list, or it can be a modal/popup.

### Components:
> Add Weight Component (`add_weight.tsx`)
It can be hidden/shown below the Main list, or it can be a modal/popup.
- Should appear when the "Add Weight" button is clicked.
- Contains an input field for weight entry and a submit/save button.
- Upon submission, the new weight should update the list in Main Page.

### Additional Notes:
- The application does not need to connect to a database. All data can be managed in-memory via state. If you want to, you may use a MongoDB Docker Container.
- Focus on functionality over aesthetics, but feel free to apply sensible styling.
- Use React Router for navigation between the login and main pages.

## Good luck! We look forward to reviewing your implementation of this weight tracking application. If you have any questions, feel free to ask!
