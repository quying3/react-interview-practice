// Exercise 3 — Search / Filter List
//
// Build a searchable user list in React with TypeScript.
//
// Requirements:
// 1. Display a search input.
// 2. Display the provided list of users.
// 3. As the user types, filter the users by name.
// 4. The search should be case-insensitive.
// 5. Partial matches should work.
//    Example: searching "mon" should match "Monica".
// 6. If the search input is empty, display all users.
// 7. If no users match, display "No users found."
// 8. Do not modify the original users array.
// 9. Use React functional components and hooks.
// 10. Use TypeScript types.
// 11. Do not use external libraries.
import React, { useState } from "react";

type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Monica" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "David" },
  { id: 5, name: "Sophia" },
  { id: 6, name: "Michael" },
];

const UserSearch = () => {
  const [searchKey, setSearchKey] = useState("");
  const searchValue = searchKey.trim().toLowerCase();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue),
  );
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };
  return (
    <>
      <input value={searchKey} onChange={handleSearch} />
      {filteredUsers.length === 0 && <p role="status">No users found.</p>}
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserSearch;
