import React from "react";
import { VisSingleContainer, VisGraph } from "@unovis/react";

type GraphData = {
  nodes: NodeDatum[];
  links: LinkDatum[];
};

type NodeDatum = {
  id?: string;
};

type LinkDatum = {
  id?: string;
  source: number | string | NodeDatum;
  target: number | string | NodeDatum;
};
export const BasicGraphDemo = () => {
  const nodes = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];

  const links = [
    { id: "1", source: "1", target: "2" },
    { id: "2", source: "1", target: "3" },
    { id: "3", source: "2", target: "4" },
    { id: "4", source: "2", target: "5" },
  ];

  const data: GraphData = {
    nodes,
    links,
  };

  return (
    <VisSingleContainer data={data}>
      <VisGraph />
    </VisSingleContainer>
  );
};
