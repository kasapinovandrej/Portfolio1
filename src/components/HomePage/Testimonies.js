import React from 'react';
import Rasko from '../../assets/img/testemonies/Rasko.JPG';
import Braca from '../../assets/img/testemonies/Braca1.jpg';
import { IoEnterOutline } from 'react-icons/io5'

const Testimonies = () => {
    return (
        <section className="test">
            <div className="test__wrap">
                <h2 className="about__h2">Superiors<span className="about__span">Testimonies</span></h2>
                <div className="test__box">
                    <div className="test__sef">
                        <img src={Rasko} alt="Rasko Alimpijevic" className="test__img" />
                        <p className="test__p">As a sales representative he showed significant results, and in a short time positioned himself among the best. Easily adapted to the work environment and very quickly showed that he is able to cope with complex tasks...</p>
                        <h3 className="test__h3">Rasko Alimpijevic</h3>
                        <h4 className="test__h4">Sales supervisor, Nelt Co</h4>
                        <button className="test__btn">More info <IoEnterOutline className="test__icon" /></button>
                    </div>
                    <div className="test__sef">
                        <img src={Braca} alt="Bratislav Jankovic" className="test__img" />
                        <p className="test__p">He showed high motivation and desire to work and achieving company goals, and he managed to do tasks better than colleagues who have more work experience. He had an excellent business relationship with clients...</p>
                        <h3 className="test__h3">Bratislav Jankovic</h3>
                        <h4 className="test__h4">Sales supervisor, Coca-Cola HBC</h4>
                        <button className="test__btn">More info <IoEnterOutline className="test__icon" /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonies;
