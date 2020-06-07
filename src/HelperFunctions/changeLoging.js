const logPriceChange = (prevState, currState) => {
  const priceHistory = JSON.parse(localStorage.getItem("priceHistory")) || [];
  const today = new Date();
  let date;
  let time;
  let dateTime;
  if (currState) {
    for (let i = 0; i < currState.length; i++) {
      if (!priceHistory.find((item) => item.id === currState[i].id)) {
        date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        time = today.getHours() + ":" + today.getMinutes();
        dateTime = date + " " + time;
        const newPrice = {
          id: currState[i].id,
          price: currState[i].price,
          time: dateTime,
        };
        priceHistory.push(newPrice);
        localStorage.setItem("priceHistory", JSON.stringify(priceHistory));
      }
    }
  }

  if (prevState) {
    if (prevState) {
      if (currState.length === prevState.length) {
        for (let i = 0; i < currState.length; i++) {
          if (currState[i].price !== prevState[i].price) {
            console.log(`${prevState[i].price} => ${currState[i].price}`);
            date =
              today.getFullYear() +
              "-" +
              (today.getMonth() + 1) +
              "-" +
              today.getDate();
            time = today.getHours() + ":" + today.getMinutes();
            dateTime = date + " " + time;
            const newPrice = {
              id: currState[i].id,
              price: currState[i].price,
              time: dateTime,
            };
            priceHistory.push(newPrice);
            localStorage.setItem("priceHistory", JSON.stringify(priceHistory));
          }
        }
      }
    }
  }
};

const logQuantityChange = (prevState, currState) => {
  const quantityHistory =
    JSON.parse(localStorage.getItem("quantityHistory")) || [];
  const today = new Date();
  let date;
  let time;
  let dateTime;
  if (currState) {
    for (let i = 0; i < currState.length; i++) {
      if (!quantityHistory.find((item) => item.id === currState[i].id)) {
        date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        time = today.getHours() + ":" + today.getMinutes();
        dateTime = date + " " + time;
        const newQuantity = {
          id: currState[i].id,
          quantity: currState[i].quantity,
          time: dateTime,
        };
        quantityHistory.push(newQuantity);
        localStorage.setItem(
          "quantityHistory",
          JSON.stringify(quantityHistory)
        );
      }
    }
  }

  if (prevState) {
    if (prevState) {
      if (currState.length === prevState.length) {
        for (let i = 0; i < currState.length; i++) {
          if (currState[i].quantity !== prevState[i].quantity) {
            console.log(`${prevState[i].quantity} => ${currState[i].quantity}`);
            date =
              today.getFullYear() +
              "-" +
              (today.getMonth() + 1) +
              "-" +
              today.getDate();
            time = today.getHours() + ":" + today.getMinutes();
            dateTime = date + " " + time;
            const newQuantity = {
              id: currState[i].id,
              quantity: currState[i].quantity,
              time: dateTime,
            };
            quantityHistory.push(newQuantity);
            localStorage.setItem(
              "quantityHistory",
              JSON.stringify(quantityHistory)
            );
          }
        }
      }
    }
  }
};

export { logPriceChange, logQuantityChange };
