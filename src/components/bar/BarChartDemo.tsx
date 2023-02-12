import React from "react";
import {
  VisXYContainer,
  VisGroupedBar,
  VisAxis,
  VisTooltip,
} from "@unovis/react";
import { GroupedBar } from "@unovis/ts";

type DataRecord = {
  xAxisValue: number;
  yAxisValue: number;
};

export const BarChartDemo = () => {
  const data: DataRecord[] = [
    { xAxisValue: 1, yAxisValue: 23 },
    { xAxisValue: 2, yAxisValue: 34 },
    { xAxisValue: 3, yAxisValue: 44 },
    { xAxisValue: 4, yAxisValue: 54 },
    { xAxisValue: 5, yAxisValue: 64 },
  ];

  const x = (d: DataRecord) => d.xAxisValue;
  const y = (d: DataRecord) => d.yAxisValue;

  return (
    <VisXYContainer data={data}>
      <VisGroupedBar x={x} y={y} />
      <VisAxis type="x" />
      <VisAxis type="y" />
    </VisXYContainer>
  );
};
