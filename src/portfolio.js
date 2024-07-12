/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "B L Hemanth's Portfolio",
  description:
    "A passionate individual dedicated to working on end-to-end products that develop sustainable and scalable social and technical systems to create a positive impact.",
  og: {
    title: "B L Hemanth Portfolio",
    type: "website",
    url: "http://hemanth1223.com/",
  },
};

//Home Page
const greeting = {
  title: "B L Hemanth",
  logo_name: "B L Hemanth",
  nickname: "Hemanth Gowda",
  subTitle:
    "A passionate individual dedicated to working on end-to-end products that develop sustainable and scalable social and technical systems to create a positive impact.",
  resumeLink:
    "https://drive.google.com/file/d/1n0kL3pQX5U2UChdtCvrS9vn4ygnabYuL/view?usp=sharing",
    portfolio_repository: "https://github.com/hemanth1223",
  githubProfile: "https://github.com/hemanth1223",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/hemanth1223",
  // linkedin: "https://www.linkedin.com/in/hemanth1223",
  // gmail: "hemanthgowda1223@gmail.com",
  // instagram: "https://www.instagram.com/hemanth_d.boss"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hemanth1223",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/hemanth1223",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:hemanthgowda1223@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hemanth_d.boss",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "My Technical Skills (Software and Web Development)",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML, CSS, and JavaScript 🌐",
        "⚡ Proficient in software development with Java and C++ 💻",
        "⚡ Experienced in database management using SQL and MySQL Workbench 📊",
        "⚡ Implementing version control using Bitbucket 🛠️",
        "⚡ Ensuring security using CyberArk 🔒",
        "⚡ Developing and deploying applications on Windows and Ubuntu environments 🖥️",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "SQL & MySQL Workbench",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "simple-icons:bitbucket",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            color: "#0078D6",
          },
        },
        {
          skillName: "Ubuntu",
          fontAwesomeClassname: "logos:ubuntu",
          style: {
            color: "#0078D6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "",
      style: {
        color: "#F79F1B",
      },
    },
    {
      siteName: "",
      style: {
        color: "#2EC866",
      },
    },
    {
      siteName: "",
      style: {
        color: "#5B4638",
      },
    },
    {
      siteName: "",
      style: {
        color: "#1F8ACB",
      },
    },
    {
      siteName: "",
      style: {
        color: "#323754",
      },
    },
    {
      siteName: "",
      style: {
        color: "#20BEFF",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "MVJ College of Engineering, Bengaluru",
      subtitle: "B.E. in Information Science & Engineering - GPA: 9.25/10",
      logo_path: "MVJCE_logo.png",
      alt_name: "MVJCE, Bangalore",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied Big Data and Hadoop, Computer Networks, and Cryptography and Information Security. 💻",
        "⚡ I have also covered Database Management System (DBMS), Internet of Things (IoT), Object Oriented Programming (OOPs), Operating System, and Software Testing. 💻",      
        "⚡ I have received scholarships for 4 years each from the Government of Karnataka. 🎓",
      ],
      website_link: "https://mvjce.edu.in",
    },
    {
      title: "Nitte Pre-University College, Bengaluru",
      subtitle: "Senior Secondary (XII) - 89%",
      logo_path: "Nitte_logo.png",
      alt_name: "Nitte Pre-University College",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ I received the Academic Achievement Award in 2019. 🥇",
        "⚡ I received an award for 100% attendance for 2 consecutive years. 📅",
        "⚡ Winner of an Intra-College Chess competition. ♟️",
        "⚡ I play Kabaddi and Cricket as hobbies. 🏏",
      ],
      website_link: "https://nsampuc.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Agile Software Development",
      subtitle: "University of Minnesota - Coursera",
      logo_path: "UM.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/DF5P7CMFXA9F",
      alt_name: "University of Minnesota - Coursera",
      color_code: "#8C151599",
    },
    {
      title: "CyberOps Associate",
      subtitle: "Cisco",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/12_kRW3wJIaXvWQMquGXhTxVC9SEm1ukF/view",
      alt_name: "cisco",
      color_code: "#00000099",
    },
    {
      title: "Data Engineering",
      subtitle: "DELL Technologies",
      logo_path: "Dell.png",
      certificate_link:
        "https://drive.google.com/file/d/1SZgv6nxzjQhtUv5AvWybYryvwVgs4D3k/view",
      alt_name: "DELL Technologies",
      color_code: "#0C9D5899",
    },
    {
      title: "Drive SAP S/4HANA Transformations with SAP Signavio Solutions",
      subtitle: "SAP",
      logo_path: "SAP.png",
      certificate_link:
        "https://drive.google.com/file/d/1em1KYy_1enRh9dzEC1PUhzpyYqcLoO1N/view?usp=sharing",
      alt_name: "SAP",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Driven by a passion for developing sustainable, scalable social and technical systems, I am eager to seize opportunities that allow me to make a positive impact through innovation and collaboration",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Administrative Coordinator (Part-Time)",
          company: "Let's Code",
          company_url: "https://letscodejobs.in",
          logo_path: "letscode.png",
          duration: "Dec 2022 - Present",
          location: "Remote",
          description:
            "Our community boasts over 30,000 members, fostering a vibrant network of diverse talents and opportunities. I manage and update job and internship opportunities for all batches across our platforms, including website, WhatsApp channels, Telegram channels, and premium WhatsApp groups daily. This ensures timely and comprehensive dissemination of information to our community, fostering informed decision-making and engagement among our members.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer Intern",
          company: "Bosch Automotive Electronics India Pvt. Ltd.",
          company_url: "https://www.bosch.in/our-company/bosch-in-india/naganathapura",
          logo_path: "Bosch.jpg",
          duration: "Jan 2024 - May 2024",
          location: "Bengaluru, India",
          description:
            "I have developed robust applications using Java and Eclipse IDE, along with other relevant tools, to efficiently meet organizational needs. I proficiently utilize Bitbucket for version control, collaborating effectively within teams to manage source code. My experience includes acquiring comprehensive knowledge of software hosting techniques, ensuring seamless deployment of applications.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Schneider Global Student Experience 2023",
          company: "Schneider Electric",
          company_url: "https://www.se.com/in/en/about-us/careers/students-young-professionals.jsp",
          logo_path: "SE.jpg",
          duration: "July 2023 - Sep 2023",
          location: "Remote",
          description:
            "Mastered foundational digital skills, catalyzing a remarkable 30% increase in proficiency, exemplifying a commitment to continuous learning and skill enhancement. Pioneered cross-cultural collaborations, enriching perspectives through shared experiences and global connections, fostering an inclusive and diverse environment that enhances creativity and innovation.",
          color: "#4285F4",
        },
        {
          title: "Intern - MeitY Startup Hub (G20 Digital Innovation Alliance Summit)",
          company: "LARKAi Healthcare",
          company_url: "https://larkai.in",
          logo_path: "Larkai.png",
          location: "Bengaluru, India",
          description:
            "I had the privilege of completing an enriching internship as part of the G20 Digital Innovation Alliance Summit organized by the MeitY Startup Hub. This experience allowed me to delve into various domains, including research, technology, product showcasing, and marketing.",
          color: "#D83B01",
        },
        {
          title: "Campus Ambassador",
          company: "E-Cell, IIT Bombay",
          company_url: "https://www.ecell.in/mainpage/home",
          logo_path: "ecell.png",
          duration: "July 2022 - Dec 2022",
          location: "Remote",
          description:
            "Provided an enriching experience to participants and connected with the most effective and tangible reform movement in high education. Explored the changing dynamics of broadcast technologies by covering more topics and bringing together more people than ever before.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-pic.png",
    description:
      "I am reachable through various social media platforms mentioned below. Feel free to message me, and I'll respond within 24 hours.",
  },
  blogSection: {
    title: "Hiring Updates",
    subtitle:
      "I will be updating job and internship opportunities daily, so please check for updates.",
    link: "https://letscodejobs.in",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bengaluru, Karnataka, India",
    locality: "Srinivasanagar",
    country: "India",
    region: "Bengaluru",
    postalCode: "560072",
    streetAddress: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
