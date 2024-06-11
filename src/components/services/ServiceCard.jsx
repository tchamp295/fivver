import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="card w-full bg-base-200 shadow-sm">
      <div className="flex justify-center mt-4">
        <div className="bg-indigo-400 rounded-full p-4">
          {service.icon}
        </div>
      </div>
      <div className="card-body text-center">
        <h2 className="card-title justify-center text-2xl font-semibold mb-2">
          {service.name}
        </h2>
        <p className="text-gray-700 mb-4">{service.desc}</p>
       
      </div>
    </div>
  );
};

export default ServiceCard;
