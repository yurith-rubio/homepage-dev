import gsap from 'gsap';
import { useEffect, useState } from 'react';
import ServiceInfo from './ServiceInfo.jsx';

export default function ServiceGraph(props) {
    
    const {serviceName, stages, isVisible} = props;
    const [showLine, setShowLine] = useState(false);
    
    const arrow1 = <svg className={`${serviceName} service one arrow`} x="70" y="50" width="20" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7534 7.12672e-06C14.3057 5.75396e-06 14.7534 0.44772 14.7534 1L14.7534 10C14.7534 10.5523 14.3057 11 13.7534 11C13.2012 11 12.7534 10.5523 12.7534 10L12.7534 2.00001L4.75342 2.00003C4.20114 2.00003 3.75342 1.55232 3.75342 1.00003C3.75342 0.447747 4.20113 3.08698e-05 4.75342 2.9497e-05L13.7534 7.12672e-06ZM25.4258 46.485C14.9418 48.3199 5.85701 42.6671 2.44181 33.538C-0.978235 24.396 1.34201 11.9973 13.0463 0.292902L14.4605 1.70711C3.16483 13.0029 1.23507 24.6043 4.31502 32.8373C7.39983 41.0832 15.565 46.1804 25.081 44.515L25.4258 46.485Z" fill="#F0FFD9"/>
        </svg>;
    const arrow2 = <svg className={`${serviceName} service two arrow`} x="410" y="50" width="20" height="47" viewBox="0 0 25 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 7.12672e-06C11.4477 5.75396e-06 11 0.44772 11 1L11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10L13 2.00001L21 2.00003C21.5523 2.00003 22 1.55232 22 1.00003C22 0.447747 21.5523 3.08698e-05 21 2.9497e-05L12 7.12672e-06ZM0.327608 46.485C10.8116 48.3199 19.8964 42.6671 23.3116 33.538C26.7317 24.396 24.4114 11.9973 12.7071 0.292902L11.2929 1.70711C22.5886 13.0029 24.5183 24.6043 21.4384 32.8373C18.3536 41.0832 10.1884 46.1804 0.672392 44.515L0.327608 46.485Z" fill="#F0FFD9"/>
        </svg>;
    const arrow3 = <svg className={`${serviceName} service three arrow`} x="70" y="190" width="20" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7534 47.0002C14.3057 47.0002 14.7534 46.5525 14.7534 46.0002L14.7534 37.0002C14.7534 36.448 14.3057 36.0002 13.7534 36.0002C13.2012 36.0002 12.7534 36.4479 12.7534 37.0002L12.7534 45.0002L4.75342 45.0002C4.20114 45.0002 3.75342 45.4479 3.75342 46.0002C3.75342 46.5525 4.20113 47.0002 4.75342 47.0002L13.7534 47.0002ZM25.4258 0.515212C14.9418 -1.31962 5.85701 4.33313 2.44181 13.4622C-0.978235 22.6043 1.34201 35.003 13.0463 46.7073L14.4605 45.2931C3.16483 33.9974 1.23507 22.396 4.31502 14.163C7.39983 5.91705 15.565 0.819856 25.081 2.48527L25.4258 0.515212Z" fill="#F0FFD9"/>
        </svg>;
    const arrow4 = <svg className={`${serviceName} service four arrow`} x="410" y="190" width="20" height="47" viewBox="0 0 25 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 47.0002C11.4477 47.0002 11 46.5525 11 46.0002L11 37.0002C11 36.448 11.4477 36.0002 12 36.0002C12.5523 36.0002 13 36.4479 13 37.0002L13 45.0002L21 45.0002C21.5523 45.0002 22 45.4479 22 46.0002C22 46.5525 21.5523 47.0002 21 47.0002L12 47.0002ZM0.327608 0.515212C10.8116 -1.31962 19.8964 4.33313 23.3116 13.4622C26.7317 22.6043 24.4114 35.003 12.7071 46.7073L11.2929 45.2931C22.5886 33.9974 24.5183 22.396 21.4384 14.163C18.3536 5.91705 10.1884 0.819856 0.672392 2.48527L0.327608 0.515212Z" fill="#F0FFD9"/>
        </svg>;

    useEffect(() => {
        if(isVisible){
            gsap.to(`#${serviceName}-circle4`, {cx: 130, cy: 130, ease: "elastic.back"})
            .then(gsap.to(`#${serviceName}-circle3`, {cx: 130, cy: 370, delay: .2, ease: "elastic.back"}))
            .then(gsap.to(`#${serviceName}-circle2`, {cx: 370, cy: 130, delay: .4, ease: "elastic.back"}))
            .then(gsap.to(`#${serviceName}-circle1`, {cx: 370, cy: 370, delay: .6, ease: "elastic.back"}))
            .then(setShowLine(true))
            .then(gsap.to(`.${serviceName}.service.one.arrow`, {autoAlpha:1, delay:.4, y:40}))
            .then(gsap.to(`.${serviceName}.service.one.text`, {autoAlpha:1, delay:.4, y:20}))
            .then(gsap.to(`.${serviceName}.service.two.arrow`, {autoAlpha:1, delay:.6, y:40}))
            .then(gsap.to(`.${serviceName}.service.two.text`, {autoAlpha:1, delay:.6, y:20}))
            .then(gsap.to(`.${serviceName}.service.three.arrow`, {autoAlpha:1, delay:.8, y:180 }))
            .then(gsap.to(`.${serviceName}.service.three.text`, {autoAlpha:1, delay:.8, y:240 }))
            .then(gsap.to(`.${serviceName}.service.four.arrow`, {autoAlpha:1, delay:1, y:180 }))
            .then(gsap.to(`.${serviceName}.service.four.text`, {autoAlpha:1, delay:1, y:240 }));
        } else {
            gsap.to(`#${serviceName}-circle1`, {cx: 250, cy: 250, ease: "elastic.back"})
            .then(gsap.to(`#${serviceName}-circle2`, {cx: 250, cy: 250, ease: "elastic.back"}))
            .then(gsap.to(`#${serviceName}-circle3`, {cx: 250, cy: 250, ease: "elastic.back"}))
            .then(gsap.to(`#${serviceName}-circle4`, {cx: 250, cy: 250, ease: "elastic.back"}))
            .then(setShowLine(false))
            .then(gsap.to(`.${serviceName}.service.one.arrow`, {autoAlpha:0, y:50}))
            .then(gsap.to(`.${serviceName}.service.text`, {autoAlpha:0, y:50}))
            .then(gsap.to(`.${serviceName}.service.two.arrow`, {autoAlpha:0, y:50}))
            .then(gsap.to(`.${serviceName}.service.three.arrow`, {autoAlpha:0, y:190}))
            .then(gsap.to(`.${serviceName}.service.four.arrow`, {autoAlpha:0, y:190}))
        }
        
    }, [isVisible]);

    return <>
        <div id={serviceName} className='service-content'>
            <ServiceInfo serviceName={serviceName} />
            <div className='service-graph'>
                <svg className='svg-service-wrapper' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 500 500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                        <circle className={showLine ? 'dotted-circle' : 'invisible' } cx='20' cy='20' r='13.5'/>
                    </svg>
                    { Object.keys(stages).map((stage, key) => {
                            return <text key={key} className={`${serviceName} service one text`} x={stages[stage].x} y={stages[stage].y}>{stage}</text>;
                        })
                    }
                    {arrow1}
                    {arrow2}
                    {arrow3}
                    {arrow4}
                    <g  id="blobs__split">
                        <circle className="start-blob" cx="250" cy="250" r="110" />
                        <circle id={`${serviceName}-circle1`} className="info-circle" cx="250" cy="250" r="28" />
                        <circle id={`${serviceName}-circle2`} className="info-circle" cx="250" cy="250" r="28" />
                        <circle id={`${serviceName}-circle3`} className="info-circle" cx="250" cy="250" r="28" />
                        <circle id={`${serviceName}-circle4`} className="info-circle" cx="250" cy="250" r="28" />
                    </g>
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="goo" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    </>
}