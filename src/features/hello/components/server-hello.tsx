import { getHello } from "../api/get-hello";

export async function ServerHello() {
  const data = await getHello();

  // eslint-disable-next-line no-console
  console.log("data server-hello", data);

  return <code>{data?.message ?? "No hubo respuesta"}</code>;
}
