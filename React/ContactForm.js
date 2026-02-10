import { useState } from "react";
import "h8k-components";
import "./App.css";

function App() {
  // 1️⃣ state: input field গুলোর জন্য
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 2️⃣ state: submit হলে data দেখানোর জন্য
  const [submittedData, setSubmittedData] = useState(null);

  // 3️⃣ state: error message দেখানোর জন্য
  const [error, setError] = useState("");

  // 4️⃣ submit button চাপলে এই function চলবে
  const handleSubmit = (e) => {
    e.preventDefault(); // page reload বন্ধ

    // input থেকে লেখা নেওয়া
    const n = name.trim();
    const em = email.trim();
    const msg = message.trim();

    // 5️⃣ validation
    if (!n || !em || !msg) {
      setError("All fields are required.");
      setSubmittedData(null);
      return;
    }

    // 6️⃣ সব ঠিক থাকলে
    setError("");
    setSubmittedData({
      name: n,
      email: em,
      message: msg,
    });

    // 7️⃣ form clear
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <h8k-navbar header="Contact Form"></h8k-navbar>

      <div className="App">
        <h1>Contact Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="name-input"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email-input"
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            data-testid="message-input"
          />

          <button type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>

        {/* 8️⃣ error থাকলে দেখাবে */}
        {error && (
          <p data-testid="error-message" className="error">
            {error}
          </p>
        )}

        {/* 9️⃣ submit হলে data দেখাবে */}
        {submittedData && (
          <div data-testid="submitted-data" className="submitted-data">
            <h2>Submitted Information</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;