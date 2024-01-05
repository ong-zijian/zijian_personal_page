import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function timeline(){
        return (
        <VerticalTimeline>
        
        {/* Deloitte Internship */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023  - July 2023"
            iconStyle={{ background: '#4672b9', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#1c2e4a"}}>
                <h3 className="vertical-timeline-element-title">Risk Advisory: Cyber & Strategic Risk (IR)</h3>
                <h4 className="vertical-timeline-element-subtitle">Deloitte</h4>
                <ul>
                    <li>Assisted in drafting decks with knowledge of cybersecurity and incident response.</li>
                    <li>Contributed to the smooth running of a cybersecurity TTX, ensuring effective communication and coordination.</li>
                </ul>
            </div>
        </VerticalTimelineElement>

        {/* SMU */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#4672b9', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #4672b9' }}
            date="Aug 2021 - present"
            iconStyle={{ background: '#4672b9', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#fff"}}>
            <h3 className="vertical-timeline-element-title">SMU</h3>
            <h4 className="vertical-timeline-element-subtitle">BSc Information System | Year 3</h4>
            <h5 className="vertical-timeline-element-subtitle">Digital Cloud Solution & Business Analytics</h5>
            <ul>
                {/* <li>Main Programming Language: Python, Java, JavaScript</li>
                <li>Secondary Languages: C++, Go, Bash</li> */}
                <li>
                    Main Programming Language:<br></br>
                    <span className="badge bg-dark p-2 m-1">Python</span>
                    <span className="badge bg-dark p-2 m-1">Java</span>
                    <span className="badge bg-dark p-2 m-1">JavaScript</span>
                </li>
                <li>
                    Secondary Languages:<br></br>
                    <span className="badge bg-secondary p-2 m-1">C++</span>
                    <span className="badge bg-secondary p-2 m-1">Go</span>
                    <span className="badge bg-secondary p-2 m-1">Bash</span>
                </li>
                <li>React Project: This site</li>
                <li>Vue.js project: Assisted in creating a simple backend using Firebase. <a href="https://github.com/BeforeClass/web-frontend" rel="noreferrer" target="_blank" style={{color:"whitesmoke", fontWeight:"bold"}}>Project</a></li>
                <li>Flask project: Using Flask microservices to design and implement a backend Service Oriented Architecture (SOA). Usage of Docker, RabbitMQ, Kong API Gateway and etc. Click <a href="https://github.com/ong-zijian/ESD_Tour_Project"  target="_blank" rel="noreferrer" style={{color:"whitesmoke", fontWeight:"bold"}}>here</a> to view the project.</li>
                <li>Spring Boot: <a href="https://github.com/ong-zijian/springboot_practice" rel="noreferrer" target="_blank" style={{color:"whitesmoke", fontWeight:"bold"}}>MVC CRUD</a></li>
                <li>Node.js: <a href="https://github.com/ong-zijian/CSIT_SE_Mini_Challenge_23" rel="noreferrer" target="_blank" style={{color:"whitesmoke", fontWeight:"bold"}}>CRUD</a></li>
                <li>Web skills:<br></br>
                    Frontend: 
                    <span className="badge bg-secondary p-2 m-1">Vue.js</span>
                    <span className="badge bg-secondary p-2 m-1">React.js</span>
                    <span className="badge bg-secondary p-2 m-1">Typescript.js</span>
                    <span className="badge bg-secondary p-2 m-1">HTML</span>
                    <span className="badge bg-secondary p-2 m-1">CSS</span>
                    <span className="badge bg-secondary p-2 m-1">Bootstrap</span>
                    <br></br>
                    Backend:
                    <span className="badge bg-secondary p-2 m-1">Flask</span>
                    <span className="badge bg-secondary p-2 m-1">Node.js</span>
                    <span className="badge bg-secondary p-2 m-1">Spring Boot</span>
                    <span className="badge bg-secondary p-2 m-1">PHP</span>
                    <br></br>
                    Database:
                    <span className="badge bg-secondary p-2 m-1">MySQL</span>
                    <span className="badge bg-secondary p-2 m-1">MongoDB</span>
                    <span className="badge bg-secondary p-2 m-1">Firebase</span>
                    <br></br>
                </li>    
                <li><a href="https://github.com/ong-zijian/Analytics_Foundation_Practice" style={{color:"whitesmoke", fontWeight:"bold"}} rel="noreferrer" target="_blank">Data Analytics</a>:
                    <ul>
                        <li><a href="https://github.com/ong-zijian/emotion_detection" target="_blank" rel="noreferrer" style={{color:"whitesmoke", fontWeight:"bold"}}>AI, ML: Tensorflow, Keras, OpenCV, CNN, RNN</a></li>
                        <li>Tableau, Pandas, Numpy, Matplotlib, Seaborn</li>
                        <li>Linear Regression, Log Regression</li>
                        <li>Clustering</li>
                        <li>Decision Tree Classification</li>
                        <li>Social Media & Text:
                            <ul>
                                <li>Reddit Scraping</li>
                                <li>Sentiment Analysis</li>
                                <li>Topic Analysis</li>
                                <li>Graph Network Analysis</li>
                            </ul>
                        </li>

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
            iconStyle={{ background: '#4672b9', color: '#fff' }}
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
            contentStyle={{ background: '#4672b9', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #4672b9' }}
            iconStyle={{ background: '#4672b9', color: '#fff' }}
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
            iconStyle={{ background: '#4672b9', color: '#fff' }}
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
            contentStyle={{ background: '#4672b9', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #4672b9' }}
            iconStyle={{ background: '#4672b9', color: '#fff' }}
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