import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersList from "../features/UsersList.jsx";
import Pagination from "../components/Pagination.jsx";
import {
  setPage,
  setSearchQuery,
} from "../features/usersSlice.jsx";
import { fetchUsersAsync } from "../features/usersThunks.jsx";

function UsersPage() {
  const dispatch = useDispatch();
  const { page = 1, totalPages = 1, searchQuery = "" } = useSelector((state) => state.users || {});

  useEffect(() => {
    dispatch(fetchUsersAsync({ page }));
  }, [dispatch, page]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="🔍 Search by name or email..."
            aria-label="Search users"
          />
        </div>
      </div>
      
      <UsersList />
      
      <Pagination
        current={page}
        total={totalPages}
        onChange={handlePageChange}
      />
    </>
  );
}

export default UsersPage;
