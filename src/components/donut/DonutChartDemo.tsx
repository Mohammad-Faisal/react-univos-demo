import React from "react";
import { VisSingleContainer, VisDonut, VisTooltip } from "@unovis/react";
import { Donut } from "@unovis/ts";

export const DonutChartDemo = () => {
  const data: number[] = [30, 40, 50];

  const value = (d: number) => d;

  const triggers = { [Donut.selectors.segment]: (d: any) => d.data };

  return (
    <VisSingleContainer data={data}>
      <VisTooltip triggers={triggers} />
      <VisDonut value={value} />
    </VisSingleContainer>
  );
};
