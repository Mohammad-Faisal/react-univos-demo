import React from "react";
import { VisXYContainer, VisLine, VisAxis } from "@unovis/react";

type DataRecord = {
  xAxisValue: number;
  yAxisValue1: number;
  yAxisValue2: number;
};

export const MultipleLineChartDemo = () => {
  const data: DataRecord[] = [
    { xAxisValue: 1, yAxisValue1: 23, yAxisValue2: 33 },
    { xAxisValue: 2, yAxisValue1: 14, yAxisValue2: 54 },
    { xAxisValue: 3, yAxisValue1: 44, yAxisValue2: 14 },
    { xAxisValue: 4, yAxisValue1: 24, yAxisValue2: 54 },
    { xAxisValue: 5, yAxisValue1: 64, yAxisValue2: 34 },
  ];

  const x = (d: DataRecord) => d.xAxisValue;
  const y = [
    (d: DataRecord) => d.yAxisValue1,
    (d: DataRecord) => d.yAxisValue2,
  ];

  const color = (d: DataRecord, i: number) => ["#6A9DFF", "#1acb9a"][i];

  return (
    <VisXYContainer data={data}>
      <VisLine highlightOnHover={true} x={x} y={y} />
      <VisAxis type="x" />
      <VisAxis type="y" />
    </VisXYContainer>
  );
};
