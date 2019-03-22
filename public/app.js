"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

        _this.state = {
            page: "Main",
            email: "",
            name: "",
            password: ""
        };

        _this.showSignUpForm = _this.showSignUpForm.bind(_this);
        _this.setEmail = _this.setEmail.bind(_this);
        _this.setUsername = _this.setUsername.bind(_this);
        return _this;
    }

    _createClass(HomePage, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var page = this.state.page;

            if (page === "Main") {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h3",
                        null,
                        "Buy the Thing"
                    ),
                    React.createElement(
                        "button",
                        { onClick: function onClick() {
                                _this2.showSignUpForm();
                            } },
                        "Buy"
                    )
                );
            }

            if (page === "SignUp") {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h3",
                        null,
                        "Sign Up"
                    ),
                    React.createElement(
                        "form",
                        null,
                        "Email",
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", value: this.state.email, onChange: function onChange(e) {
                                _this2.setEmail(e);
                            } }),
                        React.createElement("br", null),
                        "Username",
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", value: this.state.name, onChange: function onChange(e) {
                                _this2.setUsername(e);
                            } }),
                        React.createElement("br", null),
                        "Password",
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", value: this.state.password, onChange: function onChange(e) {
                                _this2.setPassword(e);
                            } }),
                        React.createElement("br", null),
                        React.createElement("input", { type: "submit", value: "Submit", onSubmit: function onSubmit(e) {
                                _this2.sendData(e);
                            } })
                    )
                );
            }
        }
    }, {
        key: "showSignUpForm",
        value: function showSignUpForm() {
            this.setState({ page: "SignUp" });
        }
    }, {
        key: "setEmail",
        value: function setEmail(event) {
            this.setState({
                email: event.target.value
            });
        }
    }, {
        key: "setUsername",
        value: function setUsername(event) {
            this.setState({
                name: event.target.value
            });
        }
    }, {
        key: "setPassword",
        value: function setPassword(event) {
            this.setState({
                password: event.target.value
            });
        }
    }, {
        key: "sendData",
        value: function sendData(event) {
            event.preventDefault();
            console.log(event.target.value);

            axios.post('/user', this.state).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
        }
    }]);

    return HomePage;
}(React.Component);

ReactDOM.render(React.createElement(HomePage, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvcHMiLCJzdGF0ZSIsInBhZ2UiLCJlbWFpbCIsIm5hbWUiLCJwYXNzd29yZCIsInNob3dTaWduVXBGb3JtIiwiYmluZCIsInNldEVtYWlsIiwic2V0VXNlcm5hbWUiLCJlIiwic2V0UGFzc3dvcmQiLCJzZW5kRGF0YSIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLFE7OztBQUNGLHNCQUFhQyxLQUFiLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1ZDLGtCQUFNLE1BREk7QUFFVkMsbUJBQU8sRUFGRztBQUdWQyxrQkFBTSxFQUhJO0FBSVZDLHNCQUFVO0FBSkEsU0FBYjs7QUFPQSxjQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNELElBQWQsT0FBaEI7QUFDQSxjQUFLRSxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJGLElBQWpCLE9BQW5CO0FBWGU7QUFZbEI7Ozs7aUNBRVE7QUFBQTs7QUFDTCxnQkFBSUwsT0FBTyxLQUFLRCxLQUFMLENBQVdDLElBQXRCOztBQUVBLGdCQUFJQSxTQUFTLE1BQWIsRUFBcUI7QUFDakIsdUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUVJO0FBQUE7QUFBQSwwQkFBUSxTQUFTLG1CQUFLO0FBQUMsdUNBQUtJLGNBQUw7QUFBc0IsNkJBQTdDO0FBQUE7QUFBQTtBQUZKLGlCQURKO0FBTUg7O0FBRUQsZ0JBQUlKLFNBQVMsUUFBYixFQUF1QjtBQUNuQix1QkFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFDUyx1REFEVDtBQUVFLHVEQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtELEtBQUwsQ0FBV0UsS0FBckMsRUFBNEMsVUFBVSxrQkFBQ08sQ0FBRCxFQUFPO0FBQUUsdUNBQUtGLFFBQUwsQ0FBY0UsQ0FBZDtBQUFrQiw2QkFBakYsR0FGRjtBQUU2Rix1REFGN0Y7QUFBQTtBQUdZLHVEQUhaO0FBSUksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBS1QsS0FBTCxDQUFXRyxJQUFyQyxFQUEyQyxVQUFVLGtCQUFDTSxDQUFELEVBQU87QUFBRSx1Q0FBS0QsV0FBTCxDQUFpQkMsQ0FBakI7QUFBcUIsNkJBQW5GLEdBSko7QUFJaUcsdURBSmpHO0FBQUE7QUFLWSx1REFMWjtBQU1JLHVEQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtULEtBQUwsQ0FBV0ksUUFBckMsRUFBK0MsVUFBVSxrQkFBQ0ssQ0FBRCxFQUFPO0FBQUUsdUNBQUtDLFdBQUwsQ0FBaUJELENBQWpCO0FBQXFCLDZCQUF2RixHQU5KO0FBTXFHLHVEQU5yRztBQU9FLHVEQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCLEVBQW9DLFVBQVUsa0JBQUNBLENBQUQsRUFBTztBQUFFLHVDQUFLRSxRQUFMLENBQWNGLENBQWQ7QUFBa0IsNkJBQXpFO0FBUEY7QUFGRixpQkFERjtBQWNIO0FBR0o7Ozt5Q0FHaUI7QUFDWixpQkFBS0csUUFBTCxDQUFjLEVBQUNYLE1BQU0sUUFBUCxFQUFkO0FBQ0w7OztpQ0FFU1ksSyxFQUFPO0FBQ2IsaUJBQUtELFFBQUwsQ0FBYztBQUNWVix1QkFBT1csTUFBTUMsTUFBTixDQUFhQztBQURWLGFBQWQ7QUFHSDs7O29DQUVZRixLLEVBQU87QUFDaEIsaUJBQUtELFFBQUwsQ0FBYztBQUNWVCxzQkFBTVUsTUFBTUMsTUFBTixDQUFhQztBQURULGFBQWQ7QUFHSDs7O29DQUVXRixLLEVBQU87QUFDZixpQkFBS0QsUUFBTCxDQUFjO0FBQ1ZSLDBCQUFVUyxNQUFNQyxNQUFOLENBQWFDO0FBRGIsYUFBZDtBQUdIOzs7aUNBRVFGLEssRUFBTztBQUNaQSxrQkFBTUcsY0FBTjtBQUNBQyxvQkFBUUMsR0FBUixDQUFZTCxNQUFNQyxNQUFOLENBQWFDLEtBQXpCOztBQUVBSSxrQkFBTUMsSUFBTixDQUFXLE9BQVgsRUFBb0IsS0FBS3BCLEtBQXpCLEVBQ0NxQixJQURELENBQ00sVUFBQ0MsR0FBRCxFQUFPO0FBQ1RMLHdCQUFRQyxHQUFSLENBQVlJLEdBQVo7QUFDSCxhQUhELEVBSUNDLEtBSkQsQ0FJTyxVQUFDQyxHQUFELEVBQVM7QUFDWlAsd0JBQVFDLEdBQVIsQ0FBWU0sR0FBWjtBQUNILGFBTkQ7QUFPSDs7OztFQWpGa0JDLE1BQU1DLFM7O0FBd0Y3QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxRQUFELE9BQWhCLEVBQThCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQTlCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgcGFnZTogXCJNYWluXCIsXG4gICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICBwYXNzd29yZDogXCJcIlxuICAgICAgICB9OyBcblxuICAgICAgICB0aGlzLnNob3dTaWduVXBGb3JtID0gdGhpcy5zaG93U2lnblVwRm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldEVtYWlsID0gdGhpcy5zZXRFbWFpbC5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5zZXRVc2VybmFtZSA9IHRoaXMuc2V0VXNlcm5hbWUuYmluZCh0aGlzKTsgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgcGFnZSA9IHRoaXMuc3RhdGUucGFnZTtcblxuICAgICAgICBpZiAocGFnZSA9PT0gXCJNYWluXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkJ1eSB0aGUgVGhpbmc8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+e3RoaXMuc2hvd1NpZ25VcEZvcm0oKX19PkJ1eTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYWdlID09PSBcIlNpZ25VcFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMz5TaWduIFVwPC9oMz5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgRW1haWw8YnIvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnNldEVtYWlsKGUpIH19PjwvaW5wdXQ+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWU8YnIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5zZXRVc2VybmFtZShlKSB9fT48L2lucHV0Pjxici8+XG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnNldFBhc3N3b3JkKGUpIH19PjwvaW5wdXQ+PGJyLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBvblN1Ym1pdD17KGUpID0+IHsgdGhpcy5zZW5kRGF0YShlKSB9fT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiBcbiAgICB9XG5cblxuICAgIHNob3dTaWduVXBGb3JtICgpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlOiBcIlNpZ25VcFwifSk7XG4gICAgfVxuXG4gICAgc2V0RW1haWwgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRVc2VybmFtZSAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuYW1lOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgc2V0UGFzc3dvcmQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2VuZERhdGEoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIGF4aW9zLnBvc3QoJy91c2VyJywgdGhpcy5zdGF0ZSlcbiAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICBcbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEhvbWVQYWdlIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7Il19