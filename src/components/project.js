import React from "react";
import YouTube from "react-youtube";

export default function Projects() {
  const videoIdESD = "8vRbRofNPfQ"; // Extract the video ID from the YouTube URL
  const videoIdWAD = "YhSbdthPhgM";
  const videoIdTTX = "w8b-TZwpAUU";

  const playerOptions = {
    height: "180",
    width: "360",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="d-flex flex-wrap justify-content-center m-4">
      <h1 className="text-center">Projects</h1>

        <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
            <a href="https://github.com/ong-zijian/ESD_Tour_Project" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>Merlion Tour: Flask Microservice Project</h2>
            </a>
            <p>
            Merlion Tour is part of our group's ESD project. We are tasked to create
            backend architecture with Flask microservices and SOA framework. We have
            3 main scenarios, each with composite and atomic microservices. The
            project is implemented with a MySQL database and completed with Vue.js as
            the frontend. Other technologies include RabbitMQ AMQP, Docker, Kong API
            Gateway, and Telegram Bot.
            </p>
        </div>
        <div className="col-12 col-md-4 p-2">
            <YouTube videoId={videoIdESD} opts={playerOptions} />
        </div>
        </div>

        <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
            <a href="https://github.com/PlanMyMods/web-frontend" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>Plan My Mod: Vue Frontend Project</h2>
            </a>
            <p>
            Plan My Mod is a frontend project that we made to replicate NUSMods. We
            primarily used Vue.js and a plethora of libraries to make the
            application. For this project, I primarily helped with the backend and
            linking of Firebase. click{" "}
            <a href="https://planmymods.netlify.app/" rel="noreferrer noopener" target="_blank">here</a> to see the app.
            </p>
        </div>
        <div className="col-12 col-md-4 p-2">
            <YouTube videoId={videoIdWAD} opts={playerOptions} />
        </div>
        </div>

        <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
            <a href="https://github.com/ong-zijian/TTX_GPT" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>TTX GPT</h2>
            </a>
            <p>
            This is a generative AI project that aims to use openAI's API to turn into a traditional Table-top Exercise into something digital.
            For this project, we will be looking at using a Playbook as a reference for a table-top exercise (TTX),
            allowing users to have self-directed practices for their TTX.
            </p>
        </div>
        <div className="col-12 col-md-4 p-2">
            <YouTube videoId={videoIdTTX} opts={playerOptions} />
        </div>
        </div>

        <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
            <a href="https://github.com/ong-zijian/emotion_detection" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>Emotion Detection</h2>
            </a>
            <p>
            This is a project to try and detect emotions using Convolutional Neural Network (CNN) Model to train and detect emotions.
            We used OpenCV to load a video player and used it with the model to detect emotions
            </p>
        </div>
        <div className="col-12 col-md-4 p-2">
            <div style={{ height: "180px", width: "360px", backgroundColor: "rgba(0, 0, 0, 0)" }}></div>
        </div>
        </div>

        <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
            <a href="https://github.com/ong-zijian/NLP_Wikipedia_QA" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>NLP: Wikipedia QA Model</h2>
            </a>
            <p>
            This is a project done for an assessment. I found it to be interesting
            and decided to share this. The idea is to create a scraper to scrape the
            Wikipedia page and generate questions and answers.
            </p>
        </div>
        <div className="col-12 col-md-4 p-2">
            <div style={{ height: "180px", width: "360px", backgroundColor: "rgba(0, 0, 0, 0)" }}></div>
        </div>
        </div>

        <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
            <a href="https://github.com/ong-zijian/CSIT_SE_Mini_Challenge_23" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>NodeJS Backend</h2>
            </a>
            <p>
            This was my attempt for the CSIT SE Mini Challenge 2023. I was successful in creating the service, creating the docker images
            and getting proper returns in the output.
            </p>
        </div>
        <div className="col-12 col-md-4 p-2">
            <div style={{ height: "180px", width: "360px", backgroundColor: "rgba(0, 0, 0, 0)" }}></div>
        </div>
        </div>


    </div>
  );
}
