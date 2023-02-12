import React from "react";
import { VisSingleContainer, VisGraph } from "@unovis/react";
import { GraphLinkStyle } from "@unovis/ts";

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
export const CustomizedGraphDemo = () => {
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

  const nodeLabelValues = (n: NodeDatum) => n.id ?? "default";
  const nodeColorValues = (n: NodeDatum) => "red";
  const nodeFillValues = (n: NodeDatum) => "blue";
  const nodeShapeValues = (n: NodeDatum) => "triangle";

  const linkColorValues = (l: LinkDatum) => "black";
  const linkWidthValues = (l: LinkDatum) => 2;
  const linkStyleValues = (l: LinkDatum) => GraphLinkStyle.Dashed;

  return (
    <VisSingleContainer data={data}>
      <VisGraph
        nodeSize={20}
        nodeShape={nodeShapeValues}
        nodeStroke={nodeColorValues}
        nodeLabel={nodeLabelValues}
        nodeFill={nodeFillValues}
        linkStroke={linkColorValues}
        linkWidth={linkWidthValues}
        linkStyle={linkStyleValues}
      />
    </VisSingleContainer>
  );
};
