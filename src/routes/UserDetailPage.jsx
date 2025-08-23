import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDetail from "../features/UserDetail.jsx";

function UserDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) =>
    (state.users.list || []).find((u) => u.id === parseInt(id))
  );

  // If user not found, redirect back to users list
  if (!user) {
    navigate("/users");
    return null;
  }

  return (
    <>
      <button className="btn btn-back" onClick={() => navigate(-1)}>
        ← Back to Users
      </button>
      <UserDetail user={user} />
    </>
  );
}

export default UserDetailPage;
