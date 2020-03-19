import React from 'react';

function Notification(props) {
  const { message } = props;
  return <div className="Notification">{message}</div>;
}

export default Notification;
