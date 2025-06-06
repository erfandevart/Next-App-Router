import React from "react";

async function Users() {
  // SSG ---> {cache: "force-cache"}

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  //   ISR --->  {next: { revalidate: 10 }}

  //   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //     next: { revalidate: 10 },
  //   });
  //   const data = await res.json();
  //   console.log(data);

  //SSR ---> {cache: "no-store"}

  //   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //     cache: "no-store",
  //   });
  //   const data = await res.json();
  //   console.log(data);

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
