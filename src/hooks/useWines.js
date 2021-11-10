import { useEffect, useState } from "react";

// Creating useWines function for using in different places
const useWines = () => {
    //Calling State for fetching packages data
    const [wines, setWines] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/wines')
            .then(res => res.json())
            .then(data => setWines(data));
    }, []);

    // Return products for destructuring to other components
    return { wines, setWines };
}

export default useWines;