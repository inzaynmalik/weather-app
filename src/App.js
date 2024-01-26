import "./App.css";
import Card from "./components/Card";
import { useSelector } from "react-redux";

function App() {
  const userData = useSelector((state) => state.data);

  const cards = userData.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        name={item.name}
        email={item.email}
        phone={item.phone}
        website={item.website}
      />
    );
  });
  return (
    <div className="App">
      <div className="cards">{cards}</div>
    </div>
  );
}

export default App;
