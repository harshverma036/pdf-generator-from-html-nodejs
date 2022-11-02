const express = require("express");
const pdf = require("pdf-creator-node");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  const html = fs.readFileSync("index.html", "utf8");

  const user = {
    name: "harsh",
    type: "testing",
  };

  const document = {
    html: html,
    data: {
      user,
    },
    path: `./pdf/${Date.now()}.pdf`,
    type: "",
  };
  //   var options = {
  //     orientation: "portrait",
  //     border: "10mm",
  //   };
  pdf
    .create(document)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return res.json({
    status: "success",
  });
});

app.listen(9876, () => console.log("Server is running on 9876"));
