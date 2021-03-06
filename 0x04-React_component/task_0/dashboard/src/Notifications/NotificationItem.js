import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  if (html === undefined) return <li data-notification-type={type}>{value}</li>;
  else
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string
};

NotificationItem.defaultProps = {
  type: 'default',
  value: ''
};

export default NotificationItem;
