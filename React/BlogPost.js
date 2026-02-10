import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const handleCreate = () => {
    const t = title.trim();
    const d = description.trim();

    // Only add if BOTH have values
    if (!t || !d) return;

    const newPost = {
      id: Date.now() + Math.random(), // simple unique id
      title: t,
      description: d,
    };

    setPosts((prev) => [...prev, newPost]);

    // Clear fields after successful create
    setTitle("");
    setDescription("");
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input
          title={title}
          description={description}
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
        />

        <button
          data-testid="create-button"
          className="mt-10"
          onClick={handleCreate}
        >
          Create Post
        </button>
      </div>

      <div className="posts-section">
        <PostDisplay posts={posts} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default Home;