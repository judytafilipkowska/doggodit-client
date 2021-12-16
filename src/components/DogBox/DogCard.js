import { useState, useEffect } from "react";
import dogService from "../../services/dog.service";
import DogCard from "./DogCard";
import axios from "axios";

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


    function DogCard({ data }) {
        return (
            <div>
                <h6>{data.name}</h6>
                <img src={data.image.url} alt="dog pic" />
                <h6>Temperament:</h6><p>{data.temperament}</p>
                <h6>Origin:</h6><p>{data.origin}</p>
                <p>{data.bred_for}"</p>
            </div>
        );
    }
}

export default DogCard;