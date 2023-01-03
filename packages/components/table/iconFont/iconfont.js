!(function (t) {
  var e,
    n,
    o,
    i,
    l,
    c =
      '<svg><symbol id="icon-baocun" viewBox="0 0 1024 1024"><path d="M426.666667 682.666667v42.666666h170.666666v-42.666666h-170.666666z m-42.666667-85.333334h298.666667v128h42.666666V418.133333L605.866667 298.666667H298.666667v426.666666h42.666666v-128h42.666667z m260.266667-384L810.666667 379.733333V810.666667H213.333333V213.333333h430.933334zM341.333333 341.333333h85.333334v170.666667H341.333333V341.333333z" fill="#444444" ></path></symbol><symbol id="icon-shaixuan" viewBox="0 0 1024 1024"><path d="M554.666667 618.666667v85.333333l-42.666667-25.6v-187.733333L341.333333 298.666667h384l-170.666666 187.733333v132.266667z m85.333333-89.6L938.666667 213.333333H128l298.666667 315.733334V725.333333l213.333333 128v-324.266666z" fill="#444444" ></path></symbol><symbol id="icon-moduanzuoyouzhankai" viewBox="0 0 1024 1024"><path d="M776.533333 448l-46.933333-46.933333L789.333333 341.333333l149.333334 149.333334-149.333334 149.333333-59.733333-59.733333 46.933333-46.933334H554.666667v-85.333333h221.866666z m-529.066666 0H469.333333v85.333333H247.466667l46.933333 46.933334L234.666667 640 85.333333 490.666667 234.666667 341.333333l59.733333 59.733334-46.933333 46.933333z" fill="#444444" ></path></symbol><symbol id="icon-moduanzuoyoushouqi" viewBox="0 0 1024 1024"><path d="M345.6 490.666667L298.666667 443.733333 358.4 384l149.333333 149.333333L358.4 682.666667 298.666667 622.933333l46.933333-46.933333H128v-85.333333h217.6z m371.2 0H938.666667v85.333333h-221.866667l46.933333 46.933333-59.733333 59.733334-149.333333-149.333334L704 384l59.733333 59.733333-46.933333 46.933334z" fill="#444444" ></path></symbol><symbol id="icon-yanjing_yincang" viewBox="0 0 1024 1024"><path d="M422.4 776.533333l76.8-76.8h8.533333c145.066667 0 251.733333-55.466667 332.8-170.666666-25.6-34.133333-55.466667-64-85.333333-89.6L819.2 384c46.933333 38.4 85.333333 89.6 119.466667 145.066667-98.133333 170.666667-243.2 251.733333-426.666667 251.733333-29.866667 4.266667-59.733333 0-89.6-4.266667z m-238.933333-119.466666c-34.133333-34.133333-68.266667-76.8-98.133334-128 98.133333-170.666667 243.2-251.733333 426.666667-251.733334h46.933333l-85.333333 85.333334c-128 8.533333-226.133333 64-298.666667 166.4 17.066667 25.6 38.4 51.2 59.733334 68.266666l-51.2 59.733334zM755.2 213.333333l59.733333 59.733334L277.333333 810.666667l-59.733333-59.733334L755.2 213.333333z" fill="#444444" ></path></symbol><symbol id="icon-yanjing_xianshi" viewBox="0 0 1024 1024"><path d="M512 768c-183.466667 0-328.533333-85.333333-426.666667-256 98.133333-170.666667 243.2-256 426.666667-256s328.533333 85.333333 426.666667 256c-98.133333 170.666667-243.2 256-426.666667 256z m8.533333-426.666667c-128 0-256 55.466667-328.533333 170.666667 72.533333 115.2 200.533333 170.666667 328.533333 170.666667s238.933333-55.466667 311.466667-170.666667c-72.533333-115.2-183.466667-170.666667-311.466667-170.666667z m-8.533333 298.666667c-72.533333 0-128-55.466667-128-128s55.466667-128 128-128 128 55.466667 128 128-55.466667 128-128 128z m0-85.333333c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666667-42.666667 17.066667-42.666667 42.666667 17.066667 42.666667 42.666667 42.666667z" fill="#444444" ></path></symbol></svg>',
    a = (a = document.getElementsByTagName("script"))[
      a.length - 1
    ].getAttribute("data-injectcss"),
    d = function (t, e) {
      e.parentNode.insertBefore(t, e);
    };
  if (a && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (t) {
      console && console.log(t);
    }
  }
  function s() {
    l || ((l = !0), o());
  }
  function m() {
    try {
      i.documentElement.doScroll("left");
    } catch (t) {
      return void setTimeout(m, 50);
    }
    s();
  }
  (e = function () {
    var t,
      e = document.createElement("div");
    (e.innerHTML = c),
      (c = null),
      (e = e.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (e = e),
        (t = document.body).firstChild ? d(e, t.firstChild) : t.appendChild(e));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(e, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), e();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = e),
        (i = t.document),
        (l = !1),
        m(),
        (i.onreadystatechange = function () {
          "complete" == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
