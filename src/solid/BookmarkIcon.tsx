import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const BookmarkIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
    </Svg>
  );
};

export default BookmarkIcon;
