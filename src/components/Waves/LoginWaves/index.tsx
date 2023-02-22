import { fixedBottomSvgStyle } from '~/util/customBottomSvgStyle';

export function LoginWaves() {
  return (
    <svg style={fixedBottomSvgStyle} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path
        fill='#589DDF'
        fillOpacity='0.2'
        d='M0,128L48,149.3C96,171,192,213,288,240C384,267,480,277,576,256C672,235,768,181,864,144C960,107,1056,85,1152,101.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      ></path>
    </svg>
  );
}
