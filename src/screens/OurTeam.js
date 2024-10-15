import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image1 from '../images/teampic1.png'
import image2 from '../images/teampic2.jpg'
import image3 from '../images/teampic3.jpg'
import image4 from '../images/teampic4.jpg'

const TeamMember = ({ name, role, description, image, socialLinks }) => (
    <div className="col-12 col-md-6 col-lg-6 mb-4" style={{ backgroundColor: "transparent",
    color: "white",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(253, 86, 49, 0.4)",
    transition: "box-shadow 0.3s ease-in-out", }}>
      <div className="border-0 shadow-lg pt-3 position-relative">
        <div className="member-profile text-center">
          <img className="rounded-circle shadow-sm mb-2 team-member-image" src={image} alt={name}  height="300px" />
          <h5 className="member-name mb-0 font-weight-bold" style={{color:"#FD5631"}}>{name}</h5>
          <div className="mb-1 text-center " >{role}</div>
        </div>
        <div className="card-body pt-1">
          <div className="card-text pl-4 pr-4 mb-3">{description}</div>
        </div>
        <div className="card-footer theme-bg-primary border-0 text-center">
          <ul className="social-list list-inline mb-0 mx-auto ">
            {socialLinks.map((link, index) => (
              <li className="list-inline-item" key={index}>
                <a className="text-dark" href={link.url}>
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
);


export default function OurTeam() {
  const teamMembers = [
    {
      name: 'Adan Salman',
      role: 'MERN Intern',
      description: `I'm a BSCS student at FAST with a keen interest in web development. My goal is to become a proficient MERN stack developer, leveraging MongoDB, Express.js, React, and Node.js. I'm passionate about transforming ideas into engaging digital experiences and excited to contribute my skills to the dynamic field of web development.`,
      image: image1,
      socialLinks: [
        { url: 'https://www.linkedin.com/in/adan-salman/', icon: <i className="fab fa-linkedin-in fa-fw " style={{color:"#0A66C2"}}></i> },
        { url: 'https://github.com/adan-s', icon: <i className="fab fa-github fa-fw text-white"></i> },        
      ],
    },
    {
        name: 'Hamza Sajjad',
        role: 'MERN Intern',
        description: `I'm a BSc Computer Science student with a keen interest in AI and web development. Fascinated by AI's problem-solving potential and enamored by the art of web creation, I'm dedicated to mastering the intricacies of both fields.`,
        image: image2,
        socialLinks: [
          { url: '#', icon: <i className="fab fa-linkedin-in fa-fw " style={{color:"#0A66C2"}}></i> },
          { url: '#', icon: <i className="fab fa-github fa-fw text-white"></i> },
          
        ],
      },
    {
        name: 'Muhammad Sheharyar',
        role: 'MERN Intern',
        description: `I'm a computer science student at FAST University with a strong foundation in programming. Through various projects, I've gained confidence in my skills, including Python, web development (MERN stack), and multimedia tools like Premiere Pro, Photoshop, and Blender. I'm particularly intrigued by web development and constantly seek to expand my skill set.`,
        image: image3,
        socialLinks: [
          { url: 'https://www.linkedin.com/in/muhammad-sheharyar-ajmal-033908264', icon: <i className="fab fa-linkedin-in fa-fw " style={{color:"#0A66C2"}}></i> },
          { url: 'https://github.com/sheharyaraj', icon: <i className="fab fa-github fa-fw text-white"></i> },
          
        ],
      },
      {
        name: 'Zaeem ul Islam',
        role: 'MERN Intern',
        description: `Detail-oriented aspiring data scientist. Goal is to become a full-stack data scientist who can design, develop, and deploy data-driven web applications that provide value to users and businesses. I am always eager to learn new things and challenge myself with new opportunities. `,
        image: image4,
        socialLinks: [
          { url: 'https://www.linkedin.com/in/zaeem-ul-islam-0792731ba/', icon: <i className="fab fa-linkedin-in fa-fw " style={{color:"#0A66C2"}}></i> },
          { url: 'https://github.com/Mightyflavor', icon: <i className="fab fa-github fa-fw text-white"></i> }          
        ],
      },
     
  ];

  return (
    <div style={{ backgroundColor: "#1F1B2D", fontFamily: "Time New Roman" }}>
      <Navbar />
      <div
        className="p-3 ml-5 mr-5 mt-3 w-50 text-center text-white mx-auto"
        style={{
          backgroundColor: "#FD5631",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="h1 font-weight-bold">Our Team</h1>
      </div>
      <div className="team-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
