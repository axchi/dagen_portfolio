import "normalize.css";
import "./styles.scss";

import "./js/cbpFWTabs";

(function () {
  [].slice.call(document.querySelectorAll(".tabs")).forEach(function (el) {
    new CBPFWTabs(el);
  });
})();