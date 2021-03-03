import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends Component {
  componentDidMount() {
    const { logOut } = this.props;
    const keyMap = {};

    window.addEventListener('keydown', (ev) => {
      if (ev.key === 'Control' || ev.key === 'h') {
        keyMap[ev.key] = ev.key;

        if (keyMap['Control'] && keyMap['h']) {
          delete keyMap['Control'];
          delete keyMap['h'];
          window.alert('Logging you out');
          logOut();
        }
      }
    });

    window.addEventListener('keyup', (ev) => {
      if (ev.key === 'Control' || ev.key === 'h') delete keyMap[ev.key];
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown');
    window.removeEventListener('keyup');
  }
  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      {
        id: 3,
        type: 'urgent',
        html: {
          __html: '<strong>Urgent requirement</strong> - complete by EOD'
        }
      }
    ];

  return (
      <Fragment>
      <Notifications listNotifications={listNotifications} />
      <div className='App'>
        <Header />
        <div className='App-body'>
          {!isLoggedIn && (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login />
            </BodySectionWithMarginBottom>
          )}
          {isLoggedIn && (
            <BodySectionWithMarginBottom title='Course List'>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
               in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </BodySection>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}

};

export default App;
