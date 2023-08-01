import experience from "./AboutJobs.json";

export default function AboutJobs() {
    const jobs = Object.entries(experience.jobs).map(job => {
        return <div key={job}>
        <div >{job[1].date}</div>
        <h2 className="job-heading">{job[1].heading}</h2>
        <p className="job-description">{job[1].description}</p>
        </div>
    });

    return <>
        {jobs}
    </>
}