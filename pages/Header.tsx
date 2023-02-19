import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import icon from "../public/canopy.jpg";
import canopy from "../public/canopy.jpg";
import Logo from "../public/logo.jpg";
import Img01 from "../public/undraw_on_the_way_re_swjt.svg";
import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "ご利用方法", href: "/ToUse", current: false },
  { name: "料金", href: "/Fee", current: false },
  { name: "会社概要", href: "/About", current: false },
  { name: "お問い合わせ", href: "/Contact", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Header() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="bg-gray-800 fixed w-full z-30 top-0 container"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center container mx-auto p-5">
                    <svg
                      className="text-white"
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
                    </svg>
                    <Link
                      href="/"
                      className="font-medium text-gray-900 md:mb-0 "
                    >
                      <span className="ml-3  text-2xl	 text-white">Rent On</span>
                    </Link>
                  </div>

                  <div className="container flex md:justify-end">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="container flex-1 justify-end">
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

{
    /* <nav id="header" className="bg-[#0369a1] fixed w-full z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
              <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                <path
                  className="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>
              Rent On
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
              </li>
            </ul>
            <button
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Action
            </button>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
  
   <header className="text-gray-700 bg-[#0369a1] border-b border-gray-200 fixed w-full top-0">
          <div className="container mx-auto flex p-5 items-center md:flex-row flex-col">
            <svg
              className="text-white"
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
            </svg>
            
            <Link href="/" className="font-medium text-gray-900 mb-4 md:mb-0">
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
                href="/Contact"
                className=" text-white mr-5 hover:text-blue-400 duration-300"
              >
                お問い合わせ
              </Link>
             </nav>
            </div>
  </header> */
  }