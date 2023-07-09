import "./Employees.css";
import Worker from "../Worker/Worker";

const Employees = () => {
  return (
    <section className="specialists" id="specialists">
      <div className="container">
        <h2 className="header-h2">Nasi specialiści</h2>
        <div className="worker">
          <div className="worker-photo"></div>
          <div className="wraper">
            <h3 className="worker-name">Imię Nazwisko [ dział ]</h3>
            <p className="worker-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              consectetur assumenda error tempora voluptatem fugiat
              necessitatibus maiores nesciunt, deserunt eveniet excepturi esse
              dolor quas non totam expedita voluptas natus quos.
            </p>
          </div>
        </div>
        <div className="worker">
          <div className="worker-photo"></div>
          <div className="wraper">
            <h3 className="worker-name">Imię Nazwisko [ dział ]</h3>
            <p className="worker-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias et
              neque error facere quae quis aut quod? Facere quis incidunt
              suscipit, nemo ea dolorum id, nihil laudantium iure quam vero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Employees;
