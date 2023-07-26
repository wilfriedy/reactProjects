import { cardsTypeData } from "../../data-cards-type";
import './Section-1.css';
import List from "./List";
function Section1() {
  return (
    <div className="cards-container section-container">
      {cardsTypeData.map((data, id) => (
        <List key={id} title={data.type} txt={data.details} />
      ))}
    </div>
  );
}

export default Section1;
