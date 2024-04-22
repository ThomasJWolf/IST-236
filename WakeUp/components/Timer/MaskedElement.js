import React from "react";
import Svg, { Defs, Rect, Mask } from "react-native-svg";

function MaskedElement({ size, color, duration }) {
  return (
    <Svg height={size} width={size}>
      <Defs>
        <Mask id="mask">
          <Rect
            x="0"
            y="0"
            width={size}
            height={size}
            fill="white" // This area will be fully visible
          />
          <Rect
            x={size / 4}
            y={size / 4}
            width={size / 2}
            height={size / 2}
            fill="black" // This area will be fully transparent
          />
        </Mask>
      </Defs>
      <Rect
        x="0"
        y="0"
        width={size}
        height={size}
        fill={color}
        mask="url(#mask)" // Applying the defined mask
      />
    </Svg>
  );
}

export default MaskedElement;