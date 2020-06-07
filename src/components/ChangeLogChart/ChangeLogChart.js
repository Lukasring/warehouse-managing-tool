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

  console.log("c history: " + changeHistory);

  const itemChangeHistory = changeHistory.filter((item) => {
    return item.id === props.id;
  });

  const timeData = itemChangeHistory.map((item) => item.time);
  const valueData = itemChangeHistory.map((item) => parseInt(item[key]));
  console.log(valueData);

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: props.title,
    },

    xAxis: {
      categories: timeData,
    },
    yAxis: {
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
        data: valueData,
      },
    ],
  };

  console.log(options);

  return (
    <div className={styles.container}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChangeLogChart;
