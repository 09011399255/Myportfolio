import { NextRequest } from "next/server";
import { getAllArticles } from "@/utils/articles/articles";
import { apiResponse, apiError } from "@/utils/apiResponse";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;

        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");

        const search = searchParams.get("search") || undefined;

        const result = await getAllArticles({ page, limit, search });

       
        return apiResponse(200, result, "Articles fetched successfully");
    } catch (error) {
        return apiError(500, "Failed to fetch articles", error);
    }
}