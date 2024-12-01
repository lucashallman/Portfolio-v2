import { Link } from 'react-router-dom';

const ButtonLink = ({link, label}) => {
    return (
        <Link
        to='#'
        onClick={(e) => {
            window.location.href = link;
            e.preventDefault();
        }}>
            {label}
        </Link>
    );
};

const projects = [
    {
        title: <h2>PetZeppelin!</h2>,
        img: <img src="https://placecats.com/300/200?fit=contain&position=center" alt="Test Image Provided by PlaceCats.com"/>,
        shortDesc: <p>A playful social media platform for pets, built to demonstrate team collaboration, Tailwind CSS integration, and local storage manipulation. PetZeppelin allows users to create pet profiles and posts, with data stored locally in the browser, simulating key social media functionalities without a backend. This project highlights efficient styling with Tailwind CSS and client-side data handling for a seamless user experience.</p>
    }
];

const testProjects = [
    {
        title: <h2>Test 1</h2>,
        img: <img src="https://placecats.com/300/200?fit=contain&position=center" alt="Test Image Provided by PlaceCats.com"/>,
        desc: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt.'</p>,
        pageLink: <Link to={'/'}>Page Link</Link>,
        gitLink: <ButtonLink link="https://github.com/lucashallman" label="Page link n/a, see full Portfolio Here!" />
    },
    {
        title: <h2>'Test 2'</h2>,
        img: <img src="https://placecats.com/300/200?fit=contain&position=center" alt="Test Image Provided by PlaceCats.com"/>,
        desc: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt.'</p>,
        pageLink: <Link to={'/'}>Page Link</Link>,
        gitLink: <ButtonLink link="https://github.com/lucashallman" label="Page link n/a, see full Portfolio Here!"/>
    },
    {
        title: <h2>'Test 3'</h2>,
        img: <img src="https://placecats.com/300/200?fit=contain&position=center" alt="Test Image Provided by PlaceCats.com"/>,
        desc: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt.'</p>,
        pageLink: <Link to={'/'}>Page Link</Link>,
        gitLink: <ButtonLink link="https://github.com/lucashallman" label="Page link n/a, see full Portfolio Here!"/>
    },
    {
        title: <h2>'Test 4'</h2>,
        img: <img src="https://placecats.com/300/200?fit=contain&position=center" alt="Test Image Provided by PlaceCats.com"/>,
        desc: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt.'</p>,
        pageLink: <Link to={'/'}>Page Link</Link>,
        gitLink: <ButtonLink link="https://github.com/lucashallman" label="Page link n/a, see full Portfolio Here!"/>
    },
    {
        title: <h2>'Test 5'</h2>,
        img: <img src="https://placecats.com/300/200?fit=contain&position=center" alt="Test Image Provided by PlaceCats.com"/>,
        desc: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt.'</p>,
        pageLink: <Link to={'/'}>Page Link</Link>,
        gitLink: <ButtonLink link="https://github.com/lucashallman" label="Page link n/a, see full Portfolio Here!"/>
    },
]

export {projects, testProjects};