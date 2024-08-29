import { getHello } from "../api/get-hello";

export async function ServerHello() {
  const data = await getHello();
  console.log("data server-hello", data);

  return <code>{data?.message ?? "No hubo respuesta"}</code>;
}
