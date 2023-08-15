export default function GetIcon(props){
    const {icon, className} = props;
    if(icon === 'xClose'){
        return <svg className={className} width="61" height="60" viewBox="0 0 61 60" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M29.2929 30.4141L10 11.1212L11.4142 9.70703L30.7071 28.9999L50 9.70703L51.4142 11.1212L32.1213 30.4141L51.4142 49.707L50 51.1213L30.7071 31.8284L11.4142 51.1213L10 49.707L29.2929 30.4141Z" fill="black"/>
        </svg>
    } else if(icon === 'hamburguer'){
        return <svg className={className} width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 15H50" stroke="black" strokeWidth="2"/>
                    <path d="M10 30H50" stroke="black" strokeWidth="2"/>
                    <path d="M10 45H50" stroke="black" strokeWidth="2"/>
                </svg>
    }
    
}