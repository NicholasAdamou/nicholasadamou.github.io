import styled from 'styled-components';

const Container = styled.div`
  svg {
    width: 100%;
    height: 80px;

    g {
      fill: var(--black);
    }
  }
`;

const Logo = () => (
  <Container>
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M2650 4578 c-93 -210 -160 -350 -159 -338 0 8 6 62 14 120 7 57 12
			106 11 108 -6 6 -501 -30 -507 -36 -4 -4 -56 -297 -117 -651 -61 -354 -113
			-645 -115 -648 -2 -2 -328 180 -723 405 -399 226 -720 403 -722 397 -3 -14
			437 -1767 447 -1777 6 -7 593 -48 599 -42 2 1 -129 295 -291 653 -162 358
			-293 651 -290 651 2 0 326 -250 719 -556 393 -306 717 -554 720 -551 3 3 60
			431 127 951 67 520 125 946 129 946 4 0 79 -35 168 -77 158 -75 162 -76 198
			-63 205 73 282 104 282 114 -1 6 -31 81 -69 166 l-68 155 -164 57 c-90 31
			-165 57 -167 58 -2 0 -12 -19 -22 -42z"
        />
        <path
          d="M2908 3867 c-110 -18 -117 -21 -113 -41 2 -11 34 -280 70 -596 36
			-316 68 -585 71 -598 4 -21 9 -23 47 -17 l42 6 259 -821 c152 -480 264 -819
			270 -817 6 3 37 12 69 21 31 9 57 20 57 24 0 4 -24 129 -54 277 -30 149 -53
			271 -51 273 2 2 202 -144 445 -325 242 -180 447 -328 454 -328 11 0 306 354
			306 367 0 3 -261 106 -580 228 -319 123 -578 225 -577 226 1 1 169 104 372
			229 204 125 371 228 373 230 4 4 -182 445 -188 444 -3 0 -156 -178 -340 -396
			-270 -319 -336 -391 -342 -376 -7 18 -148 787 -148 809 0 6 18 14 40 18 22 3
			40 10 40 15 0 9 -400 1165 -403 1167 -1 0 -55 -8 -119 -19z"
        />
        <path
          d="M1892 1789 c-117 -226 -212 -417 -210 -424 2 -7 138 -154 302 -326
			l299 -314 226 -11 c124 -7 275 -13 335 -15 l109 -4 233 304 c129 168 234 307
			234 310 0 5 -269 354 -284 368 -2 2 -79 -133 -172 -301 l-169 -304 -85 -6
			c-47 -3 -137 -8 -200 -11 l-115 -5 -165 191 c-91 105 -169 199 -174 210 -7 14
			19 66 114 231 68 117 124 214 125 215 0 1 91 -29 200 -67 110 -39 204 -69 209
			-67 11 4 107 419 99 427 -2 3 -161 6 -351 8 l-347 3 -213 -412z"
        />
      </g>
    </svg>
  </Container>
);

export default Logo;
