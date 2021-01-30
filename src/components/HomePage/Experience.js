import React, { Component } from 'react';
import { work } from '../../Data/PrevExp';


class Experience extends Component {
    state = {
        activeBtn: 1
    }

    jobsHandler = (e) => {
        this.setState({ activeBtn: e })
    }

    render() {
        const workClicked = work[this.state.activeBtn - 1];
        return (
            <section className="exp">
                <div className="exp__wrap">
                    <h2 className="about__h2">Previous<span className="about__span">Experience</span></h2>
                    <div className="exp__box">
                        <div className="exp__buttonbox">
                            {work.map(btn => {
                                return <button className={this.state.activeBtn === btn.id ? "exp__btn exp__btnactive" : "exp__btn"} key={btn.id} onClick={() => this.jobsHandler(btn.id)}>{btn.name}</button>
                            })}
                        </div>
                        <div className="exp__innerbox">
                            <div className="exp__leftside">
                                <h3 className="exp__h3">{workClicked.name}</h3>
                                <img className="exp__img" src={workClicked.image} alt={workClicked.name} />
                            </div>
                            <div className="exp__rightside">
                                <h3 className="exp__h3">Position: <p className="exp__p">{workClicked.position}</p></h3>
                                <h3 className="exp__h3">Description: <p className="exp__p">{workClicked.description}</p></h3>
                                <h3 className="exp__h3">Web address: <a href={workClicked.web} target="_blank" rel="noreferrer" className="exp__link">{workClicked.web}</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience
