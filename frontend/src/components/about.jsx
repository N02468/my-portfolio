import React from 'react';



const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title" style={{"font-family":"Comic-Neue,cursive","marginTop":"5rem"}}>About Me</h2>
      <div className="about-content">
      {/* <img src={Profileimage} alt="Profile" className="profile-image" /> */}
      <p className="about-description" style={{ "font-family": "Comic-Neue,cursive" }}>
  As a passionate and detail-oriented Frontend Developer, I specialize in creating visually stunning, responsive, and user-friendly web applications that deliver exceptional user experiences. With expertise in modern JavaScript frameworks like React.js, along with HTML, CSS, and design systems, I craft intuitive interfaces that engage and captivate users.
  <br />
  <br />
  From translating design concepts into pixel-perfect implementations to optimizing web performance, I thrive on building applications that are both functional and aesthetically pleasing. My projects highlight a strong focus on responsive design, accessibility, and cross-browser compatibility, ensuring seamless experiences for all users.
  <br />
  <br />
  I am always exploring the latest trends and technologies in web development to bring innovative ideas to life. With a keen eye for detail and a commitment to delivering high-quality solutions, I aim to bridge the gap between design and functionality.
  <br />
  <br />
  Let’s collaborate to create stunning digital experiences that leave a lasting impression!
</p>
<div class="whatsapp-container">
            <a href="#" target="_blank" class="whatsapp-rounded-button">
              <i class="ri-whatsapp-fill"></i>
            </a>
          </div>
      </div>
    </div>
  );
};

export default About;
