export async function getUsers(page = 1) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return response.json();
}