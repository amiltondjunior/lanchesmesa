import { memo, SVGProps } from 'react';

const Rectangle11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 185 74' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.5}
      d='M0 5C0 2.23858 2.23858 0 5 0H180C182.761 0 185 2.23858 185 5V69C185 71.7614 182.761 74 180 74H5C2.23857 74 0 71.7614 0 69V5Z'
      fill='white'
      fillOpacity={0.5}
      stroke='black'
    />
  </svg>
);
const Memo = memo(Rectangle11Icon);
export { Memo as Rectangle11Icon };
