import HomePageClient from "@/components/homePageClient";
import { getLatestArticles } from "@/utils/articles/articles";

export default async function Page() {

  const recentBlogs = await getLatestArticles();

/**
 * The idea here was simple, we want to render the entire homepage on the server and send it back to the client, hence this, now we are going to 
 * pass the recent blogs to the techLens
 */
  return <HomePageClient recentBlogs ={recentBlogs
    
  } />
}