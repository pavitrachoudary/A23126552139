const axios = require("axios");

async function getToken() {
  const res = await axios.post(
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

  console.log(res.data.access_token);
}

getToken();