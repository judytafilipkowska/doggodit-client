import { useState, useEffect } from "react";
import dogService from "../../services/dog.service";

function DogBox() {


    const [dogs, setDogs] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);

    const getAllDogs = async () => {
        try {
            const response = await dogService.getAllDogs();
            setDogs(response.data);
        } catch (error) {
            setErrorMessage("Something went wrong");
        }
    }

    useEffect(() => {
        getAllDogs();
    }, []);

    return (
        <div>
            {dogs.length && dogs.map((dog) => (
                <div key={dog.id}>
                    <h6>{dog.name}</h6>
                    <img src={dog.image.url} alt="dog-pic" style={{ width: "150px" }} />
                </div>
            ))}

        </div>
    );
}

export default DogBox;