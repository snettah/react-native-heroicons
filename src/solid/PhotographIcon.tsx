import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const PhotographIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default PhotographIcon;
