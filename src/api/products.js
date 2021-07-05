import axios from "axios";
import { config } from "../config";

const authBasic =
  "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";
export async function getProducts(params) {
  return await axios.get(`${config.api_host}/apiv1/home/dashboard`, {
    headers: {
      Authorization: authBasic,
    },
    params,
  });
}
