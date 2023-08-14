import { getConfig } from "./api";

export const getSites = async () => {
  const response = await getConfig();
  return response.data;
};
