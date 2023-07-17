import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const [hotels, setHotels] = useState([
    { id: 1, name: "Hotel Inn", price: 10000 },
    { id: 2, name: "Park Inn", price: 30000 },
    { id: 3, name: "Hyatt", price: 20000 },
    { id: 4, name: "Bloom Boutique", price: 110000 },
    { id: 5, name: "Marriott", price: 50000 },
    { id: 6, name: "Hilton", price: 104000 },
    { id: 7, name: "Radisson", price: 1530000 },
    { id: 8, name: "Trident", price: 420000 },
    { id: 9, name: "Flute", price: 90000 },
  ]);

  const onSortByPriceAsc = () => {
    const sortedHotels = [...hotels].sort((a, b) => a.price - b.price);
    setHotels(sortedHotels);
  };

  const onSortByPriceDec = () => {
    const sortedHotels = [...hotels].sort((a, b) => b.price - a.price);
    setHotels(sortedHotels);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <button className="lowToHigh" onClick={onSortByPriceAsc}>
              Low to High
            </button>
            <button className="highToLow" onClick={onSortByPriceDec}>
              High to Low
            </button>
          </div>
          <div className="listResult">
            {hotels.map((data) => (
              <SearchItem key={data.id} name={data.name} price={data.price} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
