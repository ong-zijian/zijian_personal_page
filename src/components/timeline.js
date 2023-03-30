import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function timeline(){
        return (
        <VerticalTimeline>
        
        {/* SMU Events */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1c2e4a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #1c2e4a' }}
            date="2021 - present"
            iconStyle={{ background: '#1c2e4a', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#fff"}}>
            <h3 className="vertical-timeline-element-title">SMU</h3>
            <h4 className="vertical-timeline-element-subtitle">BSc Information System | Year 2</h4>
            <ul>
                <li>Programming Language: Python, Java (basic)</li>
                <li>Vue.js project: Assisted in creating a simple backend using Firebase. <a href="https://github.com/BeforeClass/web-frontend"  target="_blank" style={{color:"whitesmoke", fontWeight:"bold"}}>Project</a></li>
                <li>Flask project: Using Flask microservices to design and implement a backend Service Oriented Architecture (SOA). Usage of Docker, RabbitMQ, Konga and etc. Click <a href="https://github.com/ong-zijian/ESD_Tour_Project"  target="_blank" style={{color:"whitesmoke", fontWeight:"bold"}}>here</a> to view the project.</li>
                <li>Basic web skills: React.js, Flask, HTML, CSS, PHP, Bootstrap</li>
                <li><a href="https://github.com/ong-zijian/Analytics_Foundation_Practice" style={{color:"whitesmoke", fontWeight:"bold"}}  target="_blank">Data Analytics</a>:
                    <ul>
                        <li>Tableau, Pandas, Numpy, Matplotlib, Seaborn</li>
                        <li>Linear Regression</li>
                        <li>Clustering</li>
                        <li>Decision Tree Classification</li>
                        <li>Log Regression</li>
                    </ul>
                </li>
                <li>AWS Cloud Foundation</li>
            </ul>
            </div>
        </VerticalTimelineElement>

        {/* PolicyPal Internship */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022  - July 2022"
            iconStyle={{ background: '#1c2e4a', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#1c2e4a"}}>
                <h3 className="vertical-timeline-element-title">FinTech Content & Development Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">PolicyPal - ValueChampion</h4>
                <p>My internship at PolicyPal and Valuechampion consist mainly of writing articles and managing their database.</p>
                <ul>
                    <li>Articles include topics like personal finance, insurance, and credit cards.</li>
                    <li>Researched Web 3.0 and help ideate FinTech course content.</li>
                </ul>
            </div>
        </VerticalTimelineElement>

        {/* National Service (NS) */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2019 - Jul 2021"
            contentStyle={{ background: '#1c2e4a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #1c2e4a' }}
            iconStyle={{ background: '#1c2e4a', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#fff"}}>
                <h3 className="vertical-timeline-element-title">National Service</h3>
                <h4 className="vertical-timeline-element-subtitle">3SG Signal</h4>
                <p>CCNA basic certification. <br/>Learnt about setting LAN network and manage router & switch setting.</p>
            </div>
        </VerticalTimelineElement>

        {/* EY Internship */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2018 - Feb 2019"
            iconStyle={{ background: '#1c2e4a', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#1c2e4a"}}>
                <h3 className="vertical-timeline-element-title">Business Analyst Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">EY</h4>
                <p>My job scope includes market research, business analysis regarding FinTech/FIs, creating proposals, decks and marketing collateral.</p>
                <ul>
                    <li>MATCH 2018:
                        <ul>
                            <li>Assisted in the curation of over 17,000 matches between the 380 participating investors and 840 enterprises. </li>
                            <li>The event saw US$6.2 Billion of investment committed in ASEAN enterprises.</li>
                            <li>Handled the matching algorithm, content creation and email management of the event.</li>
                        </ul>  
                    </li>
                    <li>Deal Day 2018:
                        <ul>
                            <li>Part of the planning and execution team behind Deal Day 2018 on 5 October. </li>
                            <li>Curated more than 400 meetings which received positive responses from the participants.</li>
                            <li>Managed the meetings and schedule.</li>
                        </ul>
                    </li>
                    <li>Singapore FinTech Festival (SFF):
                        <ul>
                            <li>Actively engaged guest to the EY booth</li>
                            <li>Promoting the department's services, EY FinTech Hub and thought leaderships.</li>
                            <li>Helped in marketing the company and department.</li>
                        </ul>
                    </li>
                    <li>EY FinTech-The New Black at EY Wavespace:
                        <ul>
                            <li>Part of the planning and execution team behind the event.</li>
                            <li>Active engagement with the guest.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </VerticalTimelineElement>

        {/* Polytechnic */}
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2016 - April 2019"
            contentStyle={{ background: '#1c2e4a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #1c2e4a' }}
            iconStyle={{ background: '#1c2e4a', color: '#fff' }}
            //icon={<SchoolIcon />}
        >
            <div style={{color:"#fff"}}>
                <h3 className="vertical-timeline-element-title">Ngee Ann Polytechnic</h3>
                <h4 className="vertical-timeline-element-subtitle">Diploma in Business Information Technology</h4>
                <p>Mix course with elements of business, accounting and market with technology. <br/>Final year project includes a fullstack asp.net project</p>
                <p>Hi Club Main Committee 17/18: Events Coordinator</p>
                <ul>
                    <li>Plan and organise 4 song signing event</li>
                    <li>Plan and organise 2 outreach events to interact with the Deaf community</li>
                </ul>
            </div>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            //icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>
            Creative Direction, User Experience, Visual Design
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            //icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
            Creative Direction, Visual Design
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            //icon={<StarIcon />}
        /> */}
        </VerticalTimeline>
    )
}

//reference: https://stephane-monnot.github.io/react-vertical-timeline/#/