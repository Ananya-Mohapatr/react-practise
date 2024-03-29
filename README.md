# This code uses Parcel as Bundling.

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

