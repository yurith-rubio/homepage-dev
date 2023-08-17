import {NavLink, Navigate} from "react-router-dom";

export default function NavButton(props){
    const {children, onClick, link} = props;

    return <NavLink to={link} onClick={onClick} className={({isActive}) => isActive ? "nav-bar-button active" : "nav-bar-button"}>{children}</NavLink>
}