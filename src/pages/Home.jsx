import profile from '../assets/images/profile2.jpg';
// array of things I'm learning
const knowledge = ['how to build this site'];
import LearningBar from "../components/learningbar";


export default function Home() {
    return (
      <section className='homePage'>
        <LearningBar />
        {/* WHEN home page is selected */}
        {/* THEN Learning bar fades between different topics */}
        {/* <p className="learning-bar">{ChangingTextExample()}</p> */}
        <h1>Home Page</h1>
        <p>
          Hi, I’m a budding full-stack developer with hands-on experience in the MERN tech stack and a strong interest in both front-end and back-end web development. I recently completed an intensive 6-month coding bootcamp through the University of Minnesota, which not only sharpened my technical skills but also sparked a deep passion for programming. I'm continuously learning and building, whether it's crafting interactive websites, developing video games in my spare time, or expressing creativity through both digital and traditional painting. This portfolio is a reflection of my journey so far
        </p>
        <img src={profile} alt='profile'></img>
      </section>
    );
  }