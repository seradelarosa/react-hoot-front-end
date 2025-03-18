# React JWT Auth Template

## About

This repo is a React JWT Auth template meant to be paired with a back-end app utilizing JWT tokens.

## Getting started

Fork and clone this repository to your local machine.

After moving into the cloned directory, run `npm i` to download the dependencies.

Create a `.env` file in the root of the project and add the following:

```plaintext
VITE_BACK_END_SERVER_URL=http://localhost:3000
```

Start the app with `npm run dev`.

User stories
Below are the user stories we will implement within Hoot:

As a guest, I should be able to create an account.
As a new user with an account, I should be able to log in to my account.
As a user, I should be able to create a hoot post.
As a user, I should be able to see a list of all hoots on a ‘List’ page.
As a user, clicking on a hoot in the ‘List’ page should navigate me to a hoot’s ‘Details’ page to view information about a single hoot post and its associated comments.
As a user, I should be able to add a comment on a hoot’s ‘Details’ page.
As the author of a hoot, I should see a link to ‘Edit’ a hoot on the ‘Details’ page. Clicking on the link should direct me to an ‘Edit’ page where I can modify the hoot. Upon submitting the update, I should be redirected back to the ‘Details’ page.
As the author of a hoot, I should see a button to ‘Delete’ a hoot on the ‘Details’ page. Clicking the button should delete the hoot and redirect me back to the ‘List’ page.
