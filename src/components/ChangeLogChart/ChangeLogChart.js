import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styles from "./ChangeLogChart.module.css";

const ChangeLogChart = (props) => {
  let changeHistory = [];
  let key = "";
  if (props.change === "price") {
    changeHistory = JSON.parse(localStorage.getItem("priceHistory"));
    key = "price";
  }
  if (props.change === "quantity") {
    changeHistory = JSON.parse(localStorage.getItem("quantityHistory"));
    key = "quantity";
  }

  const itemChangeHistory = changeHistory.filter((item) => {
    return item.id === props.id;
  });

  const timeData = itemChangeHistory.map((item) => item.time);
  const valueData = itemChangeHistory.map((item) => parseInt(item[key]));

  const options = {
    chart: {
      type: "line",
      backgroundColor: "#e7e7e7",
    },
    title: {
      text: props.title,
    },

    colors: ["#470147"],

    xAxis: {
      categories: timeData,
    },
    yAxis: {
      gridLineColor: "#470147",
      labels: {
        formatter: function () {
          return key === "price" ? this.value + "€" : this.value;
        },
      },
      title: {
        text: key.charAt(0).toUpperCase() + key.slice(1),
      },
    },

    series: [
      {
        name: key.charAt(0).toUpperCase() + key.slice(1),
        data: valueData.slice(-5),
      },
    ],
  };

  return (
    <div className={styles.container}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChangeLogChart;
