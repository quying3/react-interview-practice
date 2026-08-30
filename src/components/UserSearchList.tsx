import React, { useState, useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

type User = {
  id: number;
  name: string;
  email: string;
};

const UserSearchList = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [requestFailed, setRequestFailed] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>("");

  const searchValue = searchKey.trim().toLowerCase();
  const filteredUserList = userList.filter((u) =>
    u.name.toLowerCase().includes(searchValue),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok) {
          throw new Error();
        }
        const data: User[] = await res.json();
        setUserList(data);
      } catch {
        setRequestFailed(true);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <p> Loading...</p>;
  if (requestFailed) return <p>Failed to load users.</p>;

  return (
    <>
      <div>UserSearchList</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          textAlign: "left",
          margin: "auto",
        }}
      >
        <label htmlFor="search">Search User</label>
        <input
          id="search"
          type="text"
          value={searchKey}
          onChange={handleChange}
        />

        {filteredUserList.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul>
            {filteredUserList.map((user) => (
              <li key={user.id}>
                {user.name}, {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default UserSearchList;

// Exercise 7 — Fetch + Search Users

// Build a UserSearchList component using React and TypeScript.

// Requirements:

// 1. Fetch users from:
//    https://jsonplaceholder.typicode.com/users

// 2. Define a User type with:
//    - id
//    - name
//    - email

// 3. Fetch the users once when the component mounts.

// 4. Show:
//    Loading...
//    while the request is loading.

// 5. Show:
//    Failed to load users.
//    if the request fails.

// 6. Add a controlled search input.

// 7. Filter the fetched users by name.
//    - The search should be case-insensitive.
//    - The filtered result should update as the user types.

// 8. If the filtered result is empty, show:
//    No users found.

// 9. Render each matching user's:
//    - name
//    - email

// 10. Use the correct React key when rendering the list.

// 11. Do not use external libraries.
