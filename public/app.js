"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { "class": "buy" },
                "Buy"
            );
        }
    }]);

    return HomePage;
}(React.Component);

ReactDOM.render(React.createElement(HomePage, null), document.getElementById('button'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUTs7Ozs7Ozs7Ozs7aUNBQ1E7QUFDTixtQkFDSTtBQUFBO0FBQUEsa0JBQVEsU0FBTSxLQUFkO0FBQUE7QUFBQSxhQURKO0FBS0g7Ozs7RUFQa0JDLE1BQU1DLFM7O0FBVTdCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLFFBQUQsT0FBaEIsRUFBdUNDLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBdkMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV5XCI+XG4gICAgICAgICAgICAgIEJ1eVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEhvbWVQYWdlPjwvSG9tZVBhZ2U+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uJykpOyJdfQ==