import { NextApiRequest, NextApiResponse } from "next";
import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import daigo from "../public/Alpha1-mildom_1B_new_haikei-748x908.jpg";
import backback from "../public/main-company.jpg";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>Rent On/東京のキャノピー・バイクレンタル</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/react.svg" />
      </Head>

      <Header />
      <Image
        src={backback}
        alt=""
        className="w-full  bg-local hover:bg-fixed"
      />
      <main className="mt-6 ml-12 my-12 md:my-12">
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          <div className="space-y-2 pt-20 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              会社概要
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8">
              <Image
                src={daigo}
                alt=""
                className="h-48 w-48 rounded-full"
              />
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                代表取締役
              </h3>
              <div className="text-gray-500 dark:text-gray-500">xxxx</div>
              {/* <div className="text-gray-500 dark:text-gray-400">ccccc</div> */}
              <div className="flex space-x-3 pt-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-cyan-500"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-indigo-600"
                >
                  <path
                    d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap justify-start prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
              {/* <div className="mt-3 border border-1 border-solid border-gray-900"></div> */}
              <div className="font-extrabold w-1/6 sm:w-1/4 underline decoration-solid decoration-4 decoration-[#e11d48]">
                会社名
              </div>
              <div className="w-full sm:w-1/4">株式会社 Rent On</div>
              <div className="font-extrabold w-1/6 sm:w-1/4 underline decoration-solid decoration-4 decoration-[#e11d48]">
              設立
            </div>
            <div className="w-full sm:w-1/4">2020年7月28日</div>
            <br/>
            <div className="font-extrabold w-1/6 sm:w-1/4 underline decoration-solid decoration-4 decoration-[#e11d48]">資本金</div>
            <div className="w-full sm:w-1/4">1000万円</div>
            <div className="font-extrabold w-1/6 sm:w-1/4 underline decoration-solid decoration-4 decoration-[#e11d48]">事業内容</div>
            <div className="w-full sm:w-1/4">レンタル・リース事業</div>
            <div className="font-extrabold w-1/6 sm:w-1/4 underline decoration-solid decoration-4 decoration-[#e11d48]">所在地</div>
            <div className="w-full sm:w-1/4">〒122-009 東京都品川区東大井2-13</div>
            <div className="font-extrabold w-1/6 sm:w-1/4 underline decoration-solid decoration-4 decoration-[#e11d48]">電話番号</div>
            <div className="w-full sm:w-1/4">090-8888-8888</div>
            <div className="font-extrabold w-1/6 sm:w-1/4 underline decoration-solid decoration-4 decoration-[#e11d48]">営業時間</div>
            <div className="w-full sm:w-1/4">07:00～19:00</div>
            <div className="font-extrabold w-1/6 sm:w-1/4 underline decoration-solid decoration-4 decoration-[#e11d48]">休業日</div>
            <div className="w-full sm:w-1/4">祝日</div>
            </div>         
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

{
  /* <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <section className="text-gray-700 border-t border-gray-200">
            
          <div className="container flex mx-auto flex-col md:flex-row items-center px-5 py-20">
          <div className="md:w-1/2 flex-grow lg:pr-24 md:pr-16 text-center mb-16 md:text-left">

            <h1 className="text-left text-5xl font-extrabold">会社概要</h1>
            <div className="mt-3 border border-t-4 border-solid border-gray-900"></div>
          
            <div className="flex container px-5 py-14 mx-auto flex-wrap">
              <div className="rounded w-full mb-3 lg:w-1/2 lg:mb-0">
                <Image src={daigo} className="w-1/2 object-cover rounded-full" alt="" />
                <button className="mt-3 border-2 border-opacity-5 border-solid border-gray-900 text-2xl">代表</button>
                <h2 className="justify-center">藤原 啓佑</h2>
              </div>
              <div className="lg:py-6 lg:pl-12 lg:text-left lg:w-1/2 w-full">
                <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-10"></h1>
               
                <div className="">
                  <div className="w-full">
                    <h2>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur molestias velit fugiat cupiditate? Consectetur
                      enim neque velit labore corporis, laboriosam, quibusdam,
                      quod asperiores harum nihil soluta aliquam ab et
                      dignissimos!F
                    </h2>
                    </div>

                    <div className="shadow w-full bg-green-100 mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
        </div>
      </main> */
}
