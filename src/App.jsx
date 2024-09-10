import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [showModel, setShowModel] = useState(false);
  const today = new Date().toDateString();
  const localKey = `NASA-${today}`;
  const [data, setData] = useState(() => {
    if (localStorage.getItem(localKey)) {
      const apiData = JSON.parse(localStorage.getItem(localKey));
      return apiData;
    } else {
      return "";
    }
  });

  function handleShowModel() {
    setShowModel((pre) => !pre);
    console.log({ showModel });
  }

  useEffect(() => {
    async function fetchApi() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      localStorage.clear();

      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        localStorage.setItem(localKey, JSON.stringify(data));
        setData(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchApi();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModel && <Sidebar data={data} handleShowModel={handleShowModel} />}
      {data && <Footer data={data} handleShowModel={handleShowModel} />}
    </>
  );
}

export default App;
