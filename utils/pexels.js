// utils/pexels.js
import axios from "axios";

const PEXELS_API_KEY = process.env.KEY_API;

const pexels = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    Authorization: PEXELS_API_KEY,
  },
});

export async function fetchImages(query = "nature", perPage = 10) {
  try {
    let quantity = 1;
    if (perPage > 80) {
      quantity = 2;
    }
    const response = await pexels.get("/search", {
      params: {
        query,
        per_page: perPage,
      },
    });
    console.log(response);
    return response.data.photos;
  } catch (error) {
    console.error("Error fetching images from Pexels:", error);
    return [];
  }
}

export function updateSearchParams(type, value, search = false) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  if (search === true) {
    searchParams.set("page", 10);
  }
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
}
