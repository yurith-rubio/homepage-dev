const textMapping = {
    "Data": {
        "headline": "Data Visualization",
        "text": `<p>
        Immerse your users in the narrative of your data with powerful interactive charts, maps, and tables. 
        </p>
        <p>
        By encouraging active engagement, your readers will effortlessly grasp valuable insights, leading to a deeper understanding and appreciation of your data-driven story.
        </p>`
    },
    "Web": {
        "headline": "Web App Design and Development",
        "text": `<p>
        The first few moments when visitors land on your website are crucial.  A well thought out web design captivates users right away.
        </p>
        <p>
        By utilizing captivating colors, images, and animations, you can substantially increase the likelihood of converting visitors into customers, leading to a significant boost in revenue for your business.
        </p>`
    },
    "Prototyping": {
        "headline": "Prototyping and Proof of Concept",
        "text": `<p>
        Whether you're introducing a new product or refining an existing one. 
        </p>
        <p>
        With rigorous testing and prototying, you will get valuable insights and informed decision making. By visualizing and validating your ideas early on, you can avoid unnecessary expenses on last-minute changes during full-scale production. 
        </p>`
    },
    "Shopify": {
        "headline": "Shopify Design and Development",
        "text": `<p>
        Unlock your online business potential with our expertise in building fast and beautifully designed Shopify stores. 
        </p>
        <p>
        I specialize in fast and visually stunning e-commerce websites.  Let me take care of the technicalities, while you focus on growing your business and delighting your customers.
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