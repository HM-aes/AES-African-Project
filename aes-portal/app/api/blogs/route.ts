import { NextResponse } from "next/server";
import { getAIGeneratedBlogs } from "@/lib/blog-utils";

export async function GET() {
  try {
    const blogs = await getAIGeneratedBlogs();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json([], { status: 500 });
  }
}
