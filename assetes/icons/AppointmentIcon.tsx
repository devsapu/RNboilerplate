import Svg, { Path } from "react-native-svg";

const AppointmentIcon = (props:any) => {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={props.color || 'green'}
        width={props.size || '24'}
        height={props.size || '24'}
      >
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V9h14v10zm-8-6v4h2v-4h-2z" />
      </Svg>
    );
  };
  
  export default AppointmentIcon;