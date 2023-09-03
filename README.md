# MicroBlog

This is micro blog app, that allows users either write interesting posts on the favourite topics, or read and comment such posts.

## Structure and main features

### Homepage

App starts with the homepage, greeting you with two links - Sing Up snd Sign In - simplifying acces to the auth process.

![Homepage](/public/assets/01_homepage-min.png)
Same links are avaliable at the page header. Page footer contains link to author's GitHub profile. Header and footer are common for all the components.

### Sign Up

Sign up page containes user registration form with all the validation necessery. During sign up process you should indicate your nickname, email, password, and also choose which account type you prefer: author's - to write new posts, or commentator's - to read avaliable posts and comment them.

![Signup page](/public/assets/02_signup-min.png)

> **_Attention!_** After the regiatration process you will obtain a verification letter on your email!

### Login Page

Login page allows user to sign in.

To explore app features, you can use two additional buttons located upder "Sign In" button. This will fill sing in form with test data for the choosen account type to showcase the difference between proposed sign up modes.

![Signin page](/public/assets/03_login-min.png)

After a successfull sign up, greeting message appears at the page header (top right screen corner). Near the username you can find a logout button allowing to sign out.

### General Page

When signed in, user is redirected to general page where all the posts of all authors are gathered. Each post is presented by a card containing post title, short summary and 'View author' button, that redirects you to the author's page.

![General page](/public/assets/04_general-min.png)

If you are register as an author, you'll also find a post adding form at the top of the page. Here you can create new posts by indicating their title, summary, topic, and main text. You'll also be able to upload a header image for your post.

![Create post form](/public/assets/05_create_post-min.png)

### Author's Page

At the author's page all the posts by specific author are gathered. The name of the choosen author in indicated at the top of the page.

![Author's page](/public/assets/07_authors-min.png)

If you're registred as a commentator, under each post you'll find a field allowing to leave your comment.

![Author's page](/public/assets/08_comment_form-min.png)

To read all the comments for the post, you should press "See all comments" button located at the bottom of the post. It will open the section with comments, each containing date, time, author, and comment text.

![Comments section](/public/assets/09_all_comments-min.png)

## Developement mode

To run the project in development mode, clone this repository to your PC, install all the dependences with `npm install` command, run the `npm run dev` command in the terminal, and open your local app version at the indecated port (`http://localhost:3000/` by default). The application will automatically reload when any of the source files are changed.

## Tech stack

<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript" /></code>
<code><img height="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png" alt="Material UI" title="Material UI" /></code>
<code><img height="50" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="styled-components" title="styled-components" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux" /></code>
<code><img height="50" src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.png" alt="React-hook-form" title="React-hook-form" /></code>
<code><img height="50" src="https://supabase.com/dashboard/img/supabase-logo.svg" alt="Supabase" title="Supabase" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code" /></code>
