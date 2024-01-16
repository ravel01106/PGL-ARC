# APP PGL-ARC

## Exercise one: app navigation

### Description

This project aims to implement navigation between windows and the use of context.

### Screen Components

- **Welcome**: This component displays a welcome message which, depending on whether it is successful, displays a button to redirect to login screen or to portfolio screen.

- **Login**: This component is where the user must enter his name and password, if he enters the correct data he will be redirected to the welcome component.

- **Portfolio**: This component has a navigation between two components, the card screen and the qr screen.

  - **Card**: This component displays the portfolio information.

  - **Qr**: This component displays the qr that redirects to github.

---

## Exercise one: login user api

### Description

The purpose of this project is to log in and register users through a user api.

### Service Components

- **LoginUserService**: This service makes a POST request to the api and checks if the user we want to log in exists. So, if it returns a 200 it will pass us the user's name.

- **RegisterUserService**: This service makes a POST request to the api and checks and creates a new user within it. So, if it returns a 200 it will pass us the name of the user and the user is created inside the api. If it returns a 400 it gives us an alert that the user already exists.

- **LogoutService**: This service makes a POST request to the api and log out the user we send. If it returns a 200 it means that it has been successfully log out.

- **RequestService**: This service returns the request init of the request we want to make.

- **AsyncStoreService**:This service performs all operations related to storing or deleting cookies from the mobile device.

### Screen Components

- **RegisterScreen**: This component registers a new user and logs him/her in directly.

---
