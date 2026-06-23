const axios = require("axios");
function knapsack(tasks, capacity) {
  const n = tasks.length;

  const dp = Array(n + 1)
    .fill()
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const duration = tasks[i - 1].Duration;
    const impact = tasks[i - 1].Impact;

    for (let w = 0; w <= capacity; w++) {
      if (duration <= w) {
        dp[i][w] = Math.max(
          impact + dp[i - 1][w - duration],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  let w = capacity;
  const selectedTasks = [];

  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selectedTasks.push(tasks[i - 1]);
      w -= tasks[i - 1].Duration;
    }
  }

  return {
    maxImpact: dp[n][capacity],
    tasks: selectedTasks,
  };
}
async function main() {
  try {
    // Step 1: Get token
    const authRes = await axios.post(
      "http://4.224.186.213/evaluation-service/auth",
      {
        email: "choudarypavitra.23.csm@anits.edu.in",
        name: "pavitra choudary",
        rollNo: "a23126552139",
        accessCode: "MTqxar",
        clientID: "12eae0cd-c7f2-4443-8260-2162a56d31fa",
        clientSecret: "dKwRAvScxEzYXjFM"
      }
    );

    const token = authRes.data.access_token;

    console.log("Token received");

    // Step 2: Get depots
    const depotsRes = await axios.get(
      "http://4.224.186.213/evaluation-service/depots",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    // 👇 ADD THIS BLOCK HERE
    const vehiclesRes = await axios.get(
      "http://4.224.186.213/evaluation-service/vehicles",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
const depots = depotsRes.data.depots;
const vehicles = vehiclesRes.data.vehicles;

for (const depot of depots) {
  const result = knapsack(
    vehicles,
    depot.MechanicHours
  );

  console.log("\n====================");
  console.log("Depot:", depot.ID);
  console.log("Hours:", depot.MechanicHours);
  console.log("Maximum Impact:", result.maxImpact);
  console.log("Tasks Selected:", result.tasks.length);
}

  } catch (err) {
    console.log("ERROR");
    console.log(err.response?.status);
    console.log(err.response?.data || err.message);
  }
}

main();