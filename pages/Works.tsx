import React from "react";
import Image from "next/image";
import ColorPicker from "../public/color_picker_s.png"

export function Works(){
    return(
        <div className="MyWork--items">
            <a href="https://gpend.github.io/color-picker/">
                <Image className="MyWork item" width={100} height={100} src={ColorPicker} alt="My Work Item"/>
                </a>
            <a href="https://gpend.github.io/tip-calculator-app/">
                <Image className="MyWork item" width={100} height={100} src="/splitter (Medium).jpg" alt="My Work Item"/>
                </a>
            <a href="https://gpend.github.io/calc-app/">
                <Image className="MyWork item" width={100} height={100} src="/calc (Medium).jpg" alt="My Work Item"/>
                </a>
            <a href="https://gpend.github.io/receipe-site/">
                <Image className="MyWork item" width={100} height={100} src="/bachelor_chow.png" alt="My Work Item"/>
                </a>
            <a href="https://gpend.github.io/frontendMentor_stats_preview_card/">
                <Image className="MyWork item" width={100} height={100} src="/stats-card (Medium).jpg" alt="My Work Item"/>
                </a>
            <a href="https://gpend.github.io/pomodoro-timer/">
                <Image className="MyWork item" width={100} height={100} src="/pomodoro (Medium).jpg" alt="My Work Item"/>
                </a>
            <a href="https://gpend.github.io/password-creator/">
                <Image className="MyWork item" width={100} height={100} src="/password.png" alt="My WorkItem"/></a>
        </div>
    )
}