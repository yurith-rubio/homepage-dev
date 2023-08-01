export default function GetIcon(props){
    const {icon, className} = props;
    if(icon === 'xClose'){
        return <svg className={className} width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M29.2929 30.4141L10 11.1212L11.4142 9.70703L30.7071 28.9999L50 9.70703L51.4142 11.1212L32.1213 30.4141L51.4142 49.707L50 51.1213L30.7071 31.8284L11.4142 51.1213L10 49.707L29.2929 30.4141Z" fill="black"/>
        </svg>
    } else if(icon === 'eyeOpened'){
        return <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.13967 9.02986C2.24921 9.21997 2.39477 9.4628 2.57533 9.74342C3.03646 10.4601 3.71931 11.4131 4.60581 12.3622C6.39731 14.2803 8.90097 16.0597 12 16.0597C15.099 16.0597 17.6027 14.2803 19.3942 12.3622C20.2807 11.4131 20.9635 10.4601 21.4247 9.74342C21.6052 9.4628 21.7508 9.21997 21.8603 9.02986C21.7508 8.83974 21.6052 8.59692 21.4247 8.31629C20.9635 7.59963 20.2807 6.64664 19.3942 5.69751C17.6027 3.77944 15.099 2 12 2C8.90097 2 6.39731 3.77944 4.60581 5.69751C3.71931 6.64664 3.03646 7.59963 2.57533 8.31629C2.39477 8.59692 2.24921 8.83974 2.13967 9.02986ZM23 9.02986C23.8951 8.58397 23.8947 8.58327 23.8947 8.58327L23.8931 8.58006L23.8897 8.57321L23.8784 8.55094C23.8688 8.53234 23.8554 8.5063 23.838 8.47332C23.8032 8.40737 23.7527 8.31359 23.6868 8.19595C23.555 7.9608 23.361 7.62952 23.1066 7.23409C22.599 6.44516 21.8443 5.39068 20.8558 4.33234C18.8973 2.23549 15.901 0 12 0C8.09903 0 5.10269 2.23549 3.14419 4.33234C2.15569 5.39068 1.40104 6.44516 0.893417 7.23409C0.638983 7.62952 0.444971 7.9608 0.313193 8.19595C0.247266 8.31359 0.196803 8.40737 0.162035 8.47332C0.144648 8.5063 0.131175 8.53234 0.121647 8.55094L0.110313 8.57321L0.106868 8.58006L0.105702 8.58238C0.105702 8.58238 0.104908 8.58397 1 9.02986L0.104908 8.58397C-0.0349694 8.86477 -0.0349694 9.19494 0.104908 9.47574L1 9.02986C0.104908 9.47574 0.104908 9.47574 0.104908 9.47574L0.106868 9.47966L0.110313 9.4865L0.121647 9.50877C0.131175 9.52737 0.144648 9.55341 0.162035 9.58639C0.196803 9.65234 0.247266 9.74612 0.313193 9.86376C0.444971 10.0989 0.638983 10.4302 0.893417 10.8256C1.40104 11.6146 2.15569 12.669 3.14419 13.7274C5.10269 15.8242 8.09903 18.0597 12 18.0597C15.901 18.0597 18.8973 15.8242 20.8558 13.7274C21.8443 12.669 22.599 11.6146 23.1066 10.8256C23.361 10.4302 23.555 10.0989 23.6868 9.86376C23.7527 9.74612 23.8032 9.65234 23.838 9.58639C23.8554 9.55341 23.8688 9.52737 23.8784 9.50877L23.8897 9.4865L23.8931 9.47966L23.8943 9.47733C23.8943 9.47733 23.8951 9.47574 23 9.02986ZM23 9.02986L23.8951 9.47574C24.035 9.19494 24.0346 8.86407 23.8947 8.58327L23 9.02986Z" fill="#F0FFD9"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 7.01838C10.8989 7.01838 10 7.91531 10 9.02958C10 10.1438 10.8989 11.0408 12 11.0408C13.1011 11.0408 14 10.1438 14 9.02958C14 7.91531 13.1011 7.01838 12 7.01838ZM8 9.02958C8 6.81777 9.78735 5.01838 12 5.01838C14.2126 5.01838 16 6.81777 16 9.02958C16 11.2414 14.2126 13.0408 12 13.0408C9.78735 13.0408 8 11.2414 8 9.02958Z" fill="#F0FFD9"/>
        </svg>
    }
    
}