import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton.jsx";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";

function UsersList() {
  const { list, loading, error, searchQuery, favorites } = useSelector(
    (state) => state.users
  );
  const navigate = useNavigate();

  // Filter on name/email with safety checks
  const filteredList = (list || []).filter(
    (user) =>
      user.name?.toLowerCase().includes((searchQuery || "").toLowerCase()) ||
      user.email?.toLowerCase().includes((searchQuery || "").toLowerCase()) ||
      user.username?.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  if (filteredList.length === 0 && searchQuery) {
    return <div className="error">No users found matching "{searchQuery}"</div>;
  }

  return (
    <div className="users-list">
      {filteredList.map((user) => (
        <div key={user.id} className="user-card">
          <FavoriteButton
            userId={user.id}
            isFavorite={(favorites || []).includes(user.id)}
          />

          <div className="user-avatar">
            <div className="avatar-placeholder">
              {user.name?.charAt(0) || "U"}
            </div>
          </div>

          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
            <div className="user-username">@{user.username}</div>
          </div>

          <div className="user-actions">
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/users/${user.id}`)}
            >
              👤 View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
