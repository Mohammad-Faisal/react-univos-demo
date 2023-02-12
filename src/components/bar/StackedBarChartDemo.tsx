import React from "react";
import { VisXYContainer, VisStackedBar, VisAxis } from "@unovis/react";

type DataRecord = {
  xAxisValue: number;
  yAxisValue1: number;
  yAxisValue2: number;
};

export const StackedBarChartDemo = () => {
  const data: DataRecord[] = [
    { xAxisValue: 1, yAxisValue1: 23, yAxisValue2: 33 },
    { xAxisValue: 2, yAxisValue1: 34, yAxisValue2: 44 },
    { xAxisValue: 3, yAxisValue1: 44, yAxisValue2: 54 },
    { xAxisValue: 4, yAxisValue1: 54, yAxisValue2: 64 },
    { xAxisValue: 5, yAxisValue1: 64, yAxisValue2: 74 },
  ];

  const x = (d: DataRecord) => d.xAxisValue;
  const y = [
    (d: DataRecord) => d.yAxisValue1,
    (d: DataRecord) => d.yAxisValue2,
  ];

  return (
    <VisXYContainer data={data}>
      <VisStackedBar x={x} y={y} />
      <VisAxis type="x" />
      <VisAxis type="y" />
    </VisXYContainer>
  );
};
