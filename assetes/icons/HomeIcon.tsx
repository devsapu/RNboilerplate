import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = (props:any) => {
  return (
    <Svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill={props.color || 'black'} 
      width={props.size || '24'} 
      height={props.size || '24'}
    >
      <Path d="M0 0h24v24H0z" fill="none"/>
      <Path d="M12 3l9 7v11a2 2 0 0 1-2 2h-6v-7h-2v7H5a2 2 0 0 1-2-2V10l9-7zm2 2.2l6 4.8V19h-4v-6H10v6H4v-8.8l6-4.8a.996.996 0 0 1 1.32-.08c.37.29.44.81.15 1.19l-1.1 1.42a8.014 8.014 0 0 0 3.73 1.69v-2.31l1.1-1.41c.38-.38.92-.46 1.4-.22z"/>
    </Svg>
  );
};

export default HomeIcon;
