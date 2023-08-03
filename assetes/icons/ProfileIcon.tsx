import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={props.color || 'green'}
      width={props.size || '24'}
      height={props.size || '24'}
    >
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm6 10h-2a4 4 0 0 0-3.995-3.8L12 18a4 4 0 0 0-3.8 2.995L8 21h8a4 4 0 0 0 0-2l.955-.192A4.993 4.993 0 0 1 18 22z" />
    </Svg>
  );
};

export default ProfileIcon;
