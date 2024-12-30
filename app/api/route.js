import { fetchImages } from "@/utils/pexels";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const per_page = parseInt(searchParams.get("page") || 10);
  const nature = searchParams.get("query") || "nature";

  const images = await fetchImages(nature, per_page);

  return Response.json(images);
}
