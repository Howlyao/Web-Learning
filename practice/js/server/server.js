const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  if (req.method.toLowerCase() == "options")
    res.send(200); //让options尝试请求快速结束
  else next();
});

app.get("/", (req, res) => {
  if (!req.cookies["name"]) {
    console.log("no cookie");
    res.cookie("name", "cookieTest", { domain: "127.0.0.1", path: "/" });
    res.cookie("name2222", "cookieTest", { domain: "127.0.0.2", path: "/" });
  } else {
    console.log("has cookie");
    console.log(req.cookies["name"]);
  }
  // res.setHeader(
  //   "Set-Cookie",
  //   "session_id=xxx;expires: new Date(Date.now() + 900000);HttpOnly;Path=/"
  // );
  res.send("hello world");
});

app.post("/test", (req, res) => {
  if (!req.cookies["name"]) {
    res.send("no");
  } else {
    res.send("yes");
  }
});
const port = process.env.PORT || 5000;
console.log(port);
app.listen(port, () => {
  console.log("Server is running");
});
