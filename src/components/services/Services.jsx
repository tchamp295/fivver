// Services.js
import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/utils/data";

const Services = () => {

  return (
    <div className="mx-auto px-3 py-12 max-w-5xl">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-orange-100 text-orange-800">
            Our Services
          </p>
        </div>
        <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
          What Solutions We Provide to Our Valued Customers.
        </h2>
       
      </div>
      <div className="grid gap-8 sm:grid-cols-2 ">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
