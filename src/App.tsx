import { useState } from "react";
import "./App.css";
import { BarChartDemo } from "./components/bar/BarChartDemo";
import { GroupedBarChartDemo } from "./components/bar/GroupedBarChartDemo";
import { BasicLineChartDemo } from "./components/line/BasicLineChartDemo";
import { StackedBarChartDemo } from "./components/bar/StackedBarChartDemo";
import { BasicAreaChartDemo } from "./components/BasicAreaChartDemo";
import { MultipleLineChartDemo } from "./components/line/MultipleLineChartDemo";
import { DonutChartDemo } from "./components/donut/DonutChartDemo";
import { BasicGraphDemo } from "./components/graph/BasicGrahphDemo";
import { CustomizedGraphDemo } from "./components/graph/CustomizedGraphDemo";
import { PieChartDemo } from "./components/donut/PieChartDemo";
import { BasicMapChartDemo } from "./components/BasicMapChartDemo";

function App() {
  return (
    <div className="App">
      <h1>Donut chart </h1>
      <DonutChartDemo />
      <h1>Pie chart </h1>
      <PieChartDemo />
      <h1>Basic Bar chart </h1>
      <BarChartDemo />
      <h1>Grouped Bar chart </h1>
      <GroupedBarChartDemo />
      <h1>Stacked Bar Chart </h1>
      <StackedBarChartDemo />
      <h1>Basic Line Chart </h1>
      <BasicLineChartDemo />
      <h1>Multiple Line Chart </h1>
      <MultipleLineChartDemo />
      <h1>Basic Area Chart </h1>
      <BasicAreaChartDemo />

      <h1>Graph Chart </h1>
      <BasicGraphDemo />
      <h1>Customized Graph Chart </h1>
      <CustomizedGraphDemo />
      <h1>Basic Map Chart </h1>
      <BasicMapChartDemo />
    </div>
  );
}

export default App;
