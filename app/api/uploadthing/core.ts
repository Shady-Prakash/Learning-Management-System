import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const handleAuth = () => {
  const {userId, orgRole} = auth();
  const isAuthorized = orgRole === "org:super_admin" || orgRole === "org:admin";
  
  if(!userId || !isAuthorized) throw new Error("Unauthorized");
  return{userId};
} 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  // campaignImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
  //   .middleware(() => handleAuth())
  //   .onUploadComplete(() => {}),
  courseAttachment: f(["text", "image", "video", "audio","pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete((res) => {console.log(res)}),
  chapterVideo: f({ video: { maxFileCount:1, maxFileSize: "512GB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {})
     
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;