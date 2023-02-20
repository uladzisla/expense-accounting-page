import React, { useState } from "react";
import Cost from "./components/Cost";
import NewCost from "./components/NewCost";
const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999,
  },
  {
    id: "c2",
    date: new Date(2021, 8, 12),
    description: "macBook",
    amount: 1250,
  },
  {
    id: "c3",
    date: new Date(2021, 4, 12),
    description: "Jeens",
    amount: 49.9,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
    console.log("cost");
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Cost costs={costs} />
    </div>
  );
};

export default App;
