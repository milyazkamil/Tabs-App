import Duties from "./Duties";

const JobInfo = ({ jobs, currentItem }) => {
  const {company, dates, title, duties} = jobs[currentItem];
  return (
    <section id="job-info">
      <h1 className="job-title">{title}</h1>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </section>
  )
}
export default JobInfo;