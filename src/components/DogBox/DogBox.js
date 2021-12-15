import { useState, useEffect } from "react";
import dogService from "../../services/dog.service";
import DogCard from "./DogCard";

function DogBox() {

    const [dogs, setDogs] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);

    const getAllDogs = async () => {
        try {
            const response = await dogService.getAllDogs();
            setDogs(response);
        } catch (error) {

        }
    }

    useEffect(() => {
        getAllDogs()
    })
    return (
        <div>
            <h6>{dogs.name}</h6>
            <img src={dogs.image.url} alt="dog-pic" />
        </div>
    );
}

export default DogBox;