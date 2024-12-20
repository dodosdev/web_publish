import React from 'react';

export default function AboutMeJob({title, majorsCon, img, alt, jobName, jobPeriod}) {
    return (
        <>
                <ul class="majors">
                    <li class="major">
                        <i class="fa-brands fa-html5 major__icon"></i>
                        <p class="major__title">{title}</p>
                        <p>{majorsCon}</p>
                    </li>
                        <li class="major">
                        <i class="fa-solid fa-mobile major__icon"></i>
                        <p class="major__title">{title}</p>
                        <p>{majorsCon}</p>
                    </li>
                    <li class="major">
                        <i class="fa-solid fa-server major__icon"></i>
                        <p class="major__title">{title}</p>
                        <p>{majorsCon}</p>
                    </li>
                </ul>
                <ul class="jobs">
                    <li class="job">
                        <img src={img} alt={alt} />
                        <div>
                        <p class="job__name">{jobName}</p>
                        <p class="job__period">{jobPeriod}</p>
                        </div>
                    </li>
                </ul>
        </>
    );
}


