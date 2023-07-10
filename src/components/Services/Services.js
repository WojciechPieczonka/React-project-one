import "./Services.css";
import ServiceItem from "../ServiceItem/ServiceItem";

const offers = [
  {
    name: "Usługa 1",
    isNew: true,
  },
  {
    name: "Usługa 2",
    isNew: false,
  },
  {
    name: "Usługa 3",
    isNew: false,
  },
  {
    name: "Usługa 4",
    isNew: false,
  },
  {
    name: "Usługa 5",
    isNew: false,
  },
  {
    name: "Usługa 6",
    isNew: false,
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="services-header">Czym zajmuje sie nasza firma?</h2>
        <div className="service-container">
          {offers.map((offer, index) => (
            <ServiceItem
              name={offer.name}
              isNew={offer.isNew}
              key={index}
            ></ServiceItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
