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
        _this.sendData = _this.sendData.bind(_this);
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
                        { onSubmit: function onSubmit(e) {
                                _this2.sendData(e);
                            } },
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
    }, {
        key: "sendData",
        value: function sendData(event) {

            alert('!');
            console.log(this.state);

            axios.post('/user', this.state).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
            event.preventDefault();
        }
    }]);

    return HomePage;
}(React.Component);

ReactDOM.render(React.createElement(HomePage, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvcHMiLCJzdGF0ZSIsInBhZ2UiLCJlbWFpbCIsIm5hbWUiLCJwYXNzd29yZCIsInNob3dTaWduVXBGb3JtIiwiYmluZCIsInNldEVtYWlsIiwic2V0VXNlcm5hbWUiLCJzZW5kRGF0YSIsImUiLCJzZXRQYXNzd29yZCIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsInByZXZlbnREZWZhdWx0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDTUEsUTs7O0FBQ0Ysc0JBQWFDLEtBQWIsRUFBbUI7QUFBQTs7QUFBQSx3SEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVkMsa0JBQU0sTUFESTtBQUVWQyxtQkFBTyxFQUZHO0FBR1ZDLGtCQUFNLEVBSEk7QUFJVkMsc0JBQVU7QUFKQSxTQUFiOztBQU9BLGNBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0QsSUFBZCxPQUFoQjtBQUNBLGNBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIsT0FBbkI7QUFDQSxjQUFLRyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0gsSUFBZCxPQUFoQjtBQVplO0FBYWxCOzs7O2lDQUVRO0FBQUE7O0FBQ0wsZ0JBQUlMLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxJQUF0Qjs7QUFFQSxnQkFBSUEsU0FBUyxNQUFiLEVBQXFCO0FBQ2pCLHVCQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFFSTtBQUFBO0FBQUEsMEJBQVEsU0FBUyxtQkFBSztBQUFDLHVDQUFLSSxjQUFMO0FBQXNCLDZCQUE3QztBQUFBO0FBQUE7QUFGSixpQkFESjtBQU1IOztBQUVELGdCQUFJSixTQUFTLFFBQWIsRUFBdUI7QUFDbkIsdUJBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUVNO0FBQUE7QUFBQSwwQkFBTSxVQUFVLGtCQUFDUyxDQUFELEVBQU87QUFBRSx1Q0FBS0QsUUFBTCxDQUFjQyxDQUFkO0FBQWtCLDZCQUEzQztBQUFBO0FBQ0ssdURBREw7QUFFRix1REFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLVixLQUFMLENBQVdFLEtBQXJDLEVBQTRDLFVBQVUsa0JBQUNRLENBQUQsRUFBTztBQUFFLHVDQUFLSCxRQUFMLENBQWNHLENBQWQ7QUFBa0IsNkJBQWpGLEdBRkU7QUFFeUYsdURBRnpGO0FBQUE7QUFHUSx1REFIUjtBQUlBLHVEQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtWLEtBQUwsQ0FBV0csSUFBckMsRUFBMkMsVUFBVSxrQkFBQ08sQ0FBRCxFQUFPO0FBQUUsdUNBQUtGLFdBQUwsQ0FBaUJFLENBQWpCO0FBQXFCLDZCQUFuRixHQUpBO0FBSTZGLHVEQUo3RjtBQUFBO0FBS1EsdURBTFI7QUFNQSx1REFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLVixLQUFMLENBQVdJLFFBQXJDLEVBQStDLFVBQVUsa0JBQUNNLENBQUQsRUFBTztBQUFFLHVDQUFLQyxXQUFMLENBQWlCRCxDQUFqQjtBQUFxQiw2QkFBdkYsR0FOQTtBQU1pRyx1REFOakc7QUFPRix1REFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQVBFO0FBRk4saUJBREY7QUFjSDtBQUdKOzs7eUNBR2lCO0FBQ1osaUJBQUtFLFFBQUwsQ0FBYyxFQUFDWCxNQUFNLFFBQVAsRUFBZDtBQUNMOzs7aUNBRVNZLEssRUFBTztBQUNiLGlCQUFLRCxRQUFMLENBQWM7QUFDVlYsdUJBQU9XLE1BQU1DLE1BQU4sQ0FBYUM7QUFEVixhQUFkO0FBR0g7OztvQ0FFWUYsSyxFQUFPO0FBQ2hCLGlCQUFLRCxRQUFMLENBQWM7QUFDVlQsc0JBQU1VLE1BQU1DLE1BQU4sQ0FBYUM7QUFEVCxhQUFkO0FBR0g7OztvQ0FFV0YsSyxFQUFPO0FBQ2YsaUJBQUtELFFBQUwsQ0FBYztBQUNWUiwwQkFBVVMsTUFBTUMsTUFBTixDQUFhQztBQURiLGFBQWQ7QUFHSDs7O2lDQUVRRixLLEVBQU87O0FBRVpHLGtCQUFNLEdBQU47QUFDQUMsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLbEIsS0FBakI7O0FBRUFtQixrQkFBTUMsSUFBTixDQUFXLE9BQVgsRUFBb0IsS0FBS3BCLEtBQXpCLEVBQ0NxQixJQURELENBQ00sVUFBQ0MsR0FBRCxFQUFPO0FBQ1RMLHdCQUFRQyxHQUFSLENBQVlJLEdBQVo7QUFDSCxhQUhELEVBSUNDLEtBSkQsQ0FJTyxVQUFDQyxHQUFELEVBQVM7QUFDWlAsd0JBQVFDLEdBQVIsQ0FBWU0sR0FBWjtBQUNILGFBTkQ7QUFPQVgsa0JBQU1ZLGNBQU47QUFFSDs7OztFQXJGa0JDLE1BQU1DLFM7O0FBNEY3QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxRQUFELE9BQWhCLEVBQThCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQTlCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgcGFnZTogXCJNYWluXCIsXG4gICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICBwYXNzd29yZDogXCJcIlxuICAgICAgICB9OyBcblxuICAgICAgICB0aGlzLnNob3dTaWduVXBGb3JtID0gdGhpcy5zaG93U2lnblVwRm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldEVtYWlsID0gdGhpcy5zZXRFbWFpbC5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5zZXRVc2VybmFtZSA9IHRoaXMuc2V0VXNlcm5hbWUuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuc2VuZERhdGEgPSB0aGlzLnNlbmREYXRhLmJpbmQodGhpcyk7IFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLnN0YXRlLnBhZ2U7XG5cbiAgICAgICAgaWYgKHBhZ2UgPT09IFwiTWFpblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5CdXkgdGhlIFRoaW5nPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9Pnt0aGlzLnNob3dTaWduVXBGb3JtKCl9fT5CdXk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFnZSA9PT0gXCJTaWduVXBcIikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+U2lnbiBVcDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4geyB0aGlzLnNlbmREYXRhKGUpIH19PlxuICAgICAgICAgICAgICAgICAgICBFbWFpbDxici8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuc2V0RW1haWwoZSkgfX0+PC9pbnB1dD48YnIvPlxuICAgICAgICAgICAgICAgICAgICBVc2VybmFtZTxici8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnNldFVzZXJuYW1lKGUpIH19PjwvaW5wdXQ+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ8YnIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuc2V0UGFzc3dvcmQoZSkgfX0+PC9pbnB1dD48YnIvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuIFxuICAgIH1cblxuXG4gICAgc2hvd1NpZ25VcEZvcm0gKCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BhZ2U6IFwiU2lnblVwXCJ9KTtcbiAgICB9XG5cbiAgICBzZXRFbWFpbCAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNldFVzZXJuYW1lIChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBzZXRQYXNzd29yZChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZW5kRGF0YShldmVudCkge1xuXG4gICAgICAgIGFsZXJ0KCchJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICBcbiAgICAgICAgYXhpb3MucG9zdCgnL3VzZXInLCB0aGlzLnN0YXRlKVxuICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfVxuXG5cbiAgXG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxIb21lUGFnZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyJdfQ==