const axios = require("axios");
const md5 = require("md5");

axios.get("https://thien.biz").then(response => console.log(`Thien.Biz resource md5 = ${md5(response)}, env=${process.env.NODE_ENV}`));