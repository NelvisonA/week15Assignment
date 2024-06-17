import './App.css';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import HouseServices from './services/HouseServices';
import HousesContainer from './components/HousesContainer';
import AddHouse from './components/AddHouse';


let service = new HouseServices();

function App() {

  const [houses, setHouses] = useState([])

  useEffect(() => {

   service.allHouses().then(houses => {

    setHouses(houses);

  })
}, []);

function handleDelete (house, e) {

  if(house) {

    service.deleteHouse(house)

  }

}
  

  return (
    <div className="App">

      <Nav />

    <br></br>

      <HousesContainer houses={ houses } onDelete={ handleDelete }/>

    <br></br>

    <AddHouse />

    </div>
  );
}

export default App;
