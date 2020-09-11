import React, { useState, useEffect } from "react";
import "../styles/Properties.css";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
// import { GiFamilyHouse } from "react-icons/gi";

const Properties = () => {
  // const initialState = {
  //   properties: [],
  // };

  // const [properties, setProperties] = useState(initialState.properties);

  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:4000/api/v1/PropertyListing")
        .then(({ data }) => {
          setProperties(data);
        })
        .catch((error) => {
          // Response status codes will only be 404 or 500
          if (error.response.status === 404) {
            setAlert("Page not found.");
          } else if (error.response.status === 500) {
            setAlert("Server error. Please try again later.");
          } else {
            // client never received a response, or request never left,
            // basically anything else.
            console.log(error.message);
            setAlert("Whoops, something has gone wrong...");
          }
        });
    }

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>

      <div className="Properties">
        {properties.map((property) => (
          <div className="item">
            <PropertyCard key={property._id} {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
