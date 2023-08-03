//dangerouslySetInnerHTML={{__html: text}}
import projectsData from './ProjectsData.json';

export default function ProjectsInfo(props) {
    const {data} = props;
    const heading = data[0].heading;
    const description = data[0].description;
    
    return <>
        <div className='projects-info'>
            <h2 className='project h2-heading'>{heading}</h2>
            <div className='project description'>
                {description.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>
                })}
            </div>
        </div>
    </>
}