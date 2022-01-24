import TextList from "./components/TextList";
import Error from "./components/Error";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState, useEffect } from "react";
import "./App.css";

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);

function App() {
  const [text, setText] = useState("contoh");
  const [results, setResults] = useState([]);
  const [err, setErr] = useState(false);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  async function fetchData() {
    let res = await giphy.animate(text, { limit: 9, offset: 25 });
    setResults(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    if (text.length === 0) {
      //set error state to true
      setErr(true);
      return;
    }

    const apiCall = async () => {
      let res = await giphy.animate(text, { limit: 9, offset: 25 });
      setResults(res.data);
    };

    apiCall();
    //change error state back to false
    setText("");
    setErr(false);
  };

  return (
    <div className="App">
      <div className="container mx-auto">
        <h1 className="mt-10">GIPHY API</h1>

        <div>
          <div className="mb-4 flex justify-center items-center">
            <div className="relative">
              <div>
                {" "}
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
              </div>{" "}
              <input
                type="text"
                value={text}
                className="border-2 h-14 xs:w-28 md:w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                placeholder="Search anything..."
                onChange={handleInput}
              />
              <div className="absolute top-2 right-2">
                {" "}
                <button
                  className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
                  onClickCapture={handleSubmit}
                >
                  Search
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
        <Error isError={err} text="Masukkan Minimal 1 Huruf !!!" />
        <TextList gifs={results} />
      </div>
    </div>
  );
}
export default App;
