import React from "react";
import aboutimage from "../images/about-us.png";
import './About.css'
function About() {
  return (
    <>
      <div className=" about-container">
        <div className="about">
          <h1>Code Mafias? </h1><br></br><br></br>
          <p>
            {" "}
            Code Mafias serves a content to technology enthusiasts who
            contribute to this growing and modern world through his or her
            knowledge of programming. New Programmers and advanced programmers
            can find the content and tools they need on our website. We are new
            in the market, but we are the latest in the market. Providing
            innovative tools that increase coder productivity is our focus and
            we are focused on bringing innovation to the coding world.
          </p>
        </div>
        <div className="about">
          <h1> What is Code Mafias?</h1><br></br><br></br>
          <p>
            {" "}
            Our company is made up of Coders and Programmers whose goal is to
            make coding and programming easier. We are going to provide
            tutorials for all programming languages, from the most basic to the
            most advanced. In addition to the content, we are building a
            community of coders and programmers who can help each other by
            sharing their knowledge. Our duty being a community of programmers
            and coders is to make sure no one gets stuck in coding and
            programming technology at any time. To bring more and more people up
            to speed on the latest technology and provide them with fresh
            content that everyone can understand, our mission is to bring more
            and more people to the forefront. Our tool called Code Notes will
            help you to keep save everything you found important from our
            content.
          </p>
        </div>
        <div className="about">
          <h1> Why is Code Mafias?</h1><br></br><br></br>
          <p>
            {" "}
            Code Mafias takes a modern approach. It will not only provide our
            users with lengthy content, but it will also provide tools to help
            them consume the content correctly. For example, we recently
            implemented Coding Notes, which will allow you to take notes on what
            you just read. We must remember the syntax of the codes, especially
            when coding. So, by logging into Code Mafias, you can save the
            content into the Coding Notes. While reading posts, you'll notice
            the coding notes overlay on the right-bottom; go now and explore it;
            it offers a lot that we can't express here. Similarly, Code Mafias
            will soon release a slew of tools and innovations that will
            fundamentally change the web development process.
          </p>
        </div>
        <div className="aboutimage">
          <img src={aboutimage} alt="Logo" />
        </div>
        <div className="about">
          <h1>Our Team </h1>
          <div className="ourteam">
            <p>
              " Whatever your website looks like at first, remember that in order
              to improve it, it must first exist."<br></br><br></br>- Meet Soni, Founder
            </p>
          </div>
          <div className="ourteam">
            <p>
              "If you want to grow your business online, creating a website is
              only 10% of the equation; the rest seems to be about user
              experience." <br></br><br></br>- Vanvirsinh Deora, Founder
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
