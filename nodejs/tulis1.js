var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}
var
Type = function (_React$Component) {_inherits(Type, _React$Component);
  function Type(props) {_classCallCheck(this, Type);return _possibleConstructorReturn(this, (Type.__proto__ || Object.getPrototypeOf(Type)).call(this,
    props));
  }_createClass(Type, [{ key: "componentDidMount", value: function componentDidMount()

    {
      new TypeIt(this.el, this.props);
    } }, { key: "render", value: function render()

    {var _this2 = this;
      return React.createElement("span", { ref: function ref(el) {_this2.el = el;} }, this.props.children);
    } }]);return Type;}(React.Component);


ReactDOM.render(
React.createElement("div", null,
  React.createElement(Type, {
    strings: "Halaman ini aku buat karena hobi dan juga untuk menghilangkan bosan saja :) <br> Mungkin terlihat lucu bagi kalian... <br> Atau mungkin malah terlihat membosankan... :p",
    loop: true,
    loopDelay: 5000,
    speed: 40 })),


document.getElementById('nulis'));
