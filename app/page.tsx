import { getAboutMeFromMdxFile } from '@/app/mdxUtil';
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About me",
  description: "Aditya Ambadipudi about me page, detailing my career journey so far.",
};

export default async function Page({}) {
  return <>
    <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-[100px] mb-[20px]">
      <div className="flex flex-col items-center">
      <Image src="/profile_picture.jpg" height={1956} width={4000} alt="My profile picture." className="lg:w-64 lg:h-64 w-56 h-56 rounded-full object-cover overflow-hidden mt-[20px] lg:mt-[0px]"/> <br/>
      <span className="mb-[20px] mt-[10px]">(Me in June 2025)</span><br/>
      </div>
      <div className="">

        <b>
        <Image src="/icons/emailIcon.svg" height={25} width={25} alt="Email icon" className="inline align-top"/> 
        &nbsp;
        Email  {/* Line break only on mobile devices */}
        </b> blog [at] adityaambadipudi [.] in <br/>
        <div className="h-[0.90em]"> </div> {/* Line break after the contact details. */}

        <b> 
        <Image src="/icons/linkedinIcon.svg" height={25} width={25} alt="LinkedIn icon" className="inline align-top"/> 
        &nbsp;
        LinkedIn  
        </b> <u><a href="https://www.linkedin.com/in/adityaambadipudi/">adityaambadipudi</a></u>
        <div className="h-[0.9em]"> </div>

        <b>
        <Image src="/icons/githubIcon.svg" height={25} width={25} alt="github icon" className="inline align-top"/> 
        &nbsp;
        Github &nbsp;
        </b>
        <u><a href="https://github.com/ganeshaditya1">ganeshaditya1</a></u>
        <div className="h-[0.9em]"> </div>

        <b>
        <Image src="/icons/twitterIcon.svg" height={25} width={25} alt="Twitter icon" className="inline align-top"/> 
        &nbsp;
        Twitter 
        </b>  <u><a href="https://www.x.com/AdityaSastry1">AdityaSastry1</a></u>
        <div className="h-[0.9em]"> </div>

        <b>
        <Image src="/icons/locationpinIcon.svg" height={25} width={25} alt="Location pin icon" className="inline align-top"/> 
        &nbsp;
        Current location &nbsp;
        </b>
        <u><a href="https://maps.app.goo.gl/zeaeFBfckxwo6Dbw9">Hyderabad, India</a></u>
        <div className="h-[0.9em]"> </div>
      </div>
    </div>
    {getAboutMeFromMdxFile()}
  </>
}
   
export const dynamicParams = false