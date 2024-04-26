# This code uses Parcel as Bundler.
# React uses Reconciliation Algorithm(React Fiber)
- Suppose there is a res-container that has 7 restaurant cards.If UI changes to filtering 3 filtered cards.React creates virtual Dom

# React is highly efficient as it has efficient Virtual DOm which efficiently manipulates DOM (refer- https://github.com/acdlite/react-fiber-architecture)


# Parcel usage
- Dev Build
- Creates Local Server
- Immediately loads/ refreshes the page on change of code due to (HMR - Hot Module Replacement)
- File watching Algorithm (Checks which file has changed) - Written in C++
- Cashing - Faster Builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking Algorithm (Parcel removes unused codes for u)
 - lazy loading( If i use npx parcel index.html --lazy)
 - Creates different Dev and Prod bundles

 # To create Prod build ,use the below command
 - npx parcel build index.html

 # For creating dev build ,use below command 
  - npx parcel index.html 

# What is the use of browserlist that i defined in Package.json
- It consists of browsers with which our application will be compartible.It is dependent on project requirement and compartibility.

 # Babel transpiles jsx to react.create element and it further converts to js object which then converts to html element that then renders in browser.Babel is managed by our bundler.

# IMP JSX property
- We obviously will intend to inject data within {} to render within jsx. But if we try to add any malicious data to render within curly brance,jsx will not render it.

# when we are using {} , it is named import,used for importing multiple values import

# Routing is of 2 types-
- Server side routing (Suppose u clicked on About US in headers,so route will render the About us page and calls the api of that page and renders data without reloading the page).
-  Client side routing (SPA)

# I have implemented Redux-Toolkit for Adding item to Cart.
- Installed @reduxjs/toolkit and react-redux.
- Build our store.
- Conntect our store to App
- Slice (Cart Slice)
- Dispatch(Action)
- Selector ( To subscribe to store)

# In older version of Redux(Vanilla Redux),it did not allow to modify any value inside suppose addItems/remove Items etc tht we defined in 'CardSlices' file.
- Hence previously we used to create copy of state and then had to modify it.
- ex-
- addItems(state,action) =>{
  let newState = {...state};
  newState.items.push(action.payload)
  return newState;
}
- But in new redux,it is mandatory to modify the state directly and no need to modify the value.
- Behind the scenes, redux is immutating the state as it was happening in vanilla redux ,using Immer library

#  Developer testing is implemented into this project.

# Different types of Developer testing - 
- Unit Testing
- Integration Testing
- End to end testing

# Steps used for testing Installaltion
- Install React Testing Library
- Install Jest
- Install Babel Dependencies
- COnfigure Babel (Babel.config.js)
- Configure Parcel config to disable existing parcel babel transpilation(.parcelrc)
- Jest configuration - npx jest --init
- iNSTALL jsdom library.
- Install @babel/preset-react to make jsx work in test cases
- Include @babel/preset-react inside babel config file
- Install @testing-library/jest-dom





