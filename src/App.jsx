import { useEffect, useState } from "react";
import { filterData } from "./Components/data";
import { apiUrl } from "./Components/data";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";

export default function App() {
  const [title, setTitle] = useState("All");
  const [id, setId] = useState(1);
  const api = apiUrl;
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    callApi(id, title);
  }, [title]);

  function clickHandler(content, contentName) {
    callApi(content, contentName);
    setTitle(contentName);
    setId(content);
  }

  async function callApi(content, title) {
    const response = await fetch(api);
    const responseData = await response.json();

    if (title === "All") {
      const allCards = Object.values(responseData.data).flat();
      // console.log("all : ", allCards);
      setCardData(allCards);
    } else {
      const categoryData = responseData.data[title];
      setCardData(categoryData);
    }
  }

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-[#4A4E69]">
      {/* Heading */}
      <div className="w-screen h-auto bg-[#22223B] p-4 text-white text-center text-2xl font-bold">
        <h1>Top Courses</h1>
      </div>

      {/* Nav */}
      <nav className="w-screen p-3 flex justify-center">
        <NavBar filterData={filterData} clickHandler={clickHandler}></NavBar>
      </nav>

      {/* Card */}
      <Card responseData={cardData}></Card>
    </div>
  );
}
