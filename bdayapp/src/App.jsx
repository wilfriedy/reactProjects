import { useState } from "react";
import { data } from "./data";
import List from "./Components/List";
const App = () => {
  const [userData, setUserData] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{(userData ?? []).length} birthdays today</h3>
        <List people={userData} />
        <button className="btn btn-block" onClick={() => setUserData([])}>
          Clear list
        </button>
      </section>
    </main>
  );
};
export default App;
