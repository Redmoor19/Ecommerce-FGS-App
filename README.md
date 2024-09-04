# Fake Game Store App

## Description

This project is a frontend assignment for the Integrify Academy Full Stack course. The task was to create an e-commerce website, and a game key store was chosen for this purpose. This project only works with the [backend](https://github.com/Redmoor19/fs18_java_backend). Fake Game Store is a non-profit educational project with no actual products. All data is mocked, and keys are generated using UUID.

During this project, I learned how to build a complex e-commerce React application with server state, authentication, and role-based access. The tight deadlines for the assignment helped me hone the skill of producing good code within a limited time. The UI was implemented using [Shadcn/UI](https://ui.shadcn.com/). Usage and features are listed below.

## Table of Contents

- [Installation](#installation)
- [DevStack](#devstack)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

- Fork this repository and clone your fork to your local machine.
- Pull all the data from your fork.
- Run `npm install`.
- Run `npm run dev`.
  (To run this project, you need to connect to the backend; otherwise, data fetching won't work.)

## DevStack

This project was implemented using React and the following packages:

- [Axios](https://www.npmjs.com/package/axios) for fetching data from the server
- [Shadcn/UI](https://ui.shadcn.com/) for UI/UX
- [React-Router-Dom](https://reactrouter.com/en/main) for routing
- [TailwindCss](https://tailwindcss.com/) for styling
- [React-Hook-Form](https://react-hook-form.com/) for managing forms
- [Zod](https://zod.dev/) for form validation

## Usage

### User Features

- Registration and login (account verification via email)

  ![Login](assets/images/login.png)
  ![Register](assets/images/register.png)

- Explore games with sorting, pagination, and search. Check game information and leave reviews.

  ![All Games](assets/images/main.png)
  ![Single Game](assets/images/single_game.png)
  ![Reviews](assets/images/reviews.png)

- Profile management, including updating information, viewing favorite games, and managing the cart (order checkout with email confirmation and purchased keys).

  ![Profile](assets/images/profile.png)
  ![Favourites](assets/images/favourites.png)
  ![Cart](assets/images/cart.png)

### Admin Features

- Dashboard access to create, update, and soft delete users.

  ![Users Dashboard](assets/images/users_dashboard.png)

- Dashboard access to create, update, add keys, and soft delete games.

  ![Games Dashboard](assets/images/games_dashboard.png)

- Dashboard access to view order statistics and user information.

  ![Orders Dashboard](assets/images/orders_dashboard.png)

## Credits

This project was created independently as an assignment for [Integrify Academy](https://www.integrify.io/).

## License

This project was created for educational purposes only. You are free to copy, edit, and contribute to it. No commercial use is allowed.
