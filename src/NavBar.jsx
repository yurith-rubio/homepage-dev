import NavButton from './NavButton.jsx';

export default function NavBar(){
    return <>
        <div id='NavBar'>
            <div className='nav-bar-content content-boundary'>
                <NavButton link='/services' children='Services' className='active'/>
                <NavButton link='/projects' children='Projects'/>
                <NavButton link='/yurith-says' children='Blog'/>
                <NavButton link='/about' children='About'/>
                <NavButton link='/contact' children='Contact'/>
            </div>
        </div>
    </>
}