import React from 'react'
import "./Footes.css"
import facebook from "../../assets/images/footerem/facebook.svg";
import instagram from "../../assets/images/footerem/instagram.svg";
import twitter from "../../assets/images/footerem/linkedin.svg";
import linkedin from "../../assets/images/footerem/twitter.svg";
import youtube from "../../assets/images/footerem/youtube.svg";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';

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
                    <h5 className="text-uppercase">Menu</h5>
                    <div className="footer-center-links">
                        <a href="" className="text-secondary">New arrivals</a>
                        <a href="" className="text-secondary">Best sellers</a>
                        <a href="" className="text-secondary">Recently viewed</a>
                        <a href="" className="text-secondary">Popular this week</a>
                        <a href="" className="text-secondary">All products</a>
                    </div>
                </div>

                <div className="">
                    <h5 className="text-uppercase">Categories</h5>
                    <div className="footer-center-links">
                        <a href="" className="text-secondary">Crockery</a>
                        <a href="" className="text-secondary">Furniture</a>
                        <a href="" className="text-secondary">Homeware</a>
                        <a href="" className="text-secondary">Plant pots</a>
                        <a href="" className="text-secondary">Chairs</a>
                        <a href="" className="text-secondary">Venture</a>
                    </div>
                </div>

                <div className=" ">
                    <h5 className="text-uppercase">Our company</h5>
                    <div className="footer-center-links">
                        <a href="" className="text-secondary">About us</a>
                        <a href="" className="text-secondary">Vacancies</a>
                        <a href="" className="text-secondary">Contact us</a>
                        <a href="" className="text-secondary">Privacy</a>
                        <a href="" className="text-secondary">Returns policy</a>
                    </div>
                </div>



                <div className="footer-right">
                    <h4>Shopify</h4>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="email-container">
                            <input type="text"
                                name="email" placeholder="your@email.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} style={{ color: "white" }} />
                            <button type="submit" className="footer-button" id="Sign-up">
                                Sign up
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

                    <h2 >Copyright 2022 Avion LTD</h2>
                    <div className="social-links">



                        <a href=""><img src={facebook} alt="" /></a>
                        <a href=""><img src={instagram} alt="" /></a>
                        <a href=""><img src={twitter} alt="" /></a>
                        <a href=""><img src={linkedin} alt="" /></a>
                        <a href=""><img src={youtube} alt="" /></a>
                    </div>






                </div>
            </div>

        </footer>

    )

}

export default Footers