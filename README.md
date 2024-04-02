# React uses Reconciliation Algorithm(React Fiber)
- Suppose there is a res-container that has 7 restaurant cards.If UI changes to filtering 3 filtered cards.React creates virtual Dom

# React is highly efficient as it has efficient Virtual DOm which efficiently manipulates DOM (refer- https://github.com/acdlite/react-fiber-architecture)
# This code uses Parcel as Bundler.

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
- It consists of brosers with which our application will be compartible.It is dependent on project requirement and compartibility.

 # Babel transpiles jsx to react.create element and it further converts to js object which then converts to html element that then renders in browser.Babel is managed by our bundler.

# IMP JSX property
- We obviously will intend to inject data within {} to render within jsx. But if we try to add any malicious data to render within curly brance,jsx will not render it.

# when we are using {} , it is named import,used for importing multiple values import



