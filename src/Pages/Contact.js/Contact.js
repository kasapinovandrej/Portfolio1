import React from 'react';
import ContactHero from '../../components/PagesHero';
import ContactImage from '../../assets/img/PagesHeroImages/Contact.png';
import ContactImage1 from '../../assets/img/PagesHeroImages/Contact1.png';
import Form from '../../components/ContactPage/Form';

const Contact = () => {
    return (
        <>
            <ContactHero
                name="Contact"
                imgLeft={ContactImage}
                imgRight={ContactImage1} />
            <Form />
        </>
    )
}

export default Contact
