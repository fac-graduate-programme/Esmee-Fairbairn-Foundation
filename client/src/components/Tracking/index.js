import ReactGA, { ga } from 'react-ga';

const initializeAnalytics = () => {
    ReactGA.initialize('UA-148075978-1');
  };

  export default initializeAnalytics;