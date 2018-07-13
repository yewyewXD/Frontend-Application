"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "header",
                null,
                React.createElement(
                    "div",
                    { className: "navbar navbar-dark bg-dark box-shadow" },
                    React.createElement(
                        "div",
                        { className: "container d-flex justify-content-between" },
                        React.createElement(
                            "a",
                            { href: "#", className: "navbar-brand d-flex align-items-center" },
                            React.createElement(
                                "strong",
                                null,
                                "Innoloft Frontend"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var PageContent = function (_React$Component2) {
    _inherits(PageContent, _React$Component2);

    function PageContent() {
        _classCallCheck(this, PageContent);

        return _possibleConstructorReturn(this, (PageContent.__proto__ || Object.getPrototypeOf(PageContent)).apply(this, arguments));
    }

    _createClass(PageContent, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "main",
                { role: "main" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row py-5" },
                        React.createElement(
                            "div",
                            { className: "col-md-12" },
                            React.createElement(
                                "h1",
                                null,
                                "Playground"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Innoloft Frontend Application with React.js"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PageContent;
}(React.Component);

var Footer = function (_React$Component3) {
    _inherits(Footer, _React$Component3);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "footer",
                { className: "text-muted" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "p",
                        { className: "text-center" },
                        "\xA92018 Innoloft Frontend"
                    )
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

var InnoloftFrontend = function (_React$Component4) {
    _inherits(InnoloftFrontend, _React$Component4);

    function InnoloftFrontend() {
        _classCallCheck(this, InnoloftFrontend);

        return _possibleConstructorReturn(this, (InnoloftFrontend.__proto__ || Object.getPrototypeOf(InnoloftFrontend)).apply(this, arguments));
    }

    _createClass(InnoloftFrontend, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(PageContent, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return InnoloftFrontend;
}(React.Component);

ReactDOM.render(React.createElement(InnoloftFrontend, null), document.getElementById('app'));
