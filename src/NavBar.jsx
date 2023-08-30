import { useState } from 'react';
import NavButton from './NavButton.jsx';
import GetIcon from './GetIcon.jsx';

export default function NavBar(){
    const isMobile = window.innerWidth <= 767;
    const [showSlider, setShowSlider] = useState('hidden');

    function handleToggleMenu() {
        if(isMobile){
            if (showSlider === 'hidden'){
                return setShowSlider('')
            }
            return setShowSlider('hidden')    
        }
        return;
    }

    function handleBlogRedirect(){
        window.location.replace("https://yurith-rubio.github.io/yurith-says/");
    }

    if (isMobile) {
        return  <>
                    <div id='MobileNavBar'>
                        <div id='Hamburger'>
                            <button className='btn-hamburguer' onClick={handleToggleMenu}>
                                <GetIcon icon='hamburguer' className='medium-icon color-light-green' />
                            </button>
                        </div>
                    </div>
                    <div id="Slidemenu" className={showSlider}>
                        <button className='btn-close-slidemenu' onClick={handleToggleMenu}>
                            <GetIcon icon='xClose' className='medium-icon color-blue xClose' />
                        </button>
                        <NavButton link='/services' children='Services' onClick={handleToggleMenu} />
                        <NavButton link='/projects' children='Projects' onClick={handleToggleMenu} />
                        <NavButton link='/about' children='About' onClick={handleToggleMenu} />
                        <NavButton link='/contact' children='Contact' onClick={handleToggleMenu} />
                    </div>
                </>
    } else {
        return (
            <div id='NavBar'>
                <div className='nav-bar-content content-boundary'>
                    <NavButton link='/services' children='Services' />
                    <NavButton link='/projects' children='Projects' />
                    <NavButton link='/blog' children='Blog' onClick={handleBlogRedirect} />
                    <NavButton link='/about' children='About' />
                    <NavButton link='/contact' children='Contact' />
                </div>
            </div>
            )
    }
}