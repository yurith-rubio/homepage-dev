import {NavLink} from "react-router-dom";

export default function NavButton(props){
    const {children, onClick, link} = props;

    if(link === '/blog'){
        return <Navigate to="https://yurith-rubio.github.io/yurith-says" replace={true} />
    } else {
        return <NavLink to={link} onClick={onClick} className={({isActive}) => isActive ? "nav-bar-button active" : "nav-bar-button"}>{children}</NavLink>
    }
}