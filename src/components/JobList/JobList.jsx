import React, { useState } from 'react'
import Job from '../Job/Job'
import FilterInput from '../FilterInput/FilterInput'
import "./JobList.css"


const jobs = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Ruby"],
    "tools": ["Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }, {
    "id": 11,
    "company": "Infopro Digital",
    "logo": "./images/logo-ipda.png",
    "new": false,
    "featured": false,
    "position": "Back-end Dev",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2mo ago",
    "contract": "Full Time",
    "location": "Tunisia",
    "languages": ["php"],
    "tools": ["Laravel", "Sass"]
  }
]
function JobList() {
  const [currentFilters, setCurrentFilters] = useState([]);


  const addFilter = (newFilter) => {
    if (!currentFilters.includes(newFilter)) {
      setCurrentFilters([...currentFilters, newFilter]);

    }

  };
  const removeFilter = (filterToRemove) => {
    return setCurrentFilters(currentFilters.filter(filter => filter !== filterToRemove));
  }
  const clearFilters = () => {
    setCurrentFilters([])
  }

  const filteredJobs = currentFilters.length > 0
    ? jobs.filter(job => {
      const hasMatchingLanguage = job.languages.some(lang => currentFilters.includes(lang));
      const hasMatchingTool = job.tools.some(tool => currentFilters.includes(tool));
      return hasMatchingLanguage || hasMatchingTool;
    })
    : jobs;





  return (
    <>

      <div className='jobList'>
        {currentFilters.length > 0 ? <FilterInput currentFilters={currentFilters} clearFilters={clearFilters} removeFilter={removeFilter} /> : null}
        {filteredJobs.length > 0
          ? filteredJobs.map((job) => (
            <Job key={job.id} job={job} addFilter={addFilter} />
          ))
          : jobs.map((job) => (
            <Job key={job.id} job={job} addFilter={addFilter} />
          ))
        }
      </div>
    </>
  )
}

export default JobList
