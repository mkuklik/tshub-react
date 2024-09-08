import * as React from "react";
import { Popover, Tooltip, Position } from "@blueprintjs/core";

/* <Popover
content={<span>Refresh to the most recent data.</span>}
position={Position.BOTTOM_RIGHT}
> */
// </Popover>

const GraphRealtimeRefreshTooltip = (props) => (
  <Tooltip
    content={<span>Refresh to the most recent data.</span>}
    position={Position.BOTTOM_RIGHT}
    hoverCloseDelay={50}
    hoverOpenDelay={200}
  >
    {props.children}
  </Tooltip>
);

export default GraphRealtimeRefreshTooltip;
