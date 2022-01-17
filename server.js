const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.get("/write", (요청, 응답) => {
  응답.sendFile(__dirname + "/write.html");
});

app.get("/", function (요청, 응답) {
  응답.sendFile(__dirname + "/index.html");
});

app.post("/add", (req, res) => {
  res.send("전송완료");
  console.log(req.body.todo);
});
