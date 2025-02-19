import React, { useEffect } from 'react';
import "./AboutForm.css";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { FormattedMessage } from 'react-intl';
import { FaCheckCircle } from "react-icons/fa"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const validationSchema = yup.object({
    email: yup
      .string()
      .email('Düzgün email formatı daxil edin')
      .required('Email ünvanı boş buraxıla bilməz'),
});

const AboutForm = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: false,      
            mirror: true      
        });
    }, []);

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          Swal.fire({
            icon: 'success',
            title: 'Mesajınız göndərildi!',
            text: `Email: ${values.email}`,
            confirmButtonText: 'Tamam',
          });
          formik.resetForm(); 
        },
    });

  return (
    <div>
      <div className="aboutform-container" data-aos="fade-up">
        <div className="bene-side1" data-aos="zoom-in">
          <h1><FormattedMessage id='benefittitle' /></h1>
          <p>
            <FormattedMessage id='benefittitle1' />
            <br />
            <FormattedMessage id='benefittitle2' />
          </p>

       
          <div className="benefit-list" data-aos="fade-right">
            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <span><FormattedMessage id="exclusiveOffers" /></span>
            </div>
            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <span><FormattedMessage id="freeEvents" /></span>
            </div>
            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <span><FormattedMessage id="largeDiscounts" /></span>
            </div>
          </div>

      
          <form className="benefit-form" onSubmit={formik.handleSubmit} data-aos="fade-left">
            <div className="email-container">
              <input
                type="text"
                name="email"
                placeholder="your@email.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button type="submit" className="Sign up" id="Sign-up">
                <FormattedMessage id='signup' />
              </button>
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  )
}

export default AboutForm;
