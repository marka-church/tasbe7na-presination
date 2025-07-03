// deobfuscated with https://obf-io.deobfuscate.io/

'use strict';

if (window.self !== window.top) {
  window.top.location.href = window.location.href;
}
if (window.isSecureContext) {
  document.addEventListener("contextmenu", _0x404773 => {
    _0x404773.preventDefault();
  }, false);
  document.addEventListener("DOMContentLoaded", function () {
    const _0xcf5093 = document.getElementById("slideShow");
    let _0xa9ada9 = null;
    function _0x129313() {
      if (navigator.presentation.receiver) {
        navigator.presentation.receiver.connectionList.then(_0x533d2f => {
          _0x533d2f.connections.map(_0x22719f => _0x40287e(_0x22719f));
          _0x533d2f.addEventListener("connectionavailable", function (_0x18b503) {
            _0x40287e(_0x18b503.connection);
          });
        });
      }
    }
    function _0x40287e(_0x27e9fc) {
      _0x27e9fc.addEventListener("message", _0x53409b);
    }
    function _0x53409b(_0x4c4968) {
      if (_0x4c4968.data) {
        const _0x5ef9cc = JSON.stringify(_0x4c4968.data).replace(/"/g, '');
        _0xcf5093.style.overflow = "auto";
        _0xcf5093.style.cursor = "auto";
        _0xcf5093.style.height = "unset !important";
        _0xcf5093.children[0].classList.remove("blank");
        switch (_0x5ef9cc) {
          case "C7503AB487C392E8CBBE756FD7340BD8":
            _0xcf5093.style.background = "black";
            _0xcf5093.style.overflow = "hidden";
            _0xcf5093.children[0].classList.add("blank");
            break;
          case "14029A1DDB21B1385070500F8CDACB19":
            _0xcf5093.style.background = "black";
            _0xcf5093.children[0].style.color = "white";
            break;
          case "CC8D8CE7B9B4EC7F5ABD1A302F3B9B31":
            _0xcf5093.style.background = "white";
            _0xcf5093.children[0].style.color = "black";
            break;
          case "5f2abbd565f3096a322eb83ba54b8f03e":
            _0xcf5093.style.background = "green";
            _0xcf5093.children[0].style.color = "white";
            break;
          case "2C59BB4E321DC7DBF9E89877569D1A2":
          case "C21B2F5B5A2176B89ECCAC7A510FE0":
            const _0x2e28f8 = window.getComputedStyle(_0xcf5093.children[0], null).getPropertyValue("font-size");
            const _0x3c95d9 = parseFloat(_0x2e28f8);
            _0xa9ada9 = _0x5ef9cc === "2C59BB4E321DC7DBF9E89877569D1A2" ? _0x3c95d9 + 10 : _0x3c95d9 - 10;
            _0xcf5093.children[0].style.fontSize = _0xa9ada9 + "px";
            break;
          case "AFB5304ED88DD1616F5B3EB6383C":
            _0xcf5093.children[0].style.fontSize = "calc(8vw + 1vh + 2vmin)";
            break;
          default:
            if (_0x5ef9cc.startsWith("86ED7F4C1FC9746E61AEA716B0E89440")) {
              let _0x3ef74b = _0x5ef9cc.replace("86ED7F4C1FC9746E61AEA716B0E89440", '');
              _0xcf5093.innerHTML = _0x3ef74b;
              if (_0xa9ada9 !== null) {
                _0xcf5093.children[0].style.fontSize = _0xa9ada9 + "px";
              }
              if (_0xcf5093.scrollHeight > _0xcf5093.clientHeight) {
                let _0x470c68 = document.getElementsByTagName("h1")[0];
                if (_0x470c68 !== undefined) {
                  if (_0x470c68.style.height !== "100%") {
                    _0xcf5093.children[0].style.height = "100%";
                    _0xcf5093.children[0].style.cursor = "all-scroll";
                  }
                  let _0x13ad57 = _0x470c68.innerHTML;
                  _0x470c68.innerHTML = "<br>" + _0x13ad57 + "<br>\xA0<br>";
                }
              }
              if (_0xcf5093.children[0].style.height === "100%") {
                _0xcf5093.scrollTo(0, 0);
              }
            }
            break;
        }
      }
    }
    _0x129313();
  }, false);
}
