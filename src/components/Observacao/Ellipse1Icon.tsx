import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 53 51' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={26.4074} cy={25.6398} rx={26.4074} ry={25.3602} fill='#BF0202' />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
