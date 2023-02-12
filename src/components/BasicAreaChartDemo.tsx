import React from "react";
import { VisXYContainer, VisArea, VisAxis } from "@unovis/react";

type DataRecord = {
  xAxisValue: number;
  yAxisValue: number;
};

export const BasicAreaChartDemo = () => {
  const data: DataRecord[] = [
    { xAxisValue: 1, yAxisValue: 23 },
    { xAxisValue: 2, yAxisValue: 14 },
    { xAxisValue: 3, yAxisValue: 44 },
    { xAxisValue: 4, yAxisValue: 24 },
    { xAxisValue: 5, yAxisValue: 64 },
  ];

  const x = (d: DataRecord) => d.xAxisValue;
  const y = (d: DataRecord) => d.yAxisValue;

  return (
    <VisXYContainer data={data}>
      <VisArea x={x} y={y} />
      <VisAxis type="x" />
      <VisAxis type="y" />
    </VisXYContainer>
  );
};
