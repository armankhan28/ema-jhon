/*
1. create a project in console.firebase.google.com
2. npm install firebase
3. create firebase.init.js and import getAuth to export auth
4.Firebase setting > Authentication > enable Email & Password auth
5.create login, signup component, setup route
6.attach form field handler and form submit handle
7.npm install --save react-firebase-hooks
8.useCreateUserWithEmailAndPassword from react-firebase-hooks
9. if user is created redirect to the expected page
10.useSignInWithEmailAndPassword for sign in
11.create RequireAuth component => check user exists also track user location
12.In Route wrap Protected component by using Require Auth component

*/



/*
  # Firebase hosting steps
  1.npm install -g firebase-tools (on time for your computer)
  2.firebase login (on time for your computer)
  3.firebase init (on time for each project)
  4.npm run build (every time you want to deploy)
  5.firebase deploy (every time you want to deploy)


*/