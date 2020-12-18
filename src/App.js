import { Component } from "react"
import Card from "./components/Card"
import Search from "./components/Searchbar"

class App extends Component {

  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  onSearchChange = (e) => {
    console.log(e.target.value);    
    this.setState({searchField: e.target.value});
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  render(){

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      <div className="container-fluid text-center p-5">
  
        <h1 className="text-white">RoboFriends</h1>
  
        <Search searchChange={this.onSearchChange}/>
  
        <div className="row w-75 mx-auto">
          {
            filteredRobots.map(monster => {
              return (
                <Card key={monster.id} name={monster.name} email={monster.email}/>
              )
            })
          }        
        </div>   
  
      </div>
    );
  }  
}

export default App;
