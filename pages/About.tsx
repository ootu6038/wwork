import { NextApiRequest, NextApiResponse } from "next";
import React, { useRef, useState } from "react";
import Image from "next/image";
import daigo from "../public/Alpha1-mildom_1B_new_haikei-748x908.jpg";
import Link from "next/link";

export default function About() {
  return (
    <>
    <header className="text-gray-700 bg-[#0369a1] border-b border-gray-200 flex w-full">
        {/* md ... md以上の時にcssを適用 */}
        <div className="container mx-auto flex p-5 items-center md:flex-row flex-col">
        <Link href="/" className="font-medium text-gray-900 mb-4 md:mb-0">
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0636 8C14.6159 8 15.0636 7.55228 15.0636 7C15.0636 6.44772 14.6159 6 14.0636 6C13.5113 6 13.0636 6.44772 13.0636 7C13.0636 7.55228 13.5113 8 14.0636 8Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 3C15.1523 3 17.1281 3.7555 18.6768 5.01576L20.124 6.46299L18.8288 7.75818L18.828 7.75738L14.5854 12L18.2236 15.6383L18.2224 15.6396L20.1273 17.5445L18.7144 18.9575L18.7122 18.9553C17.1583 20.2329 15.1687 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3ZM11.7569 12L17.2893 17.5323C16.1044 18.4523 14.6162 19 13 19C9.13401 19 6 15.866 6 12C6 8.13401 9.13401 5 13 5C14.6162 5 16.1045 5.54772 17.2893 6.46768L11.7569 12Z"
                fill="currentColor"
              />
            </svg> */}
            <span className="ml-3 text-xl text-white">Rent On</span>
          </Link>
          <nav className="flex items-center justify-center md:ml-auto text-base">
            <Link
              href="#about"
              className=" text-white mr-5 hover:text-blue-400 duration-300"
            >
              ご利用方法
            </Link>
            <Link
              href="/Fee"
              className="text-white mr-5 hover:text-blue-400 duration-300"
            >
              料金
            </Link>
            <Link
              href="/About"
              className=" text-white mr-5 hover:text-blue-400 duration-300"
            >
              会社概要
            </Link>
            <Link
              href="/Contact3"
              className=" text-white mr-5 hover:text-blue-400 duration-300"
            >
              お問い合わせ
            </Link>

            {/* <a href="#contact" className="hover:text-blue-400 duration-300">
            </a> */}
          </nav>
        </div>
      </header>
      <section id="skill" className="text-gray-700 border-t border-gray-200">
        <h1 className="text-center text-7xl">Rent on 株式会社</h1>
        <p className="text-center">(東京都品川区東大井4-15-3 ラフィネ3302)</p>
        <div className="flex container px-5 py-24 mx-auto flex-wrap">
          <div className="rounded w-full mb-10 lg:w-1/2 lg:mb-0">
            <h2 className="justify-center">藤原　啓佑</h2>
            <Image src={daigo} className="w-1/2 object-cover" alt="" />
          </div>
          <div className="lg:py-6 lg:pl-12 lg:text-left lg:w-1/2 w-full">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-10"></h1>
            <div className="">
              <div className="w-full">
                <h2>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur molestias velit fugiat cupiditate? Consectetur
                  enim neque velit labore corporis, laboriosam, quibusdam, quod
                  asperiores harum nihil soluta aliquam ab et dignissimos!F
                </h2>
                <div className="shadow w-full bg-green-100 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
