import { useState } from "react";
import HouseServices from "../services/HouseServices";

const services = new HouseServices;

export default function AddHouse (props) {

        const [houseId, setHouseId] = useState("");
        const [roomName, setRoomName] = useState("");
        
        const handleInputChange = (e) => {
            setHouseId( e.target.value );
        };

        const handleRoomInputChange = (e) => {
            setRoomName(e.target.value);
        };

        const handleButtonClick = (e) => {

            e.preventDefault();

            if(props.onAdded) {
                props.onAdded({
                    id: parseInt(houseId, 10), 
                    room: roomName,
                }, e);
            };
        };

    return(

        <div className="container form-container m-0 ">

                <h4>Add a House</h4>
                <form className="input-group">
                    <input className="form-control mr-sm-2" value={ houseId } type="text"  onChange={handleInputChange} placeholder="house id" aria-label="houseId"></input>
                    <input className="form-control mr-sm-2" value={ roomName } type="text" onChange={ handleRoomInputChange } placeholder="Room Name" aria-label="roomName"></input>
                    <button className="btn btn-primary my-2 my-sm-0" onClick={ handleButtonClick } type="submit">Submit</button>
                </form>
                </div>
    )

}