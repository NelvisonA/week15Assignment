import { useState } from "react";

export default function AddHouse () {


        const baseUrl = 'https://664f8270ec9b4a4a602f0991.mockapi.io/api/Houses/Houses';

        const [inputVal, setInputVal] = useState("");

        const [inputRoomVal, setInputRoomVal] = useState("");

        const handleInputChange = (e) => {

            setInputVal( e.target.value );

        };

        const handleRoomInputChange = (e) => {

            setInputRoomVal(e.target.value);

        }

        let houseId = inputVal;

        let roomName = inputRoomVal;

        const handleButtonClick = async (e) => {

            e.preventDefault();

        try {

            const res =  await fetch(baseUrl, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    room: roomName,
                    id: houseId
                })

             })

        } catch (error) {

            console.log('Error')

        }};

    return(

        <div className="container form-container m-0 ">

                <h4>Add a House</h4>
                <form className="input-group">
                    <input className="form-control mr-sm-2" value={ inputVal } type="text"  onChange={handleInputChange} placeholder="house id" aria-label="houseId"></input>
                    <input className="form-control mr-sm-2" value={ inputRoomVal } type="text" onChange={ handleRoomInputChange } placeholder="Room Name" aria-label="roomName"></input>
                    <button className="btn btn-primary my-2 my-sm-0" onClick={ handleButtonClick } type="submit">Submit</button>
                </form>
                </div>
    )

}