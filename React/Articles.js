import { useState } from "react";
import "h8k-components";

import Articles from "./components/Articles";
import "./App.css";

function App({ articles }) {
  // 1) ডিফল্টে upvotes অনুযায়ী sort
  const [sortType, setSortType] = useState("upvotes");

  // 2) button click করলে sortType বদলাবে
  const handleMostUpvoted = () => {
    setSortType("upvotes");
  };

  const handleMostRecent = () => {
    setSortType("date");
  };

  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>

          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>

          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>

        {/* 3) sortType Articles এ পাঠালাম */}
        <Articles articles={articles} sortType={sortType} />
      </div>
    </>
  );
}

export default App;

