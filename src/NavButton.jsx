import {NavLink} from "react-router-dom";

export default function NavButton(props){
    const {children, className, link} = props;

    return <NavLink to={link} className={({isActive}) => isActive ? "nav-bar-button active" : "nav-bar-button"}>{children}</NavLink>
}