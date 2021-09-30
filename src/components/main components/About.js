const About = () => {
  return (
    <div className="about text-dark bg-light">
      <h3 className="about__title">ABOUT PAGE</h3>
      <div className="about__info">
        <p>
          <strong>ConsFilm</strong> (Netflix Clone)
        </p>
        <p>
          Created as EPAM Lab Project by{' '}
          <a href="https://github.com/lur3x">Denys Materna</a>
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
              >
                (https://firebase.google.com/?authuser=0)
              </a>
            </li>
            <li>
              TVMAZE API{' '}
              <a href="https://www.tvmaze.com/api" className="about-a">
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
