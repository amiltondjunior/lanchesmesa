import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon2 } from './Ellipse1Icon2.js';
import { Ellipse1Icon3 } from './Ellipse1Icon3.js';
import { Ellipse1Icon4 } from './Ellipse1Icon4.js';
import { Ellipse1Icon5 } from './Ellipse1Icon5.js';
import { Ellipse1Icon6 } from './Ellipse1Icon6.js';
import { Ellipse1Icon7 } from './Ellipse1Icon7.js';
import { Ellipse1Icon8 } from './Ellipse1Icon8.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon2 } from './Ellipse2Icon2.js';
import { Ellipse2Icon3 } from './Ellipse2Icon3.js';
import { Ellipse2Icon4 } from './Ellipse2Icon4.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import classes from './Observacao.module.css';
import { Rectangle11Icon } from './Rectangle11Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 64:59 */
export const Observacao: FC<Props> = memo(function Observacao(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes._352020ArrowBack1}></div>
      <div className={classes._352091Search1}></div>
      <div className={classes.lanchesMesa1}>Lanches | Mesa 01</div>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.r140}>R$ 14,00</div>
      <div className={classes.fusca}>Fusca</div>
      <div className={classes._352547EditMode1}></div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse12}>
        <Ellipse1Icon2 className={classes.icon2} />
      </div>
      <div className={classes._1}>+1</div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon3} />
      </div>
      <div className={classes.unnamed}>0</div>
      <div className={classes._352547EditMode12}></div>
      <div className={classes._12}>-1</div>
      <div className={classes.rectangle92}></div>
      <div className={classes.rectangle72}></div>
      <div className={classes.r150}>R$ 15,00</div>
      <div className={classes.passat}>Passat</div>
      <div className={classes._352547EditMode13}></div>
      <div className={classes.ellipse13}>
        <Ellipse1Icon3 className={classes.icon4} />
      </div>
      <div className={classes.ellipse14}>
        <Ellipse1Icon4 className={classes.icon5} />
      </div>
      <div className={classes._13}>+1</div>
      <div className={classes.ellipse22}>
        <Ellipse2Icon2 className={classes.icon6} />
      </div>
      <div className={classes.unnamed2}>0</div>
      <div className={classes._352547EditMode14}></div>
      <div className={classes._14}>-1</div>
      <div className={classes.rectangle93}></div>
      <div className={classes.rectangle73}></div>
      <div className={classes.unnamed3}>-</div>
      <div className={classes.r1450}>R$ 14,50</div>
      <div className={classes.jeep}>Jeep</div>
      <div className={classes._352547EditMode15}></div>
      <div className={classes.ellipse15}>
        <Ellipse1Icon5 className={classes.icon7} />
      </div>
      <div className={classes.ellipse16}>
        <Ellipse1Icon6 className={classes.icon8} />
      </div>
      <div className={classes._15}>+1</div>
      <div className={classes.ellipse23}>
        <Ellipse2Icon3 className={classes.icon9} />
      </div>
      <div className={classes.unnamed4}>0</div>
      <div className={classes._352547EditMode16}></div>
      <div className={classes._16}>-1</div>
      <div className={classes.rectangle94}></div>
      <div className={classes.rectangle74}></div>
      <div className={classes.unnamed5}>-</div>
      <div className={classes.r1550}>R$ 15,50</div>
      <div className={classes.fiat}>Fiat</div>
      <div className={classes._352547EditMode17}></div>
      <div className={classes.ellipse17}>
        <Ellipse1Icon7 className={classes.icon10} />
      </div>
      <div className={classes.ellipse18}>
        <Ellipse1Icon8 className={classes.icon11} />
      </div>
      <div className={classes._17}>+1</div>
      <div className={classes.ellipse24}>
        <Ellipse2Icon4 className={classes.icon12} />
      </div>
      <div className={classes.unnamed6}>0</div>
      <div className={classes._352547EditMode18}></div>
      <div className={classes._18}>-1</div>
      <div className={classes.rectangle10}></div>
      <div className={classes.observacao}>Observação</div>
      <div className={classes.rectangle11}>
        <Rectangle11Icon className={classes.icon13} />
      </div>
      <div className={classes.semCebola}>Sem cebola</div>
      <div className={classes.rectangle14}></div>
      <div className={classes.cancelar}>Cancelar</div>
      <div className={classes.rectangle142}></div>
      <div className={classes.salvar}>Salvar</div>
    </div>
  );
});
