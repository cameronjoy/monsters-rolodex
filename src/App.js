import {Component} from 'react';
import CardList from './components/card-list/cardList';
import SearchBox from './components/search-box/SearchBox';

import './App.css';

const App = () => {

  return( 
  <div className="App">
  <h1 className='app-title'>Monsters Rolodex</h1>
   {/* <SearchBox 
  onChangeHandler={this.onSearchChange} 
  placeholder='search monsters'
  className='monsters-search-box'
  />

  <CardList className='card-list' monsters={filteredMonsters}/> */}
</div>
)
}

// class App extends Component{
//   constructor(){
//     super();
     
//     this.state = {
//       monsters:[],
//       searchField: '',
//     }

//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users}
//       },
//       ))
//   }

//   onSearchChange = (event) => {
    
//     const searchField = event.target.value.toLocaleLowerCase()
    
//     this.setState(() => {
//       return { searchField }
//     })
//   }


//   render() {

//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField)
//    })
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         {/* <input className='search-box' type='search' placeholder='search monsters'
//           onChange={this.onSearchChange}  
//         /> */}
//         <SearchBox onChangeHandler={this.onSearchChange} 
//         placeholder='search monsters'
//         className='monsters-search-box'
//         />
//         {/* {filteredMonsters.map((monster) => {
//           return <div key={monster.id}>
//             <h1>{monster.name}</h1>
//             </div>
//         })} */}

//         <CardList className='card-list' monsters={filteredMonsters}/>
//       </div>
//     );

//   }
// }


export default App;
