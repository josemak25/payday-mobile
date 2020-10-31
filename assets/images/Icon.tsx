import * as React from 'react';
import Svg, { Defs, ClipPath, Rect, G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 55.009 38" {...props}>
      <Defs>
        <ClipPath id="prefix__a">
          <Rect
            width={49.896}
            height={28.512}
            rx={5}
            transform="rotate(11 2.72 28.248)"
          />
        </ClipPath>
        <ClipPath id="prefix__b">
          <Rect width={50} height={29} rx={5} />
        </ClipPath>
      </Defs>
      <G transform="translate(.589 .491)" clipPath="url(#prefix__a)">
        <G transform="rotate(11 2.72 28.248)">
          <Rect width={49.896} height={28.512} rx={5} />
          <Rect x={1} y={1} width={47.896} height={26.512} rx={4} />
        </G>
        <Path d="M5.606 4.753L53.186 14M5.198 6.851l47.58 9.249" />
        <Path d="M30.96 14.4l8.397 1.633-.68 3.499-8.396-1.633zM41.456 16.441l8.397 1.632-.68 3.499-8.397-1.632zM44.907 21.105l4.198.816-.136.7-4.198-.816zM44.703 22.154l4.198.817-.136.7-4.198-.817z" />
        <Path
          d="M37.168 23.59a1 1 0 011.388.27l2.264 3.356a1 1 0 01-.27 1.388l-3.356 2.263a1 1 0 01-1.388-.27l-2.264-3.356a1 1 0 01.27-1.388z"
          fill="#cd31f1"
        />
        <Path
          d="M43.466 24.813a1 1 0 011.388.27l2.263 3.357a1 1 0 01-.27 1.388l-3.356 2.263a1 1 0 01-1.388-.27l-2.264-3.356a1 1 0 01.27-1.388z"
          fill="#1be76f"
        />
        <Path d="M4.39-4.671l32.68 44.98-2.884 2.094-32.68-44.98z" />
        <Path d="M17.451-11.41l34.775 47.863-9.804 7.123L7.648-4.287z" />
        <Rect
          width={49.896}
          height={28.512}
          rx={5}
          transform="rotate(3 7.53 30.68)"
          opacity={0.199}
        />
      </G>
      <G clipPath="url(#prefix__b)">
        <G>
          <Rect width={50} height={29} rx={5} />
          <Rect x={1} y={1} width={48} height={27} rx={4} />
        </G>
        <Path d="M1.069 4.634h48.47M1.069 6.772h48.47" />
        <Path d="M28 9h8v4h-8zM39 9h8v4h-8zM42.768 13.187h4.277v.713h-4.277zM43 14h4v1h-4z" />
        <Path
          d="M35.793 16.707a1 1 0 011.414 0l3.086 3.086a1 1 0 010 1.414l-3.086 3.086a1 1 0 01-1.414 0l-3.086-3.086a1 1 0 010-1.414z"
          fill="#ffe727"
        />
        <Path
          d="M42.253 16.841a1 1 0 011.495 0l2.661 2.995a1 1 0 010 1.329l-2.662 2.994a1 1 0 01-1.495 0l-2.661-2.995a1 1 0 010-1.329z"
          fill="#46d7d1"
        />
        <Path d="M-1.923-4.385l40.662 37.918-2.43 2.606L-4.355-1.778z" />
        <Path d="M9.613-13.492l43.268 40.348-8.264 8.863L1.349-4.63z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
