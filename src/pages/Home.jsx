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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
          velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
          ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
          non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
          ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
          rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
          tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
          porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
          vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
          fames ac ante ipsum primis in faucibus.
        </p>
        <img src={profile} alt='profile'></img>
      </section>
    );
  }