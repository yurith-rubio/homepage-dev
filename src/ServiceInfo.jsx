const textMapping = {
    "Data": {
        "headline": "Data Visualization",
        "text": `<p>
        A well-designed website has the power to attract and convert visitors into customers, ultimately boosting your revenue and profitability.
        </p>
        <p>
        When visitors arrive at your website, they make split-second judgments based on its visual appeal and ease of use. 
        A special web design that captivates their attention and provides a seamless browsing experience increases the likelihood of them staying on your site longer, exploring your products or services, and ultimately making a purchase.
        </p>`
    },
    "Web": {
        "headline": "Web App Design and Development",
        "text": `<p>
        A well-designed website has the power to attract and convert visitors into customers, ultimately boosting your revenue and profitability.
        </p>
        <p>
        When visitors arrive at your website, they make split-second judgments based on its visual appeal and ease of use. 
        A special web design that captivates their attention and provides a seamless browsing experience increases the likelihood of them staying on your site longer, exploring your products or services, and ultimately making a purchase.
        </p>`
    },
    "Prototyping": {
        "headline": "Prototyping and Proof of Concept",
        "text": `<p>
        A well-designed website has the power to attract and convert visitors into customers, ultimately boosting your revenue and profitability.
        </p>
        <p>
        When visitors arrive at your website, they make split-second judgments based on its visual appeal and ease of use. 
        A special web design that captivates their attention and provides a seamless browsing experience increases the likelihood of them staying on your site longer, exploring your products or services, and ultimately making a purchase.
        </p>`
    },
    "Shopify": {
        "headline": "Shopify Design and Development",
        "text": `<p>
        A well-designed website has the power to attract and convert visitors into customers, ultimately boosting your revenue and profitability.
        </p>
        <p>
        When visitors arrive at your website, they make split-second judgments based on its visual appeal and ease of use. 
        A special web design that captivates their attention and provides a seamless browsing experience increases the likelihood of them staying on your site longer, exploring your products or services, and ultimately making a purchase.
        </p>`
    }
};

export default function ServiceInfo(props){
    const {serviceName} = props;
    const text = textMapping[serviceName]?.text;

    return <>
        <div className='service-info'>
            <h2 className='h2-heading'>{textMapping[serviceName]?.headline}</h2>
            <div dangerouslySetInnerHTML={{__html: text}}></div>
        </div>
    </>
}