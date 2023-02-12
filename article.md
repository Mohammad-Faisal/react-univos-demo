# Why is Unovis better than other libraries?

Unovis has some benefits over other libraries.

#Univos with ReactJS

For this demo, we are going to use a template ReactJS application. 
To initialize it, we will use vite. There are other options like Svelte or Vanilla javascript projects as well. So you are not missing anything.

```
yarn create vite react-univos-demo --template react-ts
```

Now you can run the project using the following command.

```bash
yarn dev
```

Install Dependencies
To install dependencies, you should install the Unovis library inside your project.

```bash
yarn add @unovis/ts @unovis/react
```

## Concept of containers

Unovis library takes a different approach to visualizing data. It uses a concept called containers. Containers are the building blocks of Unovis.

Containers are the components that hold other components. Containers can be used to create a chart or a graph. Containers can also be used to create a dashboard.

There are two types of containers in Unovis. The `VisSingleContainer` and the `VisXYContainer`.

### 1. Single Container

The `VisSingleContainer` is a container that can be used to create a single chart. It can be used to create a chart like a donut chart, Graph chart, Map chart etc.

### 2. XY Container

The `VisXYContainer` can be used to create a chart with multiple components. It can be used to create a chart like a bar chart, line chart, area chart, etc.

To think simply, If your graph needs to have multiple axis then you should use the `VisXYContainer`. If your graph doesn't need depend on axis then you should use the `VisSingleContainer`.

Now let's create some charts. Shall we?

# Create a Donut chart

We will first see an example of donut chart using the `VisSingleContainer` component.

```js
import React from "react";
import { VisSingleContainer, VisDonut } from "@unovis/react";

export const DonutChartDemo = () => {
  const data: number[] = [30, 40, 50];

  const value = (d: number) => d;

  return (
    <VisSingleContainer data={data}>
      <VisDonut value={value} />
    </VisSingleContainer>
  );
};
```

Notice that we are passing a `data` array into the `VisSingleContainer` component. The data array should contain the data that is needed to create the chart.

Inside `VisDonut` we are passing a `value` function. The value function is used to extract the value from the data array.

# Customizing the Donut chart to create a Pie chart

If you want to customize the donut chart, you can use various properties of the `VisDonut` component. One of them are `arcWidth`. It determines the amount of space inside the donut.

So if you want to create a Pie chart you can just pass `arcWidth = 0` and it will become a pie chart.

```js
import React from "react";
import { VisSingleContainer, VisDonut, VisTooltip } from "@unovis/react";
import { Donut } from "@unovis/ts";

export const PieChartDemo = () => {
  const data: number[] = [30, 40, 50];

  const value = (d: number) => d;

  return (
    <VisSingleContainer data={data}>
      <VisDonut arcWidth={0} value={value} />
    </VisSingleContainer>
  );
};
```

Now you have a pie chart like this !

## Show the tooltips

Now if you want to show the tooltips on hover, you can use the `VisTooltip` component.

To do that you can do the following

```js
const triggers = { [Donut.selectors.segment]: (d: any) => d.data };

return (
  <VisSingleContainer data={data}>
    <VisDonut value={value} />
    <VisTooltip triggers={triggers} />
  </VisSingleContainer>
);
```

Now it will show the tooltips on hover.

# Create a Bar chart

Unlike Donut chart a Bar chart needs multiple axis. So we will use the `VisXYContainer` component to create a bar chart.

As it has two axis so our data will need to be in a specific format. We need both the x and y axis data.

```js
const data: DataRecord[] = [
  { xAxisValue: 1, yAxisValue: 23 },
  { xAxisValue: 2, yAxisValue: 34 },
  { xAxisValue: 3, yAxisValue: 44 },
  { xAxisValue: 4, yAxisValue: 54 },
  { xAxisValue: 5, yAxisValue: 64 },
];

const x = (d: DataRecord) => d.xAxisValue;
const y = (d: DataRecord) => d.yAxisValue;
```

Then we can use the `VisXYContainer` component to create a bar chart.

```js
return (
  <VisXYContainer data={data}>
    <VisGroupedBar x={x} y={y} />
  </VisXYContainer>
);
```

Notice that we are using the `VisGroupedBar` component to create the bar chart. We are also passing the x and y axis functions.

The final output will look something like this.

But only showing some bars are not the best way to visualize data. So we will also add the axis to the chart.

```js
return (
  <VisXYContainer data={data}>
    <VisGroupedBar x={x} y={y} />
    <VisAxis type="x" />
    <VisAxis type="y" />
  </VisXYContainer>
);
```

Notice that we are using VisAxis component to create the axis. We need to pass the type of axis as a prop. The type can be either x or y.

So the final result looks like the following.

# Create a grouped bar chart

We can represent groups of data using the bar chart. Let's say we want to show the progression of three parameters over time. We can use the grouped bar chart to show this.

```js
import React from "react";
import { VisXYContainer, VisGroupedBar, VisAxis } from "@unovis/react";

type DataRecord = {
  xAxisValue: number,
  yAxisValue1: number,
  yAxisValue2: number,
};

export const GroupedBarChartDemo = () => {
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
      <VisGroupedBar x={x} y={y} />
      <VisAxis type="x" />
      <VisAxis type="y" />
    </VisXYContainer>
  );
};
```

It will create a result like this

# Show a Stacked chart

Another way to represent groups of data is to use a stacked chart. It is similar to the grouped bar chart. The only difference is that the stacked chart stacks the bars on top of each other.

The shape of the data is just like the grouped bar chart. The only difference is that we will use `VisStackedBar` component instead of `VisGroupedBar`.

```js
return (
  <VisXYContainer data={data}>
    <VisStackedBar x={x} y={y} />
    <VisAxis type="x" />
    <VisAxis type="y" />
  </VisXYContainer>
);
```

The result will be like this.

# Creating a Line chart

Line charts are useful for showing trends over time. We can use the `VisLine` component to create a line chart.

```js
import React from "react";
import { VisXYContainer, VisLine, VisAxis } from "@unovis/react";

type DataRecord = {
  xAxisValue: number,
  yAxisValue: number,
};

export const BasicLineChartDemo = () => {
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
      <VisLine highlightOnHover={true} x={x} y={y} />
      <VisAxis type="x" />
      <VisAxis type="y" />
    </VisXYContainer>
  );
};
```

Notice that we are using the `VisLine` component to create the line chart. We are also passing the x and y axis functions. Because to show the progression of data we need both axis.

If we want to compare multiple trend lines then we can update the structure of the data to plot multiple y axis value for each x axis value.

```js
import React from "react";
import { VisXYContainer, VisLine, VisAxis } from "@unovis/react";

type DataRecord = {
  xAxisValue: number,
  yAxisValue1: number,
  yAxisValue2: number,
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
```

Which will produce the following result.

# Creating an Area chart

An Area chart is similar to a line chart. The only difference is that the area chart fills the area between the line and the x axis.

```js
import React from "react";
import { VisXYContainer, VisArea, VisAxis } from "@unovis/react";

type DataRecord = {
  xAxisValue: number,
  yAxisValue: number,
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
```

You can do the same thing with multiple area charts. I am not showing that for brevity.

# Show a graph chart

One interesting feature of Unovis is that it can be used to create a graph chart. To do this, we need to use the `VisGraph` component.

The `VisGraph` component is a component that can be used to create a graph chart. It can be used to create a graph chart with multiple nodes and edges.

You need to represent the graph data in a specific format. There will be two parts of the data.

### 1. Node data

The node data should be an array of objects. Each object should have an id property. The id property should be unique for each node.

```js
const nodes = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
```

### 2. Link data

The link data should be an array of objects. Each object should have a source and target property. The source and target properties should be the id of the nodes that are connected by the edge.

```js
const links = [
  { id: "1", source: "1", target: "2" },
  { id: "2", source: "1", target: "3" },
  { id: "3", source: "2", target: "4" },
  { id: "4", source: "2", target: "5" },
];
```

So the final graph data will be an object with two properties. The nodes and links properties.

```js
const graphData = {
  nodes,
  links,
};
```

You can then use the VisGraph component to create a graph chart.

```js
import React from "react";
import { VisXYContainer, VisGraph } from "@unovis/react";

export const GraphChartDemo = () => {
  const graphData = {
    nodes, // created before
    links, // created before
  };

  return (
    <VisXYContainer data={graphData}>
      <VisGraph />
    </VisXYContainer>
  );
};
```

The final output should look like this

## Customizing the Nodes

Circular nodes are boring, right? Don't worry, You can customize the nodes by using various node properties.

### 1. Customizing the Node Size

The nodeSize property can be used to set the size of the nodes in the graph chart.

```js
<VisGraph nodeSize={20} />
```

### 2. Change the fill color

The `nodeFill` property can be used to set the color of the nodes in the graph chart.

```js
<VisGraph nodeFill={(n: NodeDatum) => "red"} />
```

This way you can control the color of every node.

### 3. Change the border color

The `nodeStroke` property can be used to set the border color of the nodes in the graph chart.

```js
<VisGraph nodeStroke={(n: NodeDatum) => "blue"} />
```

### 4. Labeling the nodes

You can add labels to the nodes for better understanding.

To do that you have to use the nodeLabel property can be used to set the label of the nodes in the graph chart.

```js
<VisGraph nodeLabel={(nodeData) => nodeData.id} />
```

### 5. Change the shape!

You can change the shape of each of the nodes as well.To do that use the `nodeShape` property. The available shapes are `circle`, `triangle` , `hexagon` , `square`, etc

```js
<VisGraph nodeShape={(n: NodeDatum) => "triangle"} />
```

There are various other properties that can be used to customize the label of the nodes. Some of them are `nodeIcon`, `nodeIconSize`, etc. To learn more [you can refer to the documentation](https://unovis.dev/docs/networks-and-flows/Graph)

## Customizing the Links

You can customize the links as well. You can change the color, width, and style of the links.

### 1. Change the color

The `linkStroke` property can be used to set the color of the links in the graph chart.

```js
<VisGraph linkStroke={(l: LinkDatum) => "red"} />
```

### 2. Change the width

The linkWidth property can be used to set the width of the links in the graph chart.

```js
<VisGraph linkWidth={(l: LinkDatum) => 2} />
```

### 3. Change the style

The linkStyle property can be used to set the style of the links in the graph chart.

```js
<VisGraph linkStyle="dashed" />
```

And with all of the customizations above the final graph will look something like this,

```js
import React from "react";
import { VisSingleContainer, VisGraph } from "@unovis/react";
import { GraphLinkStyle } from "@unovis/ts";

type GraphData = {
  nodes: NodeDatum[],
  links: LinkDatum[],
};

type NodeDatum = {
  id?: string,
};

type LinkDatum = {
  id?: string,
  source: number | string | NodeDatum,
  target: number | string | NodeDatum,
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
```

Awesome! right?

But don't stop here. You can do a lot of customisations and add a lot of features to your graph chart. For example you can create tree chart, circular chart, parallel chart, flying particles, and many more!

To learn more about the graph chart [you can refer to the documentation](https://unovis.dev/docs/networks-and-flows/Graph)

# Map Charts

Another type of chart that you can create with Unovis is a map chart. You can create a map chart using the `VisLeafletMap` component.

But before that you will need an API key to use the Map. You can create a free account on [Map Tier](https://cloud.maptiler.com/maps/) and get an API key.

After opening an account visit [API Keys](https://cloud.maptiler.com/account/keys/) and get your API Key to follow along.

## Showing a basic map

To show some points on the map (Which is usually the most common use-case of using a map chart) you can use the `VisLeafletMap` component with some random latitude and longitude values.

```js
import React from "react";
import { VisLeafletMap } from "@unovis/react";

const key = "YOUR_KEY_GOES_HERE";

export const BasicMapChartDemo = () => {
  const style = `https://api.maptiler.com/maps/basic-v2/style.json?key=${key}`;
  const attribution = [
    `<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>`,
    `<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>`,
  ];

  const locations = [
    { latitude: 76.57744716414618, longitude: 167.02598969888402 },
    { latitude: -69.88903227855825, longitude: -124.39180738161512 },
    { latitude: -65.15557562550397, longitude: 63.12768315018343 },
    { latitude: 9.963608192996048, longitude: 131.90872175784352 },
    { latitude: 18.517816282881938, longitude: -5.674213770692035 },
    { latitude: 7.006024523431535, longitude: -37.97202916896549 },
    { latitude: 16.255591612629146, longitude: -56.43214810193591 },
    { latitude: -89.5085602625064, longitude: -43.379507499950705 },
    { latitude: 10.611461127021741, longitude: -118.58004118222965 },
    { latitude: 84.87864073812892, longitude: 51.35247805286431 },
  ];
  return (
    <VisLeafletMap
      style={style}
      attribution={attribution}
      pointColor="red"
      data={locations}
    />
  );
};
```

Notice here we are passing a `locations` array into the `data` property of `VisLeafletMap` component. This array contains the latitude and longitude values of the points that we want to show on the map.

You can customize the map in many ways.

## Change the color of the points

You can change the color of the points on the map by passing a function to the `pointColor` property of the `VisLeafletMap` component.

```js
<VisLeafletMap pointColor={"red"} />
```

## Change the shape of the points

You can change the shape of the points on the map by passing a function to the `pointShape` property of the `VisLeafletMap` component.

```js
<VisLeafletMap pointShape={"triangle"} />
```

And now your icons will be triangles instead of circles.

## Change the cluster color.

The map intelligently clusters the close points as you zoom in or out from the map. You can change the color of the cluster by passing a function to the `clusterColor` property of the `VisLeafletMap` component.

```js
<VisLeafletMap clusterColor={"black"} />
```

You can even make the cluster expand on click by making the clusterExpandOnClick={false} property of the `VisLeafletMap` component.

```js
<VisLeafletMap clusterExpandOnClick={true} />
```

Now the final output will look like this.
