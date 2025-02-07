import React from 'react';
import './Benefit.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { FormattedMessage } from 'react-intl';

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
          <h1>       <FormattedMessage id='benefittitle'/> </h1>
          <p>
          <FormattedMessage id='benefittitle1'/>
            <br />
          <FormattedMessage id='benefittitle2'/>

      
          </p>
          <form className='benefit-form' onSubmit={formik.handleSubmit}>
            <div className="email-container">
              <input
                type="text"
                name="email"
                placeholder="your@email.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button type="submit" className="Signup" id="Sign-up">
              <FormattedMessage id='signup'/>

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
