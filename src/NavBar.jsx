import NavButton from './NavButton.jsx';

export default function NavBar(){
    const isMobile = window.innerWidth <= 767;   
    if (isMobile) {
        return <div>test</div>
    } else {
        return (
            <div id='NavBar'>
                <div className='nav-bar-content content-boundary'>
                    <NavButton link='/services' children='Services' />
                    <NavButton link='/projects' children='Projects' />
                    <NavButton link="https://yurith-rubio.github.io/yurith-says" children='Blog' />
                    <NavButton link='/about' children='About' />
                    <NavButton link='/contact' children='Contact' />
                </div>
            </div>
            )
    }
    
   
}