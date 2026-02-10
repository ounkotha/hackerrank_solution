import React, { useState } from "react";

const aspects = ["Readability", "Performance", "Security", "Documentation", "Testing"];

const FeedbackSystem = () => {
  // votes: [{up:0,down:0}, ...]
  const [votes, setVotes] = useState(
    aspects.map(() => ({ up: 0, down: 0 }))
  );

  // bump animation flags per card
  const [bump, setBump] = useState(aspects.map(() => false));

  const triggerBump = (index) => {
    setBump((prev) => prev.map((v, i) => (i === index ? true : v)));
    setTimeout(() => {
      setBump((prev) => prev.map((v, i) => (i === index ? false : v)));
    }, 180);
  };

  const handleUpvote = (index) => {
    setVotes((prev) =>
      prev.map((v, i) => (i === index ? { ...v, up: v.up + 1 } : v))
    );
    triggerBump(index);
  };

  const handleDownvote = (index) => {
    setVotes((prev) =>
      prev.map((v, i) => (i === index ? { ...v, down: v.down + 1 } : v))
    );
    triggerBump(index);
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {aspects.map((name, index) => (
          <div
            key={name}
            className="pa-10 w-300 card"
            style={{
              transform: bump[index] ? "scale(1.02)" : "scale(1)",
              transition: "transform 180ms ease"
            }}
          >
            <h2>{name}</h2>

            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid={`upvote-btn-${index}`}
                onClick={() => handleUpvote(index)}
              >
                👍 Upvote
              </button>

              <button
                className="py-10 px-15 danger"
                data-testid={`downvote-btn-${index}`}
                onClick={() => handleDownvote(index)}
              >
                👎 Downvote
              </button>
            </div>

            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
              Upvotes: <strong>{votes[index].up}</strong>
            </p>

            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
              Downvotes: <strong>{votes[index].down}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;