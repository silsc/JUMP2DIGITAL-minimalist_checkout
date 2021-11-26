# Minimalist Checkout

This project is a basic minimalist checkout page build with React completely responsive that includes form validation.
This project was created as part of the [JUMP2DIGITAL](https://barcelonadigitaltalent.com/jump2digital/) Hackaton through [NUWE](https://nuwe.io/challenge/jump2digital-front).

## Stack

This app was created with [React](https://es.reactjs.org/) and styled with [Sass](https://sass-lang.com/) for creating a simple and minimalist checkout by following a simple design.

### Rest Countries API

For retrieving a list of all the countries the [Rest Countries API](https://restcountries.com/) was used. Check the API in order to change the countries display.

### Formik

The form validation system was built with the use of [Formik](https://formik.org/) and simple Regex.

## App folder structure

This app is divided in 2 big components, the product component (where the product information and picture is displayed) and the checkout component (where the checkout form can be found). Inside of the checkout component two other components are imported: the countries component (that retrieves the countries list from the API) and the Checkout Form component where the Form using the Formik library can be found.

## Deployment

This app was deployed through Netlify and the live version can be found [here](https://frontend-hackaton-silsc.netlify.app/)

## License
All of the design files where provided by [NUWE](https://nuwe.io/challenge/jump2digital-front).

[MIT](https://opensource.org/licenses/MIT)
