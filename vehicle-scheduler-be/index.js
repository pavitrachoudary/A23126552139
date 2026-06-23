const axios = require("axios");

async function getDepots() {
  const res = await axios.get(
    "http://4.224.186.213/evaluation-service/depots"
  );
  return res.data.depots;
}

async function getVehicles() {
  const res = await axios.get(
    "http://4.224.186.213/evaluation-service/vehicles"
  );
  return res.data.vehicles;
}

async function main() {
  const depots = await getDepots();
  const vehicles = await getVehicles();

  console.log(depots);
  console.log(vehicles);
}

main();