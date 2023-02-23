# 🧢 Refera Technical Evaluation Client

This project is a web application built with React that provides a simple interface for listing, detailing and creating orders and handling user authentication. It was templated using `Typescript`, `Vite`, `Prettier`, `ESLint`


### 🩴 Set up
---
- To get started with the project, you will need to have yarn installed on your machine

```
% git clone https://github.com/lucasmsa/refera-technical-evaluation-client.git

% cd refera-technical-evaluation-client

% yarn

% yarn dev
```

- This will start the application on port 3000. You can then access it by opening a web browser and navigating to http://localhost:3000/

### ⚙️ Features
---
- **User authentication**: Users can `signUp`, `login` and `logout`. Authentication is required to access the orders entity, so only users with a valid token can enter these authenticated routes, a wrapper protecting the routes was created and used with `react-router-dom`
- **Token**: The authentication is made via token and is saved on the browser's `localStorage`, which is **not** the ideal and most secure way to deal with user authentication. Storing tokens in `localStorage` is not ideal because it can expose the token to security vulnerabilities such as `cross-site scripting (XSS)` attacks. 
  - An attacker who gains access to the user's browser can potentially steal the token and use it to impersonate the user or perform other malicious actions. A better solution is to store the token in an `HTTP-only cookie`. This makes the token inaccessible to client-side JavaScript, which helps to prevent it from being stolen by an attacker. Also, you can set the cookie to be secure and have an expiration time to further improve security. By using cookies, you can still authenticate the user for future requests without exposing sensitive data to security risks. 

- **Orders operations**: Users can create, list (using `react-table`), fetch details orders. Modals used to create a new order and fetch the details of an `Order` were created with `react-modal` library

- **Form validation and state managements**: All forms included in the application `login`, `signUp`, `createOrder` are properly validated using `react-hook-form`, providing a fast response to input validation errors and simplifying state management on these parts of the app. It was used in conjunction with `redux` and `@reduxjs/toolkit`, providing a performatic error handling system and requests handler for the application. Furthermore, `react-toastify` was used to provide success messages and API errors

### ☁️ How could a production environment be created?
---
`Vercel` could be used for example for a production environment

- **Configure the project settings**: Once the project is imported to the vercel platform, configure your project settings in the Vercel dashboard. You can specify settings such as the build command, environment variables, and deployment options.

- **Deploy your project**: To deploy your project, simply push your changes to your Git repository. Vercel will automatically build and deploy your app to a production environment. Alternative to doing that on vercel platform a CI/CD pipeline can be created, integrating the Vercel deploy after some checks are made

- **Set up custom domains and SSL**: To set up custom domains and SSL for your app, the Vercel dashboard is available to configure DNS settings and generate SSL certificates.

- **Monitor your app**: Use the Vercel dashboard to monitor your app and view logs and analytics. You can also set up alerts to be notified of any issues or errors.
