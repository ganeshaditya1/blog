import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book reports",
  description: "Book reports on all the books I have read.",
};

export default async function Page({}) {
    return <h1>Check back later</h1>
}
   
  export const dynamicParams = false