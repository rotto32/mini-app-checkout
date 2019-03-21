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
                        React.createElement("input", { type: "submit", value: "Submit" })
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
    }]);

    return HomePage;
}(React.Component);

ReactDOM.render(React.createElement(HomePage, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvcHMiLCJzdGF0ZSIsInBhZ2UiLCJlbWFpbCIsIm5hbWUiLCJwYXNzd29yZCIsInNob3dTaWduVXBGb3JtIiwiYmluZCIsInNldEVtYWlsIiwic2V0VXNlcm5hbWUiLCJlIiwic2V0UGFzc3dvcmQiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxROzs7QUFDRixzQkFBYUMsS0FBYixFQUFtQjtBQUFBOztBQUFBLHdIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNWQyxrQkFBTSxNQURJO0FBRVZDLG1CQUFPLEVBRkc7QUFHVkMsa0JBQU0sRUFISTtBQUlWQyxzQkFBVTtBQUpBLFNBQWI7O0FBT0EsY0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRCxJQUFkLE9BQWhCO0FBQ0EsY0FBS0UsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRixJQUFqQixPQUFuQjtBQVhlO0FBWWxCOzs7O2lDQUVRO0FBQUE7O0FBQ0wsZ0JBQUlMLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxJQUF0Qjs7QUFFQSxnQkFBSUEsU0FBUyxNQUFiLEVBQXFCO0FBQ2pCLHVCQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFFSTtBQUFBO0FBQUEsMEJBQVEsU0FBUyxtQkFBSztBQUFDLHVDQUFLSSxjQUFMO0FBQXNCLDZCQUE3QztBQUFBO0FBQUE7QUFGSixpQkFESjtBQU1IOztBQUVELGdCQUFJSixTQUFTLFFBQWIsRUFBdUI7QUFDbkIsdUJBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQ1MsdURBRFQ7QUFFRSx1REFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLRCxLQUFMLENBQVdFLEtBQXJDLEVBQTRDLFVBQVUsa0JBQUNPLENBQUQsRUFBTztBQUFFLHVDQUFLRixRQUFMLENBQWNFLENBQWQ7QUFBa0IsNkJBQWpGLEdBRkY7QUFFNkYsdURBRjdGO0FBQUE7QUFHWSx1REFIWjtBQUlJLHVEQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtULEtBQUwsQ0FBV0csSUFBckMsRUFBMkMsVUFBVSxrQkFBQ00sQ0FBRCxFQUFPO0FBQUUsdUNBQUtELFdBQUwsQ0FBaUJDLENBQWpCO0FBQXFCLDZCQUFuRixHQUpKO0FBSWlHLHVEQUpqRztBQUFBO0FBS1ksdURBTFo7QUFNSSx1REFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLVCxLQUFMLENBQVdJLFFBQXJDLEVBQStDLFVBQVUsa0JBQUNLLENBQUQsRUFBTztBQUFFLHVDQUFLQyxXQUFMLENBQWlCRCxDQUFqQjtBQUFxQiw2QkFBdkYsR0FOSjtBQU1xRyx1REFOckc7QUFPRSx1REFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQVBGO0FBRkYsaUJBREY7QUFjSDtBQUdKOzs7eUNBR2lCO0FBQ1osaUJBQUtFLFFBQUwsQ0FBYyxFQUFDVixNQUFNLFFBQVAsRUFBZDtBQUNMOzs7aUNBRVNXLEssRUFBTztBQUNiLGlCQUFLRCxRQUFMLENBQWM7QUFDVlQsdUJBQU9VLE1BQU1DLE1BQU4sQ0FBYUM7QUFEVixhQUFkO0FBR0g7OztvQ0FFWUYsSyxFQUFPO0FBQ2hCLGlCQUFLRCxRQUFMLENBQWM7QUFDVlIsc0JBQU1TLE1BQU1DLE1BQU4sQ0FBYUM7QUFEVCxhQUFkO0FBR0g7OztvQ0FFV0YsSyxFQUFPO0FBQ2YsaUJBQUtELFFBQUwsQ0FBYztBQUNWUCwwQkFBVVEsTUFBTUMsTUFBTixDQUFhQztBQURiLGFBQWQ7QUFHSDs7OztFQXBFa0JDLE1BQU1DLFM7O0FBMkU3QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxRQUFELE9BQWhCLEVBQThCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQTlCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgIHBhZ2U6IFwiTWFpblwiLFxuICAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICAgICAgfTsgXG5cbiAgICAgICAgdGhpcy5zaG93U2lnblVwRm9ybSA9IHRoaXMuc2hvd1NpZ25VcEZvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRFbWFpbCA9IHRoaXMuc2V0RW1haWwuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuc2V0VXNlcm5hbWUgPSB0aGlzLnNldFVzZXJuYW1lLmJpbmQodGhpcyk7IFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLnN0YXRlLnBhZ2U7XG5cbiAgICAgICAgaWYgKHBhZ2UgPT09IFwiTWFpblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5CdXkgdGhlIFRoaW5nPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9Pnt0aGlzLnNob3dTaWduVXBGb3JtKCl9fT5CdXk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFnZSA9PT0gXCJTaWduVXBcIikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+U2lnbiBVcDwvaDM+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsPGJyLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5zZXRFbWFpbChlKSB9fT48L2lucHV0Pjxici8+XG4gICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuc2V0VXNlcm5hbWUoZSkgfX0+PC9pbnB1dD48YnIvPlxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5zZXRQYXNzd29yZChlKSB9fT48L2lucHV0Pjxici8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gXG4gICAgfVxuXG5cbiAgICBzaG93U2lnblVwRm9ybSAoKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFnZTogXCJTaWduVXBcIn0pO1xuICAgIH1cblxuICAgIHNldEVtYWlsIChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0VXNlcm5hbWUgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHNldFBhc3N3b3JkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gIFxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8SG9tZVBhZ2UgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiXX0=