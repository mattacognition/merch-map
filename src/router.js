import React from "react";
import Rankings from "./components/Rankings";
import Ramblings from "./components/Ramblings";
import Rumblings from "./components/Rumblings";

const routes = {
  "/rankings": () => <Rankings />,
  "/ramblings": () => <Ramblings />,
  "/rumblings": () => <Rumblings />
};
export default routes;