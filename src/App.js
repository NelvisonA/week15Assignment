import './App.css';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import HouseServices from './services/HouseServices';
import HousesContainer from './components/HousesContainer';
import AddHouse from './components/AddHouse';


let service = new HouseServices();

function App() {

  const [houses, setHouses] = useState([]);

  function reload() {

    service.allHouses().then(houses => {
      setHouses(houses);
    });
  }

  useEffect(() => {
    reload();
}, []);

function handleDelete (house, e) {

  if(house) {
    service.deleteHouse(house).then(() => {
      let remainingHouses = houses.filter((h, index) => h.id !== house);
      setHouses(remainingHouses);
    });
  };
}

  function handleHouseAdded(house, e) {
    if(house) {
      service.addHouse(house.id, house.room).then(() => {
        reload();
      });
    };
  }

  return (
    <div className="App">

      <Nav />

    <br></br>

      <HousesContainer houses={ houses } onDelete={ handleDelete }/>

    <br></br>

    <AddHouse onAdded= { handleHouseAdded }/>

    </div>
  );
}

export default App;
