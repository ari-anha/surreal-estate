import React, { useState } from "react";
import "../styles/AddProperty.css";
// import { GiFamilyHouse } from "react-icons/gi";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
    // console.log(fields);
  };

  return (
    <div className="addProperty">
      <h2>Add a property page</h2>
      <p>Here we will be able to add new property information.</p>
      <form onSubmit={handleAddProperty}>
        <div>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Leeds">Leeds</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Manchester">Manchester</option>
              <option value="Sheffield">Sheffield</option>
              <option value="York">York</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="type">
            Type
            <select
              id="type"
              name="Type"
              value={fields.Type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="bedrooms">
            Number of Bedrooms
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              min="0"
              max="20"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="bathrooms">
            Number of Bathrooms
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              min="0"
              max="20"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              max="99999999999999"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            E-mail
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
