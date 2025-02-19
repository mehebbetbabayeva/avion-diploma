import React, { useEffect } from 'react';
import './Benefit.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { FormattedMessage } from 'react-intl';
import AOS from 'aos';
import 'aos/dist/aos.css';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Düzgün emal formatı daxil edin')
    .required('Email ünvanı boş buraxıla bilməz'),
});

const Benefit: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,once:false,    mirror:true    });
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
    <section className="benefit">
      <div className="bene-container" data-aos="fade-up">
        <div className="bene-side">
          <h1 data-aos="fade-down">
            <FormattedMessage id='benefittitle' />
          </h1>
          <p data-aos="fade-right">
            <FormattedMessage id='benefittitle1' />
            <br />
            <FormattedMessage id='benefittitle2' />
          </p>
          <form className='benefit-form' onSubmit={formik.handleSubmit} data-aos="zoom-in">
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
                <FormattedMessage id='signup' />
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
