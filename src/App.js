import React, { useState } from "react";
import "./styles.css";

var foodSpots = [
  {
    name: "Social",
    place: "Sector-7",
    rating: "5/5"
  },
  {
    name: "Beach n Brews",
    place: "Sector-26",
    rating: "4.7/5"
  },
  {
    name: "Indian Coffee House",
    place: "Sector-17",
    rating: "4.6/5"
  },
  {
    name: "Virgin Courtyard",
    place: "Sector-7",
    rating: "4.5/5"
  },
  {
    name: "Four Folks",
    place: "Sector-35",
    rating: "4.4/5"
  },
  {
    name: "Pal Dhaba",
    place: "Sector-28",
    rating: "4.2/5"
  }
];

var touristSpots = [
  {
    name: "Rock Garden",
    place: "Sector-1",
    rating: "4.7/5"
  },
  {
    name: "Sukhna Lake",
    place: "Sector-1",
    rating: "4.5/5"
  },
  {
    name: "Japanese Garden",
    place: "Sector-32",
    rating: "4.3/5"
  },
  {
    name: "Rose Garden",
    place: "Sector-16",
    rating: "4.2/5"
  },
  {
    name: "Chhatbir Zoo",
    place: "Zirakpur",
    rating: "4.4/5"
  },
  {
    name: "Pinjore Garden",
    place: "Pinjore",
    rating: "4.4/5"
  },
  {
    name: "New Lake",
    place: "Sector-42",
    rating: "4.2/5"
  }
];

var shopping = [
  {
    name: "Elante Mall",
    place: "Industrial Area Phase-1(near sector-29)",
    rating: "5/5"
  },
  {
    name: "Sector-17 Plaza",
    place: "Sector-17",
    rating: "4.6/5"
  },
  {
    name: "Palika Bazaar",
    place: "Sector-19",
    rating: "4.0/5"
  },
  {
    name: "22 Market",
    place: "Sector-22",
    rating: "4.2/5"
  },
  {
    name: "15 Market",
    place: "Sector-15",
    rating: "4.1/5"
  },
  {
    name: "Krishna Market",
    place: "Sector-41",
    rating: "4.1/5"
  }
];
var nightlife = [
  {
    name: "CowBoy Rodeo",
    place: "Sector-9",
    rating: "4.7/5"
  },
  {
    name: "BoomBox Cafe",
    place: "Sector-9",
    rating: "4.5/5"
  },
  {
    name: "Pyro Lounge",
    place: "Sector-34",
    rating: "4.5/5"
  },
  {
    name: "The Horseshoe Bar Exchange",
    place: "Ind. Area Phase-1",
    rating: "4.8/5"
  }
];

var allSpots = { foodSpots, touristSpots, shopping, nightlife };

export default function App() {
  const [menuType, setMenuType] = useState("foodSpots");

  function foodInputHandler(menuTypeCall) {
    setMenuType(menuTypeCall);
  }

  const suffixLines = {
    foodSpots: "Ready to Dine in",
    touristSpots: "Must visit spots",
    shopping: "Shop with Swag at",
    nightlife: "Grab Your bae and head to these gorgeous Looking Brewpubs"
  };

  return (
    <div className="App">
      <div className="bg-warning">
        <h1 className="heading display-4">
          explore{" "}
          <span style={{ color: "teal", fontSize: "1.2em", fontWeight: "600" }}>
            chandigarh
          </span>
        </h1>
        <ul className="menu">
          <li key="foodSpots" onClick={() => foodInputHandler("foodSpots")}>
            <button
              type="button"
              className="btn 
        btn-outline-primary"
            >
              {" "}
              Food spots
            </button>
          </li>
          <li onClick={() => foodInputHandler("touristSpots")}>
            <button type="button" className="btn btn-outline-primary">
              Tourist Spots
            </button>
          </li>
          <li onClick={() => foodInputHandler("shopping")}>
            <button type="button" className="btn btn-outline-primary">
              Shopping
            </button>
          </li>
          <li onClick={() => foodInputHandler("nightlife")}>
            <button type="button" className="btn btn-outline-primary">
              Nightlife
            </button>
          </li>
        </ul>
        <hr />
      </div>
      <h4 className="showMeaning text-black-50">{suffixLines[menuType]}</h4>

      <hr style={{ marginBottom: "30px" }} />
      <ul className="list-group">
        {allSpots[menuType].map((listItem) => (
          <li class="list-group-item d-flex bg-light justify-content-between">
            <div class="d-flex flex-column">
              <strong>{listItem.name}</strong>
              <small class="text-muted">{listItem.place}</small>
            </div>
            <div>
              <span class="px-5">{listItem.rating}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="credits">
      Made with <span role="img" aria-label="heart Emoji">❤️</span> by  <a href="https://www.linkedin.com/in/tushartiwari0172/"> Tushar Tiwari.</a>
      </div>
    </div>
  );
}
// VISER
// view -> interpret -> state in event handler ->render
