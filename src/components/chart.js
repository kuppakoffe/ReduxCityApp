import React from 'react';
import { TableCell } from 'material-ui/Table';

import { Sparklines, SparklinesLine } from 'react-sparklines';

export default props => (
  <div>
    <TableCell>
      <Sparklines data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </TableCell>
  </div>
);
