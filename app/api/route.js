import { fetchImages } from "@/utils/pexels";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const per_page = parseInt(searchParams.get("page"));
  const options = ["nature", "sunset", "abstract", "cityscape", "ocean"];
  const nature =
    searchParams.get("query") == "null"
      ? options[Math.floor(Math.random() * options.length)]
      : searchParams.get("query");
  console.log("##########################");
  console.log(nature);
  console.log("##########################");
  const images = await fetchImages(nature, per_page);

  return Response.json(images);
}
