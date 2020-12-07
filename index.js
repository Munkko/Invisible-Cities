// const express = require("express");
// import LocomotiveScroll from "locomotive-scroll";

// const app = express();
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });

// app.use(express.static("./public"));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "./index.html");
// });

// app.listen(3000, function () {
//   console.log("your shits up on 3000");
// });

import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1,
});

document.getElementById("menu-btn").addEventListener("click", function () {
  let menu = document.getElementById("menu1");

  menu.style.top = "0vh";

  console.log((menu.style.width = ""));
});

eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(a);
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return r[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    "4 7=g.b;4 2=3.p('r');2.9='a/5';2.c='d';2.e=('6:'==3.u.h?'6:':'i:')+'//j.k.l/t/1.5?m=n&o='+7;(3.8('q')[0]||3.8('s')[0]).f(2);",
    31,
    31,
    "||mtiTracking|document|var|css|https|projectId|getElementsByTagName|type|text|MTIProjectId|rel|stylesheet|href|appendChild|window|protocol|http|fast|fonts|net|apiType|css|projectid|createElement|head|link|body||location".split(
      "|"
    ),
    0,
    {}
  )
);
