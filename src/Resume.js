import React from "react";
import "./Resume.css";

import profile from "./images/profile-image.jpg";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="main-content">
        <div className="left-column">
          <section className="about">
            <div className="profile-section">
              <img src={profile} alt="Profile" className="profile-image" />
            </div>
            
            <h2>Contact</h2>
            <p>
            Phone
            </p>
            <p>
              098-897-6290
              </p>
            <p>
            Email<p>chanadpolphusuwan@gmail.com</p>
            </p>
            <p>
            Address<p>Din Daeng, Bangkok</p>
            </p>
          </section>

          <section className="education">
            <h2>EDUCATION</h2>
            <ul>
              <li>
                SUAN SUNANDHA RAJABHAT UNIVERSITY<br />
                <span>(2021 - Present)</span>
              </li>
              <li>
                Triamudomsuksanomklaokunnatee School<br />
                <span>(2017 - 2020)</span>
              </li>
            </ul>
          </section>

          <section className="skills">
            <h2>SKILLS</h2>
            <div className="skill-category">
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Html</li>
                <li>Css</li>
              </ul>
            </div>
          </section>
          
        </div>

        <div className="right-column">
          <div className="contact-info">
            <ul className="contact-list">
              <div className="name-and-contact-section">
                <div className="name">CHANADPOL</div>
                <div className="name">PHUSUWAN</div>
              </div>
              
            </ul>
          </div>

          <section className="projects">
            <h2>PROJECTS</h2>
            <div className="project">
              <h3>About Italy</h3>
              <p>
                A website that provides information about Italy.
              </p>
              <ul>
                <li>
                  Developed a website offering information about Italy, using HTML5 and Bootstrap for the frontend design.
                </li>
              </ul>
            </div>
            <div className="project">
              <h3>Website Development</h3>
              <ul>
                <li>
                Using Firebase for user data management and data logging.
                </li>
                <li>
                Built the frontend with React and Next.js for real-time image uploads.
                </li>
              </ul>
            </div>

            <div className="project">
              <h3>Rice Seed Classification</h3>
              <p>
                Image processing for classifying Thai rice seed varieties.
              </p>
              <ul>
                <li>Developed a CNN model for classifying rice seed varieties using Keras on TensorFlow.</li>
                <li>Performed image resizing and augmentation to improve the model's learning performance.</li>
                <li>Trained the model with an image dataset and evaluated it using accuracy, precision, and recall to measure the results.</li>
              </ul>
            </div>

            <div className="project">
              <h3>Shrimp Yield Forecasting in Thailand</h3>
              <p>Shrimp yield forecasting in Thailand.</p>
              <ul>
                <li>Developed a forecasting model using environmental data, such as temperature and rainfall, to predict shrimp yield.</li>
                <li>Analyzed data with the pandas library and created visualizations with seaborn and matplotlib to display yield trend changes.</li>
                <li>Applied forecasting techniques to predict future shrimp production volumes.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
