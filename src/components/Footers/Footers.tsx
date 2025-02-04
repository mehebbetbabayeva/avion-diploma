import React from 'react'
import "./Footes.css"
import facebook from "../../assets/images/footerem/facebook.svg";
import instagram from "../../assets/images/footerem/instagram.svg";
import twitter from "../../assets/images/footerem/twitter.svg";
import linkedin from "../../assets/images/footerem/linkedin.svg";
import youtube from "../../assets/images/footerem/youtube.svg";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Düzgün emal formatı daxil edin')
        .required('Email ünvanı boş buraxıla bilməz'),
});



const Footers: React.FC = () => {
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
        <footer className="footer">

            <div className="ust-footer">

                <div className=" ">
                    <h5 className="text-uppercase"> <FormattedMessage id='menu'/> </h5>
                    <div className="footer-center-links">
                        <a href="" className="text-secondary"><FormattedMessage id='footer2'/> </a>
                        <a href="" className="text-secondary"><FormattedMessage id='footer3'/></a>
                        <a href="" className="text-secondary"><FormattedMessage id='footer4'/></a>
                        <a href="" className="text-secondary"><FormattedMessage id='footer5'/></a>
                        <Link  to="/products" className="text-secondary"><FormattedMessage id='footer6'/></Link>
                    </div>
                </div>

                <div className="">
                    <h5 className="text-uppercase"><FormattedMessage id='footer7'/></h5>
                    <div className="footer-center-links">
                        <a href="" className="text-secondary"><FormattedMessage id='footer8'/></a>
                        <a href="" className="text-secondary"><FormattedMessage id='footer9'/></a>
                        <a href="" className="text-secondary"><FormattedMessage id='footer10'/></a>
                        <a href="" className="text-secondary"><FormattedMessage id='footer11'/></a>
                        <a href="" className="text-secondary"><FormattedMessage id='footer12'/></a>
                        <a href="" className="text-secondary"><FormattedMessage id='footer13'/></a>
                    </div>
                </div>

                <div className=" ">
                    <h5 className="text-uppercase"><FormattedMessage id='footer14'/></h5>
                    <div className="footer-center-links">
                        <Link  to="/about"  className="text-secondary"><FormattedMessage id='footer15'/></Link>
                        <a href="" className="text-secondary"><FormattedMessage id='footer16'/></a>
                        <Link  to="/contact"  className="text-secondary"><FormattedMessage id='footer17'/></Link>
                        <a href="" className="text-secondary"><FormattedMessage id='footer18'/></a>
                        <a href="" className="text-secondary"><FormattedMessage id='footer19'/></a>
                    </div>
                </div>



                <div className="footer-right">
                    <h4><FormattedMessage id='footer20'/></h4>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="email-container">
                            <input type="text"
                                name="email" placeholder="your@email.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} style={{ color: "white" }} />
                            <button type="submit" className="footer-button" id="Sign-up">
                               <FormattedMessage id='signup'/> 
                            </button>
                        </div>
                    </form>
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error-message">{formik.errors.email}</div>
                    ) : null}


                </div>

            </div>
            <div>
                <div className="alt-footer">

                    <h2 ><FormattedMessage id='footer21'/></h2>
                    <div className="social-links">



                        <a href="https://www.facebook.com"><img src={facebook} alt="" /></a>
                        <a href="https://www.instagram.com"><img src={instagram} alt="" /></a>
                        <a href="https://www.x.com"><img src={twitter} alt="" /></a>
                        <a href="https://www.linkedin.com"><img src={linkedin} alt="" /></a>
                        <a href="https://www.youtube.com"><img src={youtube} alt="" /></a>
                    </div>






                </div>
            </div>

        </footer>

    )

}

export default Footers