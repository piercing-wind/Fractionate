import { MetadataRoute } from "next";
import { locationData } from "@/data/location";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  
   const locationRoutes = locationData.map(({slug}) => {
      return {
         url: `https://fractionate.in${slug}`,
         lastModified,
         changeFrequency: "monthly" as "monthly",
      };
   })

  return [
    {
      url: "https://fractionate.in/",
      lastModified,
      priority: 1,
      changeFrequency: "yearly",
    },
    {
      url: "https://fractionate.in/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://fractionate.in/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://fractionate.in/how-it-works",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://fractionate.in/terms-and-condition",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://fractionate.in/disclaimer",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://fractionate.in/privacy-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
      ...locationRoutes
  ];
}
