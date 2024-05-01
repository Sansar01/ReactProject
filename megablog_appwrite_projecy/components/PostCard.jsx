import React from "react";
import appwrite from ".././appwrite/Config";
import { Link } from "react-router-dom";

export default function PostCard({ id, title, featuredImage }) {
  return (
    <Link to={`/post/${id}`}>
      <div className="w-full rounded-xl bg-gray-400 p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwrite.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </Link>
  );
}
