import Path from './Path.jsx';
import arrow from '/arrow-small.svg';

export default function ServiceBall(props) {
    const {tag, textClassName, arrowClassName, id, disabled, isVisible, scrollButton} = props;

    return <>
        <div id={`ball-${id}`} className="service-ball-content">
            <div className={`service-ball-info ${textClassName}`} dangerouslySetInnerHTML={{__html: tag}}></div>
            <img src={arrow} className={`service-ball-arrow ${arrowClassName}`}/>
            <button section={id} onClick={scrollButton} className='nav-ball-button'>
                <svg className="svg-service-ball" viewBox="0 0 200 200" >
                    <Path isVisible={isVisible} disabled={disabled}/>
                </svg>
            </button>
        </div>
    </>
}