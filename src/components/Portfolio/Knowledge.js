import React from 'react';
import { SiHtml5, SiCss3, SiRedux, SiReact, SiNpm, SiGit, SiJavascript } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';

const Knowledge = () => {
    return (
        <section className="know">
            <div className="know__wrap">
                <div className="know__box">
                    <SiHtml5 className="know__icon" />
                    <SiCss3 className="know__icon" />
                    <IoLogoSass className="know__icon" />
                    <SiJavascript className="know__icon" />
                    <SiReact className="know__icon" />
                    <SiRedux className="know__icon" />
                    <SiNpm className="know__icon" />
                    <SiGit className="know__icon" />
                </div>
            </div>
        </section>
    )
}

export default Knowledge;
