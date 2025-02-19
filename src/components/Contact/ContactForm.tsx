import "./ContactForm.css"; 
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useIntl } from "react-intl";
import Swal from "sweetalert2"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const intl = useIntl();

  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: false,      
      mirror: true     
    });
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string().required(intl.formatMessage({ id: "required" })),
    lastName: Yup.string().required(intl.formatMessage({ id: "required" })),
    email: Yup.string().email(intl.formatMessage({ id: "invalidEmail" })).required(intl.formatMessage({ id: "required" })),
    phone: Yup.string().matches(/^[0-9]{10}$/, intl.formatMessage({ id: "invalidPhone" })).required(intl.formatMessage({ id: "required" })),
    message: Yup.string().required(intl.formatMessage({ id: "required" })),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      Swal.fire({
        title: intl.formatMessage({ id: "success" }),
        icon: "success",
        confirmButtonText: "OK",
      });

      formik.resetForm();
    },
  });

  return (
    <section className="contact-section">
      <div className="contact-bg" data-aos="fade-down">
        <h3>Get in Touch with Us</h3>
        <h2>Contact Us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste
          facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis
          quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.
        </p>
      </div>

      <div className="contact-body">
        <div className="contact-info" data-aos="fade-right">
          <div>
            <span><i className="fas fa-mobile-alt"></i></span>
            <span>Phone No.</span>
            <span className="text">1-2392-23928-2</span>
          </div>
          <div>
            <span><i className="fas fa-envelope-open"></i></span>
            <span>E-mail</span>
            <span className="text">mail@company.com</span>
          </div>
          <div>
            <span><i className="fas fa-map-marker-alt"></i></span>
            <span>Address</span>
            <span className="text">2939 Patrick Street, Victoria TX, United States</span>
          </div>
          <div>
            <span><i className="fas fa-clock"></i></span>
            <span>Opening Hours</span>
            <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>

        <div className="contact-form" data-aos="fade-left">
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder={intl.formatMessage({ id: "firstName" })}
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}

            <input
              type="text"
              placeholder={intl.formatMessage({ id: "lastName" })}
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error">{formik.errors.lastName}</div>
            ) : null}

            <input
              type="email"
              placeholder={intl.formatMessage({ id: "email" })}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}

            <input
              type="text"
              placeholder={intl.formatMessage({ id: "phone" })}
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}

            <textarea
              placeholder={intl.formatMessage({ id: "message" })}
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}

            <input type="submit" className="send-btnn" value={intl.formatMessage({ id: "sendMessage" })} />
          </form>
        </div>
      </div>

      <div className="map" data-aos="zoom-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          aria-hidden="false"
        ></iframe>
      </div>

      <div className="contact-footer" data-aos="fade-up">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
