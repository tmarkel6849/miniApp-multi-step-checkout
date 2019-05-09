class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: HomePage
    }
    this.data = {
      name: null,
      email: null,
      password: null,
      address: null,
      city: null,
      state: null,
      zipcode: null,
      phoneNumber: null,
      creditCard: null,
      expirationDate: null,
      csv: null,
      billingZip: null
    }
    this.idx = 0;
    this.forms = [FormOne, FormTwo, FormThree, EndGame];
    this.changForm = this.changForm.bind(this);
    this.updateData = this.updateData.bind(this);
    this.sendData = this.sendData.bind(this);

  }
  changForm () {
    this.setState({
      currentForm: this.forms[this.idx]
    })
    this.idx = this.idx + 1;
  }

  updateData(id, val) {
    this.data[id] = val;
    console.log(this.data[id]);
  }

  sendData () {

    fetch('POST', this.data)
      .then()
  }

  render () {
    return (
      <div>
        <div>
          <this.state.currentForm changeForm={this.changForm} updateData={this.updateData}/>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

var HomePage = (props) => (
  <div>
    <h3>Welcome to the shopping experience of your life!</h3>
    <button onClick={props.changeForm}>Click here to begin!</button>
  </div>
)

var FormOne = (props) => (
  <div>
      <form action="/forms" method="POST" enctype="text/plain">
        <label for="name"><i class="name"></i> Full Name</label>
        <input type="text" id="name" name="name" onChange={()=>{props.updateData('name', document.getElementById('name').value)}}/>
        <label for="email"><i class="email"></i> Email</label>
        <input type="text" id="email" name="email" onChange={()=>{props.updateData('email', document.getElementById('email').value)}} />
        <label for="password"><i class="password"></i> Password</label>
        <input type="text" id="password" name="password" onChange={()=>{props.updateData('password', document.getElementById('password').value)}} />
        <button type="submit" onClick={props.changeForm}>Submit</button>
      </form>
    </div>
)
var FormTwo = (props) => (
  <div>
      <form action="/forms" method="POST" enctype="text/plain">
        <label for="adress"><i class="address"></i> Address</label>
        <input type="text" id="address" name="address" onChange={()=>{props.updateData('address', document.getElementById('address').value)}}/>
        <label for="email"><i class="city"></i> City</label>
        <input type="text" id="city" name="city" onChange={()=>{props.updateData('city', document.getElementById('city').value)}} />
        <label for="adr"><i class="city"></i> State</label>
        <input type="text" id="state" name="state" onChange={()=>{props.updateData('state', document.getElementById('state').value)}} />
        <label for="city"><i class="zipcode"></i> Zipcode</label>
        <input type="text" id="zipcode" name="zipcode" onChange={()=>{props.updateData('zipcode', document.getElementById('zipcode').value)}} />
        <button type="submit" onClick={props.changeForm}>Submit</button>
      </form>
    </div>
)

var FormThree = (props) => (
  <div>
      <form action="/forms" method="POST" enctype="text/plain">
        <label for="creditCard"><i class="fa fa-user"></i> Credit Card</label>
        <input type="text" id="creditCard" name="Credit Card" onChange={()=>{props.updateData('creditCard', document.getElementById('creditCard').value)}}/>
        <label for="expirationDate"><i class="fa fa-envelope"></i> Expiration Data</label>
        <input type="text" id="expirationData" name="expiration" onChange={()=>{props.updateData('expirationDate', document.getElementById('expirationDate').value)}} />
        <label for="csv"><i class="fa fa-address-card-o"></i> CSV</label>
        <input type="text" id="csv" name="csv" onChange={()=>{props.updateData('csv', document.getElementById('csv').value)}} />
        <label for="billingZip"><i class="fa fa-institution"></i> Billing Zipcode</label>
        <input type="text" id="billingZip" name="billingzip" onChange={()=>{props.updateData('billingZip', document.getElementById('billingZip').value)}}/>
        <button type="submit" onClick={props.changeForm} onClick={props.sendData}>Submit</button>
      </form>
    </div>
)

const EndGame = (props) => (
  <div>
    <h3>Have a miraculous day!</h3>
  </div>
)

ReactDOM.render(<App /> , document.getElementById('app'));