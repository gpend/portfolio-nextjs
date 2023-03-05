import React from "react";
import Image from "next/image";
import pic from "@/public/headshot.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from "@fortawesome/free-solid-svg-icons"



export function LeftPanel(){
    return (
        <div className="left-panel">
            <Image width={100} height={100} src= {pic} alt= {'my beautiful face'}/>

            <h1>Greg Pendleton</h1>

            <p className="left-panel-carousel">Developer | React Developer | Programmer | Full-stack Developer</p>

            <ul className="social-list">

                <li className="social-list__item">
                    <a className="social-list__link" href="https://codepen.io/gpend">
                        <FontAwesomeIcon icon={faCodepen} />
                    </a>
                </li>

                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com/gpendleton">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>

                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/gpend">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>

                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/gregpendleton/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
                
            </ul>

            <div className="left-panel-buttons">
                <button id="resume">Download Resume <FontAwesomeIcon icon={faDownload} /></button>
                <a href="http://linkedin.com/in/gregpendleton">LinkedIn</a>
            </div>

        </div>
    )
}