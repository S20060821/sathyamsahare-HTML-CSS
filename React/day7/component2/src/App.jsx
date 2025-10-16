import "./App.css";
import Button2 from "./component3/Button2";
import Form2 from "./component3/Form2";
import Ordered from "./component3/Ordered";
import Unorderd from "./component3/Unorderd";

function App() {
  return (
    <>
      <h1>hii</h1>
      <Form2 text={"hii"} value={34} />
      <Button2/>
      <Ordered/>
      <Unorderd/>
    </>
  );
}

export default App;
