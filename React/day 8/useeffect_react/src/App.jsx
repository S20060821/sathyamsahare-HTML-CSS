import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(true);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
        setError("Error while loading the data");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  console.log(loading, error, data);
  if (error) return <h1>{error}</h1>;
  if (loading) return <p>Loading....</p>;
  return (
    <>
      {data.map((d) => (
        <li key={data.id}>
          {d.name} - {d.email}
        </li>
      ))}
    </>
  );
}

export default App;
