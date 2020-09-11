import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

import { GiFamilyHouse } from "react-icons/gi";
import { FaBed, FaBath } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <h2 className="icon">
        <GiFamilyHouse />
      </h2>
      <h3 className="title" data-testid="title-id">
        {title}
      </h3>

      <h4 className="type-city" data-testid="type-city-id">
        {type} - {city}
      </h4>
      <h4 className="bathrooms" data-testid="bathrooms-id">
        <FaBath /> Bathrooms: {bathrooms}
      </h4>
      <h4 className="bedrooms" data-testid="bedrooms-id">
        <FaBed /> Bedrooms: {bedrooms}
      </h4>
      <h4 className="price" data-testid="price-id">
        £{price}
      </h4>
      <button className="emailbutton" data-testid="emailbutton-id">
        <a href={`mailto:${email}`}>
          <FiMail />
          Send email
        </a>
      </button>
    </div>
  );
};

export default PropertyCard;
