Product Store Application

Created by Serhii Ruban

Project Description:

For create this app I used Angular 1.5 for front-end and NodeJS (Express) for back-end.  

In this app I created a product store with three main routes:

- Main page - the list of all products;
- Single product page - when user clicks on a product - he is transferred to a single product page;
- Edit product page - user can create, delete or edit a custom product on this page.

For design I used Bootstrap-3 CSS framework.

All products stored in data base on service "mlab" (https://mlab.com/). All updates also influence data base products. For back-end I developed server on NodeJS and I used for this follow modules: Express, mongodb, connect-multiparty and etc... 

Also this app have follow features:
- Validation of inputs when creating a product;
- Ability to set the different image for the product;
- Search product functionality;
- Sort by functionality;
- Before delete - alert shown to verify if user really wants to delete this product;
- Unit Testing (Karma, Jasmine).

--------------------------------------------------------------------------------------------------

Getting started

Make sure that on your PC installed last stable version NodeJS or download and setup NodeJS for your OS there: https://nodejs.org/en/download/

1. Clone or download github repo https://github.com/rubanwd/product-store-angular.git
2. Open folder "product-store-angular-master" in cmd and install all dependecies. For this enter in cmd "npm install";
3. Run server. For this enter in cmd "npm run server";
4. Open folder "product-store-angular-master" in another cmd and start this application. For this enter in cmd "npm start";
5. Open this application in your browser on link: http://localhost:8000/