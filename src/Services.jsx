import gsap from 'gsap';
import ServicesNav from './ServicesNav.jsx';
import ServiceGraph from './ServiceGraph.jsx';
import { useState, useEffect, useRef } from 'react';
import ServicesInfojson from './ServiceInfo.json';

export default function Services(){
    const isMobile = window.innerWidth <= 767;
    const nav = useRef();
    const data = useRef();
    const web = useRef();
    const prototyping = useRef();
    const shopify = useRef();
    const services = ServicesInfojson.services;


    const references = {
        "Data": data,
        "Web": web,
        "Prototyping": prototyping,
        "Shopify": shopify,
    };

    const [visibleSection, setVisibleSection] = useState({
        "Services": false,       
        "Data": false,       
        "Web": false,       
        "Prototyping": false,       
        "Shopify": false,       
    });

    let ballPositions = {};

    const options = {
        root: null,
        rootMargin: "300px",
        threshold: 1
    }

    function setElementPositions() {
        const initialPosition = document.querySelector('#Services').getBoundingClientRect();
        const servicesPosition = document.querySelector('#Services').getBoundingClientRect();
        const dataPosition = document.querySelector('#Data').getBoundingClientRect();
        const webPosition = document.querySelector('#Web').getBoundingClientRect();
        const windownHeight = initialPosition.height;
        // const servicesY = initialPosition.height/2;
        const servicesY = document.querySelector("div.big-text").offsetTop + 100;
        
        const dataY = initialPosition.height + (initialPosition.height/2) - 200;
        const webY = initialPosition.height + (initialPosition.height/2) - 150;
        const prototypingY = initialPosition.height + (initialPosition.height/2) - 100;
        const shopifyY = initialPosition.height + (initialPosition.height/2) - 50;

        console.log(dataPosition)

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
            },
            windownHeight: windownHeight,
            servicesPosition: servicesPosition,
            dataPosition: dataPosition,
            webPosition: webPosition
        };
    }

    const callbackFunction = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;

            setVisibleSection({...visibleSection, [id]: true});
            let position = ballPositions;
            const servicesSections = ["#ball-Data", "#ball-Web", "#ball-Prototyping", "#ball-Shopify"];

            servicesSections.forEach((section, index) => {
                if(isMobile){
                    gsap.to(section, {scale: .7});
                    gsap.to(section, {x: 0, y: index * 130});
                } else {
                    gsap.to(section, {scale: 1.0});
                    gsap.to("#ball-Data", {x: position.positionX.Data, y: position.windownHeight/2});
                    gsap.to("#ball-Web", {x: position.positionX.Web, y: position.windownHeight/2});
                    gsap.to("#ball-Prototyping", {x: position.positionX.Prototyping, y: position.windownHeight/2});
                    gsap.to("#ball-Shopify", {x: position.positionX.Shopify, y: position.windownHeight/2});
                }
            })

            if(entry.isIntersecting){
                
                gsap.to([".service-ball-arrow", ".service-ball-info"], {autoAlpha:1});
                gsap.set(["#ball-Data path", "#ball-Web path", "#ball-Prototyping path", "#ball-Shopify path"], {fill:'var(--light-green)'});

                const Xservice = position.positionX.Service
                if (id === "Services") {
                    servicesSections.forEach((section, index) => {
                        if(isMobile){
                            gsap.to(section, {scale: .7, autoAlpha: 1});
                            gsap.to(section, {x: 0, y: index * 130});
                        } else {
                            gsap.to(section, {scale: 1.0});
                            gsap.to("#ball-Data", {x: position.positionX.Data, y: position.windownHeight/2});
                            gsap.to("#ball-Web", {x: position.positionX.Web, y: position.windownHeight/2});
                            gsap.to("#ball-Prototyping", {x: position.positionX.Prototyping, y: position.windownHeight/2});
                            gsap.to("#ball-Shopify", {x: position.positionX.Shopify, y: position.windownHeight/2});
                        }
                    })
                }
                
                
                if (id === "Data" || id === "Web" || id === "Prototyping" || id === "Shopify"){
                    gsap.set(`#ball-${id} path`, {fill:'var(--highlights)'});

                    if(id === "Data"){
                        if(!isMobile){
                            servicesSections.forEach((section, index) => {
                                gsap.to(section, {x: Xservice, y: position.windownHeight * 1.3 + index * 40})
                            })
                        }   
                    } else if (id === "Web") {
                        if(!isMobile){
                            servicesSections.forEach((section, index) => {
                                gsap.to(section, {x: Xservice, y: position.windownHeight * 1.3 + position.windownHeight + index * 40})
                            })
                        }
                    } else if (id === "Prototyping") {
                        if(!isMobile){
                            servicesSections.forEach((section, index) => {
                                gsap.to(section, {x: Xservice, y: position.windownHeight * 1.3 + position.windownHeight * 2 + index * 40})
                            })
                        }
                    } else if (id === "Shopify") {
                        if(!isMobile){
                            servicesSections.forEach((section, index) => {
                                gsap.to(section, {x: Xservice, y: position.windownHeight * 1.3 + position.windownHeight * 3 + index * 40})
                            })
                        }
                    }
                    
                } 
                
                if (id != "Services") {
                    gsap.to(servicesSections, {scale: 0.15});
                    gsap.to([".service-ball-arrow", ".service-ball-info"], {autoAlpha:0});
                }

            } else {
                setVisibleSection({...visibleSection, [id]: false});
            }
        });
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
                    <div className='big-text center'>Frontend development with a functional design and a pleasant user experience.</div>
                    <div id='ServicesContent'>
                        <div id='ServicesIntroGraphics'></div>
                    </div>
                </div>
            </section>
            {
                Object.keys(services).map((item, key) => {
                    return <section key={key} id={item} className='service-section content-boundary' ref={references[item]}>
                    <ServiceGraph serviceName={item} stages={services[item].stages} isVisible={visibleSection[item]}/>
                </section>
                })
            }
        </div>
    </>
}