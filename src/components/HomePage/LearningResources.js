import React from 'react';
import { learn } from '../../Data/Learn';

const LearningResources = () => {
    return (
        <section className="learn">
            <div className="learn__wrap">
                <div className="learn__textbox">
                    <h2 className="about__h2">Learning<span className="about__span">Resources</span></h2>
                    <h4 className="learn__h4">During my studies, I used various resources that were available to me, such as YouTube tutorials, MDN Web Docs, Stack Overflow... However, Jonas Schmedtmann and Maximilian Schwarzmüller deserve the greatest gratitude for the knowledge they passed on to me.</h4>
                </div>
                <div className="learn__box">
                    {learn.map(element => {
                        return <a key={element.id} href={element.link} className="learn__a" target="_blank" rel="noreferrer"><div key={element.id} className="learn__innerbox">
                            <img className="learn__img" src={element.img} alt={element.description} />
                            <div>
                                <h5 className="learn__h5">{element.name}</h5>
                                <p className="learn__p">{element.description}</p>
                            </div>
                        </div></a>
                    })}
                </div>
            </div>

        </section>
    )
}

export default LearningResources
