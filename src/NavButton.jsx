import {Link} from "react-router-dom";

export default function NavButton(props){
    const {children, className, link} = props;

    return <Link to={link} className={`nav-bar-button ${className}`}>{children}</Link>
}