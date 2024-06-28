import React from 'react'
import "./Job.css"


import Featured from "../Tags/Featured/Featured"
import New from '../Tags/New/New'
import Language from "../Tags/Language/Language"



function Job(props) {
    const { job, addFilter } = props;
    return (


        <div className={` ${job.new ? 'job new-job' : 'job'}`}>
            <img src={`${job.logo}`} alt={`${job.company} logo`} className="job__company-logo" />
            <div className='job__details'>
                <p className='job__company-name'> {job.company}</p>
                <div className="job__tags">
                    {job.new ? <New /> : ""}
                    {job.featured ? <Featured /> : ""}
                </div>
            </div>
            <h1 className='job__title'>{job.position}</h1>
            <div className='job__infos'>
                <p className='job__infos-time'> {job.postedAt}</p>
                <p className='job__infos-type'>{job.contract}</p>
                <p className='job__infos-location'> {job.location}</p>
            </div>

            <div className="job__languages">
                {job.languages.concat(job.tools).map((language, i) => (
                    <Language key={i} language={language} addFilter={addFilter} />
                ))}




            </div>
        </div>
    )
}

export default Job
