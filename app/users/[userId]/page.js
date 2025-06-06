export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const params = users.map((user) => ({ userId: String(user.id) }));

  return params;

  //   return [{ userId: "1" }, { userId: "2" }, { userId: "3" }];
}

async function UserDetails({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const user = await res.json();
  console.log(user);

  return (
    <div>
      UserDetails Page - {params.userId} - {user.name}
    </div>
  );
}

export default UserDetails;
