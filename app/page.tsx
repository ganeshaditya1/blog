import { getAboutMeFromMdxFile } from '@/app/mdxUtil';
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About me",
  description: "Aditya Ambadipudi about me page, detailing my career journey so far.",
};

export default async function Page({}) {
  return <>
    <div className="flex flex-row justify-center">
      <div>
      <Image src="/profile_picture.jpg" height={1956} width={4000} alt="My profile picture." className="lg:w-64 lg:h-64 w-64 h-64 rounded-full object-cover mt-[40px] lg:mt-[0px]"/> <br/>
      <h3 className="lg:ml-[64px] ml-[32px] lg:block hidden">(Me in June 2025)</h3>
      </div>
      <div className="ml-[10%] lg:mt-[45px] mt-[10px]">
        <h3 className="mb-[1em]">Contact details: </h3>
        <b>
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" strokeWidth="2" strokeLinecap="round"></rect> </g></svg> &nbsp;
        Email <div className="h-[0.25em] block lg:hidden"> </div> 
        </b> blog [at] adityaambadipudi [.] in <br/>
        <div className="h-[0.60em]"> </div> 
        <b> 
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 16V11M12 16V14M12 11V14M16 16V14C16 12.5 15.5 11 14 11C12.5 11 12 12.5 12 14M7.99 8H8M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> &nbsp;
        LinkedIn </b> <u><a href="https://www.linkedin.com/in/adityaambadipudi/">adityaambadipudi</a></u>
        <div className="h-[0.75em]"> </div>
        <b>
        <svg width="1.5em" height="1.5em" viewBox="0 -2 20 20" fill="#000000" className="inline"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>twitter [#154]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]"> </path> </g> </g> </g> </g></svg> &nbsp;
        Twitter </b><div className="h-[0.25em] block lg:hidden"> </div>  <u><a href="https://www.x.com/AdityaSastry1">AdityaSastry1</a></u>
        <div className="h-[0.75em]"> </div>
        <b>
        <svg fill="#000000" id="Capa_1" width="1.5em" height="1.5em" viewBox="0 0 425.963 425.963" className="inline"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081 c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002 c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482 C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884 c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"></path> </g> </g></svg> &nbsp;
        Current location </b>
        <u><a href="https://maps.app.goo.gl/zeaeFBfckxwo6Dbw9">Hyderabad, Telangana, India</a></u>
        <div className="h-[0.75em]"> </div>
      </div>
    </div>
    {getAboutMeFromMdxFile()}
  </>
}
   
export const dynamicParams = false