

export default function HousesContainer (props) {

let houses = props.houses || [];

let row = houses.map((house, index) => {

    function handleDelete(e) {

        if(props.onDelete) {

            let closest = e.target.closest('tr');
            console.log(closest)


            if(closest) {

                let closestHouse = closest.dataset.house;
    
                if(closestHouse) {

                    props.onDelete(house.id);
                }
            };
        };
    };

    return(

        <tr key={ house.id } data-house={ house.id }>
            <td>{ house.id }</td>
            <td>{ house.room }</td>
            <td> <button onClick={ handleDelete } type='button' className="btn btn-danger"> 🗑️ </button> </td>
        </tr>

    )

});


return(

    <div className="container">

        <table className="table table-hover">
            <thead>
                <tr>
                    <th>House id</th>
                    <th>Room</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
        </table>

    </div>
    


);

};