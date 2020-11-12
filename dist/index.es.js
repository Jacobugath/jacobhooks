import React, { useState } from 'react';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function useCompleteInput(input) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var update = function update(e) {
    e.preventDefault();
    setValue(e.target.value);
  };

  var place = 'Enter ' + input + '...';

  var comp = function comp() {
    return /*#__PURE__*/React.createElement("div", {
      className: "form-input"
    }, /*#__PURE__*/React.createElement("label", null, input, ":", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: value,
      onChange: update,
      placeholder: place
    })));
  };

  return {
    value: value,
    comp: comp()
  };
}
function useBareInput(input, initialValue) {
  var _useState3 = useState(initialValue),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var update = function update(e) {
    e.preventDefault();
    setValue(e.target.value);
  };

  var place = 'Enter ' + input + '...';

  var comp = function comp() {
    return /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: value,
      onChange: update,
      placeholder: place
    });
  };

  return {
    value: value,
    comp: comp()
  };
}

export { useBareInput, useCompleteInput };
//# sourceMappingURL=index.es.js.map
