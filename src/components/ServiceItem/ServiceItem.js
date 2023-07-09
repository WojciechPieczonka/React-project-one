import "./ServiceItem.css";

const ServiceItem = ({ name, isNew }) => {
  return (
    <div className="service">
      {name}
      {isNew && (
        <>
          <p>(nowość)</p> <div className="dot"></div>
        </>
      )}
    </div>
  );
};

export default ServiceItem;
