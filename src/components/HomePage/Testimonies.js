import React, { useState } from 'react';
import Rasko from '../../assets/img/testemonies/Rasko.JPG';
import Braca from '../../assets/img/testemonies/Braca1.jpg';
import Coca from '../../assets/img/testemonies/CocaPreporuka.JPG';
import Nelt from '../../assets/img/testemonies/NeltPreporuka.JPG';
import { IoEnterOutline } from 'react-icons/io5';
import Modal from '../Modal';

const Testimonies = () => {
    const [modal, setModal] = useState(false)
    console.log(modal)
    const [image, setImage] = useState(null)
    console.log(image)

    const openModal = (e) => {
        console.log(e)
        setModal(true)
        if (e === 'nelt') {
            setImage(Nelt)
        } else if (e === 'coca') {
            setImage(Coca)
        }
    }
    return (
        <section className="test">
            <div className="test__wrap">
                <h2 className="about__h2">Superiors<span className="about__span">Testimonies</span></h2>
                <div className="test__box">
                    <div className="test__sef">
                        <img src={Rasko} alt="Rasko Alempijević" className="test__img" />
                        <p className="test__p">As a sales representative he showed significant results, and in a short time positioned himself among the best. Easily adapted to the work environment and very quickly showed that he is able to cope with complex tasks...</p>
                        <h3 className="test__h3">Raško Alempijević</h3>
                        <h4 className="test__h4">Sales supervisor, Nelt Co</h4>
                        <button className="test__btn"
                            onClick={() => openModal("nelt")}
                        >More info <IoEnterOutline className="test__icon" /></button>
                    </div>
                    <div className="test__sef">
                        <img src={Braca} alt="Bratislav Janković" className="test__img" />
                        <p className="test__p">He showed high motivation and desire to work and achieving company goals, and he managed to do tasks better than colleagues who have more work experience. He had an excellent business relationship with clients...</p>
                        <h3 className="test__h3">Bratislav Janković</h3>
                        <h4 className="test__h4">Sales supervisor, Coca-Cola HBC</h4>
                        <button className="test__btn"
                            onClick={() => openModal("coca")}
                        >More info <IoEnterOutline className="test__icon" /></button>
                    </div>
                </div>
            </div>
            {modal ? <Modal image={image} /> : null}

        </section>
    )
}

export default Testimonies;
