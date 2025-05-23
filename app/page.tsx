import { getAboutMeFromMdxFile } from '@/app/mdxUtil';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: "Aditya Ambadipudi about me page, detailing my career journey so far.",
};

export default async function Page({}) {
    return <>
      {getAboutMeFromMdxFile()}
    </>
  }
   
  export const dynamicParams = false