export async function getHello() {
  const response = await fetch("http://localhost:3000/api/hello");

  if (!response.ok) {
    throw new Error("Server error");
  }

  const data = await response.json();

  return data;
}
