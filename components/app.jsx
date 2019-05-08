class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: FormOne
    }
    this.idx = 0;
    this.forms = [FormTwo, FormThree];
    this.changForm = this.changForm.bind(this);
  }
  changForm () {
    this.setState({
      currentForm: this.forms[this.idx]
    })
    this.idx = this.idx + 1;
    console.log(this.idx);
  }


  render () {
    return (
      <div>
        <div>
          <this.state.currentForm changeForm={this.changForm}/>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

var FormOne = (props) => (
  <div>
      <form action="/forms" method="POST" enctype="text/plain">
        <label for="fname"><i class="name"></i> Full Name</label>
        <input type="text" id="fname" name="name" />
        <label for="email"><i class="email"></i> Email</label>
        <input type="text" id="email" name="email"  />
        <label for="adr"><i class="password"></i> Password</label>
        <input type="text" id="adr" name="password"  />
        <button type="submit" onClick={props.changeForm}>Submit</button>
      </form>
    </div>
)
var FormTwo = (props) => (
  <div>
      <form action="/forms" method="POST" enctype="text/plain">
        <label for="fname"><i class="address"></i> Address</label>
        <input type="text" id="fname" name="address" />
        <label for="email"><i class="city"></i> City</label>
        <input type="text" id="email" name="city"  />
        <label for="adr"><i class="city"></i> State</label>
        <input type="text" id="state" name="state"  />
        <label for="city"><i class="zipcode"></i> Zipcode</label>
        <input type="text" id="zip" name="zipcode" />
        <button type="submit" onClick={props.changeForm}>Submit</button>
      </form>
    </div>
)

var FormThree = (props) => (
  <div>
      <form action="/forms" method="POST" enctype="text/plain">
        <label for="fname"><i class="fa fa-user"></i> Credit Card</label>
        <input type="text" id="fname" name="Credit Card" />
        <label for="email"><i class="fa fa-envelope"></i> Expiration Data</label>
        <input type="text" id="email" name="expiration"  />
        <label for="adr"><i class="fa fa-address-card-o"></i> CSV</label>
        <input type="text" id="adr" name="csv"  />
        <label for="city"><i class="fa fa-institution"></i> Billing Zipcode</label>
        <input type="text" id="city" name="billingzip" />
        <button type="submit">Submit</button>
      </form>
    </div>
)

ReactDOM.render(<App /> , document.getElementById('app'));