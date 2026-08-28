// Exercise 4 — Fetch and Display Users
//
// Build a component that fetches users from an API and displays them.
//
// API:
// https://jsonplaceholder.typicode.com/users
//
// Requirements:
// 1. Fetch the users when the component first mounts.
// 2. Display "Loading..." while the request is in progress.
// 3. After the request succeeds, display the users in a list.
// 4. Display each user's name and email.
// 5. If the request fails, display "Failed to load users."
// 6. Do not show "Loading..." after the request finishes.
// 7. Use React functional components and hooks.
// 8. Use TypeScript types for the user data.
// 9. Use the browser Fetch API.
// 10. Do not use external libraries.
//
// User data needed:
//
// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
import React, { useState, useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

type User = {
  id: number;
  name: string;
  email: string;
};

const UserList = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [loadingState, setLoadingState] = useState<boolean>(true);
  const [errorState, setErrorState] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res: Response = await fetch(API);
        if (!res.ok) {
          throw new Error();
        }
        const list: User[] = await res.json();
        // throw new Error();
        setUserList(list);
      } catch (err) {
        setErrorState(true);
      } finally {
        setLoadingState(false);
      }
    };
    fetchUser();
  }, []);

  if (loadingState) return <span>loading...</span>;
  if (errorState) return <span>Failed to load users.</span>;

  return (
    <>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            {user.name}, {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
