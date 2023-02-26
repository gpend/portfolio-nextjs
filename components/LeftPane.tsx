import React from "react";
import Image from "next/image";
import pic from "@/public/headshot.jpg"


export function LeftPanel(){
    return (
        <>
            <Image width={100} height={100} src= {pic} alt= {'my beautiful face'}/>
            <h1>Greg Pendleton</h1>
            <p>Developer | react developer | programmer | Full-stack developer</p>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://codepen.io/gpend">
                        <i className="fab fa-codepen"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com/gpendleton">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/gpend">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/gregpendleton/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                
            </ul>
        </>
    )
}