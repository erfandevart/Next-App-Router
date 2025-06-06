// export default function sitemap() {
//   return [
//     {
//       url: "/",
//       lastModified: new Date(),
//     },
//     {
//       url: "/users",
//       lastModified: new Date(),
//     },
//   ];
// }

export default async function sitemap() {
  const staticRoutes = ["", "/blogs", "/courses", "/users"];
  const userRoutes = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await userRoutes.json();
  const routes = staticRoutes.map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date(),
  }));

  const users = data.map((user) => ({
    url: `http://localhost:3000/users/${user.id}`,
    lastModified: new Date(),
  }));

  return [...routes, ...users];
}
