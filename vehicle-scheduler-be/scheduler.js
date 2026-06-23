const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjaG91ZGFyeXBhdml0cmEuMjMuY3NtQGFuaXRzLmVkdS5pbiIsImV4cCI6MTc4MjE5ODMxNywiaWF0IjoxNzgyMTk3NDE3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmE3NGFmMDEtZGIzOS00MDk0LTgxOTMtZTgyNzk4NDMwNDRjIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicGF2aXRyYSBjaG91ZGFyeSIsInN1YiI6IjEyZWFlMGNkLWM3ZjItNDQ0My04MjYwLTIxNjJhNTZkMzFmYSJ9LCJlbWFpbCI6ImNob3VkYXJ5cGF2aXRyYS4yMy5jc21AYW5pdHMuZWR1LmluIiwibmFtZSI6InBhdml0cmEgY2hvdWRhcnkiLCJyb2xsTm8iOiJhMjMxMjY1NTIxMzkiLCJhY2Nlc3NDb2RlIjoiTVRxeGFyIiwiY2xpZW50SUQiOiIxMmVhZTBjZC1jN2YyLTQ0NDMtODI2MC0yMTYyYTU2ZDMxZmEiLCJjbGllbnRTZWNyZXQiOiJkS3dSQXZTY3hFellYakZNIn0.ZLp1bEC3XSoxCjjy7_hDugqQqHWM7XF85dP0tLzsWfw";

async function test() {
  try {
    const res = await axios.get(
      "http://4.224.186.213/evaluation-service/depots",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    console.log(res.data);
  } catch (err) {
    console.log(err.response?.status);
    console.log(err.response?.data);
  }
}

test();