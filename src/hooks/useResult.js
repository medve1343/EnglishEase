import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
  
    const searchApi = async (searchTerm) => {
      try {
        const response = await yelp.get("/search", {
          params: {
            limit: 50,
            term,
            location: "san jose",
          },
        });
        setResults(response.data.businesses);
      } catch (err) {
        setErrorMessage("Something went wrong");
      }
    };
  
    // Call Api first when its rendered for the first time.
    useEffect(() => {
      searchApi("pasta");
    }, []);
    return [searchApi, results, errorMessage];
};
