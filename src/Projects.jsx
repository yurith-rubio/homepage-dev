import {select, selectAll} from 'd3';
import {useRef, useState, useEffect} from 'react';
import ProjectsInfo from './ProjectsInfo.jsx';
import projectsData from './ProjectsData.json';
import GetIcon from './GetIcon.jsx';

function collectTags(projects) {
  const tags = [];
  for (let project of projects) {
    for (let tag of project.tags) {
      if (tags.indexOf(tag) < 0) {
        tags.push(tag);
      }
    }
  }
  return tags;
}

function filterProjects(filters, projects) {
  if (filters.length == 0) {
    return [...projects];
  }

  const filteredProjects = [];
  for (let project of projects) {
    for (let filter of filters) {
      if (project.tags.indexOf(filter) >= 0) {
        filteredProjects.push(project);
        break;
      }
    }
  }
  return filteredProjects;
}

export default function PortfolioChart(){
  
  const info = projectsData.data[0];
  const tags = collectTags(projectsData.data);
  const [activeFilters, setActiveFilters] = useState([]);
  const [fixedNav, setFixedNav] = useState(false);
  const gRef = useRef();
  

  const data = filterProjects(activeFilters, projectsData.data);

  const r = 300,
  w = r * 3,
  radius = 30,
  svgRadius = 700,
  h = w,
  interval = 360/data.length;

  const screenNavRef = useRef();


  function setCircle(){
    const circles = select(gRef.current);
    const navbarSvg = select(screenNavRef.current);

    circles
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('fill', 'var(--light-green)')
      .attr('class', 'project-circle')
      .attr('r', radius)
      .on('mouseenter', (element, value) => {
        select('.project.h2-heading').text(value.heading);
        select('.project.description')
        .selectAll("p")
        .data(value.description)
        .join("p")
        .text(
          paragraph => paragraph
        )
      })
      .on('click', (element, value) => {

        select('#project-popup')
        .classed('show', true);
        select('.project.imgLogo')
        .attr('src', value.logo)
        select('.project.shortDescription')
        .text(value.shortDescription)
        select('.project.storeLink')
        .attr('href', value.storeLink)
        .text(value.heading)
        select('.project.client')
        .text(value.client)

        console.log(value)
        if(value.figmaLink) {
          select('.figma')
          .text('Figma link:')
          .append('b')
          .append('a')
          .classed('project figmaLink', true)
          .attr('href', value.figmaLink)
          .text('See design sketch on Figma')
          
        } else {
          select('.figma')
          .text('');
        }

        select('.project.tools')
        .selectAll('li')
        .data(value.tools)
        .join('li')
        .text(tool => tool)
  
        select('.project.tasks')
        .selectAll('li')
        .data(value.tasks)
        .join('li')
        .text(task => task.title)
        .attr('class', 'project task-title')
        .selectAll("div")
        .data(task => task.items)
        .join("div")
        .attr('class', 'project-task-item')
        .text(item => {
          return item;
        });

        select('.pop-up-content')
        

        navbarSvg
          .selectAll('a')
          .data(value.screens)
          .join('a')
          .attr('class', 'screens-buttons')
          .attr('href', '#screens')
          .append('circle')
          .attr('class', 'project circle-screens-nav-bar')
          .attr('r', 10)
          .attr('cx', 25)
          .attr('cy', (element, index) => {
            return index * 30 + 30;
          })
          .on('click', (element, value) => {
            navbarSvg
            .selectAll('.screens-buttons')
            .classed("active", false);

            const link = select(element.target.parentElement);
            link
            .classed('active', true);

            select('.project.screen-heading')
            .text(value.screenHeading)
            select('.project.screen-image')
            .attr('src', value.screenImage)
            
          })
          
      })
      .attr('transform', 'translate(0, 0)')
      .transition()
      .duration(1000)
      .attr('transform', function (d, i) { return "translate(" + ((w/2-r) * Math.cos((interval*i) * Math.PI/180)) + "," + ((w/2-r) * Math.sin((interval*i) * Math.PI/180)) + ")";})
  }

  function hasFigmaLink() {
    const filteredFigmas = [];
    const data = projectsData.data;
    for (let project of data) {
      if (project.figmaLink) {
        filteredFigmas.push(project.name);
      }
    }
    return filteredFigmas;
  }
  useEffect(() => {
    hasFigmaLink();
    setCircle();
  }, [data]);

  
  function handleFilterClick(e) {
    const filter = e.target.attributes.getNamedItem("data").value;
    const newFilters = [...activeFilters];

    const index = newFilters.indexOf(filter);
    if (index >= 0) {
      // button is already a filter
      newFilters.splice(index, 1);
    } else {
      // button is not a filter yet
      newFilters.push(filter);
    }

    setActiveFilters(newFilters);
  }

  function handleClosePopupButton() {

    const popup = select('#project-popup');
    popup.classed('show', false);
  }
  

  return <>
    <section id="Projects" className='projects-section'>

    <div id='project-popup'>
      <div className='project upper-cover-space top'></div>
      <div className='project pop-up-content'>
        <div className='project heading'>
          {info.heading}
          <button className='button project close-pop-up icon-wrapper' onClick={handleClosePopupButton}>
            <GetIcon icon='xClose' className='medium-icon color-blue' />
          </button>
        </div>
        <div className='project task-description-area'>
          <div className='project task-description'>
            <img className='project imgLogo'/>
            <p className='project shortDescription'></p>
            <p>Live store: <b><a className='project storeLink' target="_blank"></a></b></p>
            <p className='figma'></p>
            <p>Client: <b className='project client'></b></p>
            <p>Tools:</p>
            <ul className='project tools'>
            </ul>
            <p className='note'>Store not available? <span className='icon-info'></span>see my partner store <span>here</span> (password: therapiedecken).</p>
          </div>
          <div className='project tasks-details'>
            <div className='max-500'>
              <h2>Work done</h2>
              <ol className='project tasks'></ol>
            </div>
          </div>
        </div>
        <div className='project task-screens'>
          <div id='screens'></div>
          <div className={fixedNav ? 'project nav-wrapper fixed' : 'project nav-wrapper'}>
            <svg ref={screenNavRef} className='project screens-nav-bar'>
            </svg>
          </div>
          <div className='screen-info'>
            <h2 className='project screen-heading'>{data[0].screens[0].screenHeading}</h2>
            <div className='screen-image-wrapper'>
              <img className='project screen-image' src={data[0].screens[0].screenImage} />
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className='projects-content'>
        <ProjectsInfo data={data}/>
        <div className='projects-graph'>
          <svg width={svgRadius} height={h}>
            <g ref={gRef} transform={`translate(${svgRadius/2},${h/2})`} filter="url(#goo)"></g>
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="goo"></feColorMatrix>
              </filter>
            </defs>
          </svg>
          <div className='filters-wrapper'>
            {tags && tags.map(tag => { return <button key={tag} data={tag} onClick={handleFilterClick} className={activeFilters.indexOf(tag) >= 0 ? 'filter-button active' : 'filter-button'}>{tag}</button>; })}
          </div>
        </div>
      </div>
    </section>
  </>
}

// Videos are taken with a 1200 x 800 window's size