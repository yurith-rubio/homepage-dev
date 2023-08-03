import gsap from 'gsap';
import ServicesNav from './ServicesNav.jsx';
import ServiceGraph from './ServiceGraph.jsx';
import { useState, useEffect, useRef } from 'react';

export default function Services(){
    const nav = useRef();
    const data = useRef();
    const web = useRef();
    const prototyping = useRef();
    const shopify = useRef();

    const [visibleSection, setVisibleSection] = useState({
        "Services": false,       
        "Data": false,       
        "Web": false,       
        "Prototyping": false,       
        "Shopify": false,       
    });

    let ballPositions = {};
    
    const callbackFunction = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;

            setVisibleSection({...visibleSection, [id]: true});
            let position = ballPositions;
            let windownHeight = position.positionY.Services * 2;
            
            gsap.to("#ball-Data", {x: position.positionX.Data, y: position.positionY.Services, scale: 1.0});
            gsap.to("#ball-Web", {x: position.positionX.Web, y: position.positionY.Services, scale: 1.0});
            gsap.to("#ball-Prototyping", {x: position.positionX.Prototyping, y: position.positionY.Services, scale: 1.0});
            gsap.to("#ball-Shopify", {x: position.positionX.Shopify, y: position.positionY.Services, scale: 1.0});
            gsap.to(".service-ball-arrow", {autoAlpha:1});
            gsap.to(".service-ball-info", {autoAlpha:1});
            gsap.set(["#ball-Data path", "#ball-Web path", "#ball-Prototyping path", "#ball-Shopify path"], {fill:'var(--light-green)'});
            
            if(entry.isIntersecting){
                

                if (id === "Services") {
                    gsap.to("#ball-Data", {x: position.positionX.Data, y: position.positionY.Services, scale: 1.0});
                    gsap.to("#ball-Web", {x: position.positionX.Web, y: position.positionY.Services, scale: 1.0});
                    gsap.to("#ball-Prototyping", {x: position.positionX.Prototyping, y: position.positionY.Services, scale: 1.0});
                    gsap.to("#ball-Shopify", {x: position.positionX.Shopify, y: position.positionY.Services, scale: 1.0});
                    gsap.to(".service-ball-arrow", {autoAlpha:1});
                    gsap.to(".service-ball-info", {autoAlpha:1});
                    gsap.set(["#ball-Data path", "#ball-Web path", "#ball-Prototyping path", "#ball-Shopify path"], {fill:'var(--light-green)'});
                } else if (id === "Data"){
                    gsap.to("#ball-Data", {x: position.positionX.Service, y: position.positionY.Data, scale: 0.15});
                    gsap.to("#ball-Web", {x: position.positionX.Service, y: position.positionY.Web, scale: 0.15});
                    gsap.to("#ball-Prototyping", {x: position.positionX.Service, y: position.positionY.Prototyping, scale: 0.15});
                    gsap.to("#ball-Shopify", {x: position.positionX.Service, y: position.positionY.Shopify, scale: 0.15})
                    gsap.set("#ball-Data path", {fill:'var(--highlights)'});
                    gsap.set(["#ball-Web path", "#ball-Prototyping path", "#ball-Shopify path"], {fill:'var(--light-green)'});
                } else if (id === "Web"){
                    gsap.to("#ball-Data", {x: position.positionX.Service, y: (position.positionY.Data + windownHeight), scale: 0.15});
                    gsap.to("#ball-Web", {x: position.positionX.Service, y: (position.positionY.Web + windownHeight), scale: 0.15});
                    gsap.to("#ball-Prototyping", {x: position.positionX.Service, y: (position.positionY.Prototyping + windownHeight), scale: 0.15});
                    gsap.to("#ball-Shopify", {x: position.positionX.Service, y: (position.positionY.Shopify + windownHeight), scale: 0.15})
                    gsap.set("#ball-Web path", {fill:'var(--highlights)'});
                    gsap.set(["#ball-Data path", "#ball-Prototyping path", "#ball-Shopify path"], {fill:'var(--light-green)'});
                } else if (id === "Prototyping"){
                    gsap.to("#ball-Data", {x: position.positionX.Service, y: (position.positionY.Data + windownHeight * 2), scale: 0.15});
                    gsap.to("#ball-Web", {x: position.positionX.Service, y: (position.positionY.Web + windownHeight * 2), scale: 0.15});
                    gsap.to("#ball-Prototyping", {x: position.positionX.Service, y: (position.positionY.Prototyping + windownHeight * 2), scale: 0.15});
                    gsap.to("#ball-Shopify", {x: position.positionX.Service, y: (position.positionY.Shopify + windownHeight * 2), scale: 0.15})
                    gsap.set("#ball-Prototyping path", {fill:'var(--highlights)'});
                    gsap.set(["#ball-Data path", "#ball-Web path", "#ball-Shopify path"], {fill:'var(--light-green)'});
                } else if (id === "Shopify"){
                    gsap.to("#ball-Data", {x: position.positionX.Service, y: (position.positionY.Data + windownHeight * 3), scale: 0.15});
                    gsap.to("#ball-Web", {x: position.positionX.Service, y: (position.positionY.Web + windownHeight * 3), scale: 0.15});
                    gsap.to("#ball-Prototyping", {x: position.positionX.Service, y: (position.positionY.Prototyping + windownHeight * 3), scale: 0.15});
                    gsap.to("#ball-Shopify", {x: position.positionX.Service, y: (position.positionY.Shopify + windownHeight * 3), scale: 0.15});
                    gsap.set("#ball-Shopify path", {fill:'var(--highlights)'});
                    gsap.set(["#ball-Data path", "#ball-Web path", "#ball-Prototyping path"], {fill:'var(--light-green)'});
                } else if (id === 'mainIntro'){
                    gsap.to(["#ball-Data", "#ball-Web", "#ball-Prototyping", "#ball-Shopify"], {autoAlpha:0});
                }
                if (id != "Services") {
                    gsap.to(".service-ball-arrow", {autoAlpha:0});
                    gsap.to(".service-ball-info", {autoAlpha:0});
                }

            } else {
                setVisibleSection({...visibleSection, [id]: false});
            }
        });
    }

    const options = {
        root: null,
        rootMargin: "20%",
        threshold: 1
    }

    function setElementPositions() {
        const initialPosition = document.querySelector('#Services').getBoundingClientRect();
        const servicesY = initialPosition.height/2;
        const dataY = initialPosition.height + (initialPosition.height/2) - 200;
        const webY = initialPosition.height + (initialPosition.height/2) - 150;
        const prototypingY = initialPosition.height + (initialPosition.height/2) - 100;
        const shopifyY = initialPosition.height + (initialPosition.height/2) - 50;

        const dataX = 0;
        const webX = 300;
        const prototypingX = 600;
        const shopifyX = 900;
        const serviceX = -100;

        ballPositions = {
            positionY: {
                Services: servicesY,
                Data: dataY,
                Web: webY,
                Prototyping: prototypingY,
                Shopify: shopifyY      
            },
            positionX: {
                Data: dataX,
                Web: webX,
                Prototyping: prototypingX,
                Shopify: shopifyX,
                Service: serviceX
            }
        };
    }

    function handleClickScrollNavButton(event){
        event.preventDefault();
        const value = event.currentTarget.attributes.section.value;
        if (value === 'Data'){
            data.current?.scrollIntoView({behavior:'smooth'});
        } else if(value === 'Web'){
            web.current?.scrollIntoView({behavior:'smooth'});
        } else if(value === 'Prototyping'){
            prototyping.current?.scrollIntoView({behavior:'smooth'});
        } else if(value === 'Shopify'){
            shopify.current?.scrollIntoView({behavior:'smooth'});
        }
    }

    useEffect(() => {
        setElementPositions();
    },[]);

    useEffect(() => {    
        const observer = new IntersectionObserver(callbackFunction, options);

        [nav,data,web,prototyping,shopify].forEach(target => {
            observer.observe(target.current);
        });
        
    }, []);

    return<>
        <div id="ServicesSection" className='text-light-green'>
            <ServicesNav isVisible={visibleSection} scrollButton={handleClickScrollNavButton}/>
            <section id='Services' className='content-boundary' ref={nav}>
                <div id='ServiceIntro' className='service-content'>
                    <div className='big-text center'>I can help you with the following services</div>
                    <div id='ServicesContent'>
                        <div id='ServicesIntroGraphics'>
                         
                        </div>
                    </div>
                </div>
            </section>
            <section id='Data' className='service-section content-boundary' ref={data}>
                <ServiceGraph serviceName='Data' isVisible={visibleSection['Data']}/>
            </section>
            <section id='Web' className='service-section content-boundary' ref={web}>
                <ServiceGraph serviceName='Web' isVisible={visibleSection['Web']}/>
            </section>
            <section id='Prototyping' className='service-section content-boundary' ref={prototyping}>
                <ServiceGraph serviceName='Prototyping' isVisible={visibleSection['Prototyping']}/>
            </section>
            <section id='Shopify' className='service-section content-boundary' ref={shopify}>
                <ServiceGraph serviceName='Shopify' isVisible={visibleSection['Shopify']}/>
            </section>
        </div>
    </>
}