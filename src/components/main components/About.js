const About = () => {
  return (
    <div className="about text-darkr">
      <h1 className="about__title bg-light">ABOUT PAGE</h1>
      <div className="about__info bg-light">
        <p>
          <strong>ConsFilm</strong> (Netflix Clone)
        </p>
        <p>
          Created as EPAM Lab Project by{' '}
          <a
            href="https://github.com/lur3x"
            className="about-a"
            target="_blank"
          >
            Denys Materna
          </a>
        </p>
        <div>
          <p>Things used for app build:</p>
          <ul>
            <li>React (create-react-app)</li>
            <li>Basic CSS & HTML</li>
            <li>Axios AJAX Request</li>
            <li>
              Firebase API{' '}
              <a
                href="https://firebase.google.com/?authuser=0"
                className="about-a"
                target="_blank"
              >
                (https://firebase.google.com/?authuser=0)
              </a>
            </li>
            <li>
              TVMAZE API{' '}
              <a
                href="https://www.tvmaze.com/api"
                target="_blank"
                className="about-a"
              >
                (https://www.tvmaze.com/api)
              </a>
            </li>
            <li>React Router</li>
            <li>React Context API</li>
            <li>Deployed to Netlify</li>
            <li>Deployed to Firebase</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
