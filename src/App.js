import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class App extends Component {
  constructor() {
      super()
      this.state = {
      data : []
      }
  }
  
  componentDidMount() {
      fetch('https://ghibliapi.herokuapp.com/vehicles')
          .then(response => response.json())
          .then(response => {
          this.setState({
            data: response
  
          })
          
        })

      }
  render() {
  return(
    <div>
      {this.state.data.map((value ,key) => (
  <Card>
    <Card.Img variant="top" src="https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583" />
    <Card.Body>
      <Card.Title>{value.name}</Card.Title>
      <Card.Text>
       {value.description}
      </Card.Text>
      {value.vehicle_class}
    </Card.Body>
    
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
    

    ))}

    </div>
  );
}
}
export default App;
// import React from 'react';
// // import logo from '/logo.svg'
// import './App.css';
// import Nav from './Nav';
// import About from './About';
// import Shop from './Shop';
// // import Cards from './Cards';
// // import Card from 'react-bootstrap/Card'
// // import CardGroup from 'react-bootstrap/CardGroup'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// class App extends component {
//   constructor() {
//     super()
//     this.state = {}
//   }

//   componentDidMount() {
//     fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
//         .then(response => response.json())
//         .then(data => console.log(data))
//   }


//   return(
  
//     <Router>
//     <div className="App">
//       <Nav />
//       <Switch>
//       <Route path="/" exact component={Home} />
//       <Route path="/about" component={About}/>
//       <Route path="/shop" component={Shop}/>
//       {/* <Route path="/cards" component={Cards}/> */}
//       </Switch>
//       </div>
//       </Router>
//   );
// }

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
//   </div>
// );

// export default App;


