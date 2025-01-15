import React from 'react';
import './Benefit.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Düzgün emal formatı daxil edin')
    .required('Email ünvanı boş buraxıla bilməz'),
});

const Benefit: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
   
      Swal.fire({
        icon: 'success',
        title: 'Mesajınız gönderildi!',
        text: `Email: ${values.email}`,
        confirmButtonText: 'Tamam',
      });
      formik.resetForm(); 
    },
  });

  return (
    <section className="benefit">
      <div className="bene-container">
        <div className="bene-side">
          <h1>Join the club and get the benefits</h1>
          <p>
            Sign up for our newsletter and receive exclusive offers on new <br />
            ranges, sales, pop up stores and more
          </p>
          <form onSubmit={formik.handleSubmit}>
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
                Sign-up
              </button>
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
