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

// not used as the pexels api offers avgColor
export const getAverageColor = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // Set crossOrigin if needed (for external images)
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      // Create a canvas to draw the image
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0);

      // Get the pixel data from the canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      let r = 0,
        g = 0,
        b = 0;
      const pixelCount = data.length / 4;

      // Loop through each pixel and accumulate the RGB values
      for (let i = 0; i < data.length; i += 4) {
        r += data[i]; // Red
        g += data[i + 1]; // Green
        b += data[i + 2]; // Blue
      }

      // Calculate average color
      r = Math.floor(r / pixelCount);
      g = Math.floor(g / pixelCount);
      b = Math.floor(b / pixelCount);

      resolve(`rgb(${r}, ${g}, ${b})`);
    };

    img.onerror = (err) => {
      reject("Failed to load image");
    };

    // Start loading the image
    img.src = imageUrl;
  });
};
