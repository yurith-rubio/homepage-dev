import {NavLink, Outlet, Navigate} from "react-router-dom";

export default function About(){

    return <>
        <section id="About">
            <div className="about-wrapper">
                <div className="about left-side">
                    <div className="profile-picture" style={{backgroundImage: "url('/yurith-rubio-profile-picture-retro.jpeg')"}}>

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
                        <NavLink to="me" className={({isActive}) => isActive ? "about-me-link active" : "about-me-link"}>ABOUT ME</NavLink>
                        <NavLink to="experience" className={({isActive}) => isActive ? "about-experience-link active" : "about-experience-link"}>EXPERIENCE</NavLink>
                    </div>
                    <div className="about right-info">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    </>
}