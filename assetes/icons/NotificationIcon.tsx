import React from 'react';
import Svg, { Path } from 'react-native-svg';

const NotificationIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={props.color || 'gray'}
      width={props.size || '24'}
      height={props.size || '24'}
    >
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6v-5a6 6 0 0 0-5-5.9V6a4 4 0 1 0-2 0v.1a6 6 0 0 0-5 5.9v5h1.8a1 1 0 0 0 .2.4l1.4 2.6a1 1 0 0 0 .8.5h6a1 1 0 0 0 .8-.5l1.4-2.6a1 1 0 0 0 .2-.4H18z" />
    </Svg>
  );
};

export default NotificationIcon;
