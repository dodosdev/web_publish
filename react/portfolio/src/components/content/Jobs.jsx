import React from 'react';
import Job from './Job.jsx';

export default function Jobs() {
    const jobList = [
        {
            "img": "images/jobs/google.png",
            "alt": "google",
            "name" : "Google as Junior Software Engineer",
            "period": "2019 Oct - Until now"
        },
        {
            "img": "images/jobs/samsung.png",
            "alt": "samsung",
            "name" : "Samsung as Junior Software Engineer",
            "period": "job__period"
        }

    ]


    return (
        <ul class="jobs">
            {jobList && jobList.map((job)=>
            <li class="job">
                <Job 
                    img={job.img}
                    alt={job.alt}
                    name={job.name}
                    period={job.period}
                />
            </li>
            )}
        </ul>
    );
}

