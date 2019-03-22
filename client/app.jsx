
class HomePage extends React.Component {
    constructor (props){
        super(props);
        this.state = {
           page: "Main",
           email: "",
           name: "",
           password: ""
        }; 

        this.showSignUpForm = this.showSignUpForm.bind(this);
        this.setEmail = this.setEmail.bind(this); 
        this.setUsername = this.setUsername.bind(this); 
        this.sendData = this.sendData.bind(this); 
    }

    render() {
        let page = this.state.page;

        if (page === "Main") {
            return (
                <div>
                    <h3>Buy the Thing</h3>
                    <button onClick={() =>{this.showSignUpForm()}}>Buy</button>
                </div>
            );
        }

        if (page === "SignUp") {
            return (
              <div>
                <h3>Sign Up</h3>
                    <form onSubmit={(e) => { this.sendData(e) }}>
                    Email<br/>
                  <input type="text" value={this.state.email} onChange={(e) => { this.setEmail(e) }}></input><br/>
                    Username<br/>
                    <input type="text" value={this.state.name} onChange={(e) => { this.setUsername(e) }}></input><br/>
                    Password<br/>
                    <input type="text" value={this.state.password} onChange={(e) => { this.setPassword(e) }}></input><br/>
                  <input type="submit" value="Submit"></input>
                </form>
              </div>
            );
        }

 
    }


    showSignUpForm () {
          this.setState({page: "SignUp"});
    }

    setEmail (event) {
        this.setState({
            email: event.target.value,
        })
    }

    setUsername (event) {
        this.setState({
            name: event.target.value
        })
    }
    
    setPassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    sendData(event) {

        alert('!');
        console.log(this.state);
        
        axios.post('/user', this.state)
        .then((res)=>{
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
        event.preventDefault();

    }


  
}


ReactDOM.render(<HomePage />, document.getElementById("app"));