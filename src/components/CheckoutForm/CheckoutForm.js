import "./checkoutform.scss"

import React, { useState } from 'react';
import  { Formik, Form, Field, ErrorMessage } from "formik";
import { Countries } from '../Countries/Countries';
import cvc from '../assets/cvc.png'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import aex from '../assets/aex.png'
import discover from '../assets/discover.png'

const CheckoutForm = (props) => {
  const [sentForm, changeSentForm] = useState(false);
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        card: "",
        cvc: "",
        zip: ""
      }}
      validate={(values) => {
        let errors = {};

        if (!values.name) {
          errors.name = "Please write a name"
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
          errors.name = "The name must contain only letters and spaces."
        }

        if (!values.email) {
          errors.email = "Please write an email"
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
          errors.email = "Wrong email format"
        }

        if (!values.card) {
          errors.card = "Please write a valid format"
        } else if (!/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(values.card)) {
          errors.card = "Wrong card format"
        } 

        if (!values.cvc) {
          errors.cvc = "Please write a valid format"
        } else if (!/^[0-9]{3,4}$/.test(values.cvc)) {
          errors.cvc = "Wrong CVC format"
        }

        if (!values.zip) {
          errors.zip = "Please write a ZIP code"
        } else if (!/^[-0-9]*$/.test(values.zip)) {
          errors.zip = "Wrong ZIP format"
        }

        return errors
      }}
      onSubmit={({resetForm}) => {
        resetForm();
        changeSentForm(true);
      }}
    >
      {({errors}) => (
        <Form className="form" id="form">
          <div className="form-entry">
              <label className="label">Email</label>
              <Field 
                type="text" 
                name="email" 
                placeholder="elon.musk@email.com"
              />
              <ErrorMessage name="email" component={() => (
                <div className="error">{errors.email}</div>
              )}/>
          </div>
          <div className="form-entry">
            <label className="label">Card info</label>
            <Field 
              type="number" 
              className="card-number" 
              name="card" 
              placeholder="1234 1234 1234 1234"
            />
            <div className="card-types">
              <img className="card-img" src={visa} alt="visa"/>
              <img className="card-img" src={mastercard} alt="mastercard"/>
              <img className="card-img" src={aex} alt="aex"/>
              <img className="card-img" src={discover} alt="cvc"/>
            </div>
            <ErrorMessage name="card" component={() => (
                <div className="error">{errors.card}</div>
              )}/>
            <div className="card-info-container">
              <input 
                type="number" 
                className="expiry" 
                name="expiry" 
                placeholder="MM/YY"
              />
              <Field 
                type="number" 
                className="cvc" 
                name="cvc" 
                placeholder="CVC"
              /> 
              <img className="cvc-img" src={cvc} alt="cvc"/>
            </div>
          </div> 
          <div className="form-entry">
            <label className="label">Name on card</label>
            <Field 
              type="text" 
              name="name" 
              placeholder="Elon Musk"
            />
            <ErrorMessage name="name" component={() => (
              <div className="error">{errors.name}</div>
            )}/>
          </div>
          <div className="form-entry">
            <label className="label">Country or region</label>
            <select 
              type="text" 
              name="country" 
              className="card-country" 
            >
              <Countries></Countries>
            </select>
            <Field 
              type="text" 
              name="zip" 
              className="card-zip" 
              placeholder="ZIP"
            />
            <ErrorMessage name="zip" component={() => (
              <div className="error">{errors.zip}</div>
            )}/>
          </div>
          <button 
            type="submit" 
            className="btn submit-btn">
              {`Pay ${props.price}`}
          </button>
          {sentForm && <div><p className="sucess">Your purchase has been made!</p></div>}
        </Form> 
      )}
    </Formik>
  )
}

export default CheckoutForm
