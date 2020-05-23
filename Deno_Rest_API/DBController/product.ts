import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { client } from "../db/sql.connection.ts";

export const GetProducts = async ({ response }: { response: any }) => {
  try
  {
    const products = await client.query("select * from product");
    response.body = products;
    await client.close();
  }
  catch(err)
  {
    console.log(err);
  }
};
