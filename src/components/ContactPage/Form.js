import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import FormImg from '../../assets/img/FormImage.png';
import { HiMail } from 'react-icons/hi';
import { GoPerson } from 'react-icons/go';
import { RiMessage2Fill } from 'react-icons/ri';


const Form = () => {

    const [mailSent, setMailSent] = useState(false);
    const [mailError, setMailError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sirckmp', 'template_pw79pc7', e.target, 'user_Sr5HKAyP6JbbbQnzGM3HC')
            .then((result) => {
                setMailSent(true)
            }, (error) => {
                setMailError(true)
            });
        e.target.reset();
        setInterval(() => {
            setMailSent(false);
            setMailError(false);
        }, 5000);
    }

    return (
        <section className="form">
            <div className="form__wrap">
                <h2 className="about__h2">Let's <span className="about__span">Connect</span></h2>
                <p className="form__p">Thank you for taking the time to review my portfolio. If you have any question or suggestion, please send me a message</p>
                <div className="form__box">
                    <img src={FormImg} alt="koverta" className="form__img" />
                    <div className="form__boxright">
                        <form className="form__real" onSubmit={sendEmail}>
                            <label className="form__label"><GoPerson /></label>
                            <input type="text" name="name" className="form__input" required placeholder="Name" />
                            <label className="form__label"><HiMail /></label>
                            <input type="email" name="email" className="form__input" required placeholder="E-mail" />
                            <label className="form__label"><RiMessage2Fill /></label>
                            <textarea name="message" className="form__text" required placeholder="Message" />
                            <input type="submit" value="Send Message" className="form__button" />
                        </form>
                    </div>
                    {mailSent ? <div className="form__modal">
                        <div className="form__backdrop">
                            <h1 className="form__h1">Message Sent! Thank you! Hvala!</h1 >
                        </div>
                    </div> : mailError ? <div className="form__modal">
                        <div className="form__backdrop form__backdrop--red" >
                            <h1 className="form__h1">Something went wrong. Please check your connection.</h1 >
                        </div>
                    </div> : null}
                </div>
            </div>
        </section>
    )
}

export default Form;