import { useState, useEffect } from "react";
import {Link, Outlet, Route} from "react-router-dom";
import AboutInfo from "./AboutInfo";

export default function About(){
const [about, setAbout] = useState(false);

const info = "This is Yurith...";

//console.log(jobs);

    return <>
        <section id="About">
            <div className="about-wrapper">
                <div className="about left-side">
                    <div className="profile-picture" style={{backgroundImage: "url('/src/assets/yurith-portrait.png')"}}>

                    </div>
                    <div className="about left-info">
                        <div className="about name">Yurith Rubio
                            <ul className="yurith-info">
                                <li>40 years old</li>
                                <li>Mexican</li>
                                <li>Healthy cook</li>
                                <li>Dog trainer</li>
                                <li>Self-disciplined</li>
                                <li>Honest</li>
                                <li>Awful actress/rapper</li>
                            </ul>                            
                        </div>
                    </div>
                </div>
                <div className="about right-side">
                    <div className="about nav">
                        <Link to="me" className="about-me-link">ABOUT ME</Link>
                        <Link to="experience">EXPERIENCE</Link>
                    </div>
                    <div className="about right-info">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    </>
}