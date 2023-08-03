import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = (props:any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={props.color || 'green'}
      width={props.size || '24'}
      height={props.size || '24'}
    >
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 3v10m6 0v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4m6 0V3l6 6h-5v6h-2v-6H6l6-6z" />
    </Svg>
  );
};

export default HomeIcon;
