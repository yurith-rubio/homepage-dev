import ServiceBall from './ServiceBall.jsx';
import {useEffect, useState} from 'react';

export default function ServicesNav(props) {
    const {isVisible, scrollButton} = props;
    const [dataDisabled, setDataDisabled] = useState(false);
    const [webDisabled, setWebDisabled] = useState(false);
    const [prototypingDisabled, setPrototypingDisabled] = useState(false);
    const [shopifyDisabled, setShopifyDisabled] = useState(false);

    useEffect(() => {
        if(isVisible['Data']){
            setDataDisabled(true);
            setWebDisabled(false);
            setPrototypingDisabled(false);
            setShopifyDisabled(false);
        } else if(isVisible['Web']){
            setDataDisabled(false);
            setWebDisabled(true);
            setPrototypingDisabled(false);
            setShopifyDisabled(false);
        } else if(isVisible['Prototyping']){
            setDataDisabled(false);
            setWebDisabled(false);
            setPrototypingDisabled(true);
            setShopifyDisabled(false);
        } else if(isVisible['Shopify']){
            setDataDisabled(false);
            setWebDisabled(false);
            setPrototypingDisabled(false);
            setShopifyDisabled(true);
        }
        
    },[isVisible]);

    return <>
        <div className='service-nav-wrapper'>
            <ServiceBall id="Data" tag='data<br>visualization' textClassName='up-text' arrowClassName='up-arrow' disabled={dataDisabled} isVisible={isVisible['Data']} scrollButton={scrollButton} />
            <ServiceBall id="Web" tag='web<br>development' textClassName="down-text" arrowClassName='down-arrow' disabled={webDisabled} isVisible={isVisible['Web']} scrollButton={scrollButton} />
            <ServiceBall id="Prototyping" tag='web-app<br>prototyping' textClassName='up-text' arrowClassName='up-arrow' disabled={prototypingDisabled} isVisible={isVisible['Prototyping']} scrollButton={scrollButton} />
            <ServiceBall id="Shopify" tag='shopify<br>development' textClassName="down-text" arrowClassName='down-arrow' disabled={shopifyDisabled} isVisible={isVisible['Shopify']} scrollButton={scrollButton} />
        </div>
    </>
}