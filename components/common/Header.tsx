"use client";

import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckboxOutline, IoMdClose } from "react-icons/io";
import { LuTextCursorInput } from "react-icons/lu";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { ImSortNumbericDesc } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";

type TLink = {
  id: number;
  link: string;
  title: string;
  content?: string;
  subLink?: Array<TLink>;
  icon?: string;
};

const icon = (name: string, size = 20) => {
  const icons: Record<string, JSX.Element> = {
    checkbox: <IoIosCheckboxOutline size={size} />,
    text: <LuTextCursorInput size={size} />,
    radio: <MdOutlineRadioButtonChecked size={size} />,
    number: <ImSortNumbericDesc size={size} />,
  };
  return icons[name];
};

export default function Header() {
  const links: Array<TLink> = [
    {
      id: 0,
      link: "input",
      title: "Input",
      subLink: [
        {
          id: 0,
          link: "checkbox",
          title: "checkbox",
          content: "Get a beautiful checkbox style",
          icon: "checkbox",
        },
        {
          id: 1,
          link: "text",
          title: "text",
          content: "text, password",
          icon: "text",
        },
        {
          id: 2,
          link: "radio-button",
          title: "Radio button",
          content: "Get a beautiful Radio button style",
          icon: "radio",
        },
        {
          id: 3,
          link: "number",
          title: "number button",
          content: "Get a beautiful number style",
          icon: "number",
        },
      ],
    },
    {
      id: 1,
      link: "button",
      title: "button",
    },
    {
      id: 2,
      link: "write",
      title: "write",
    },
  ];

  const [mobileMenuOpen, setMobilMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbar = (links: Array<TLink>) => {
    return (
      <div className="hidden lg:flex lg:gap-x-12">
        {links.map((link) =>
          link.subLink ? (
            <div key={link.id} className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                aria-expanded="false"
                onClick={() => setMenuOpen((pre) => !pre)}
              >
                {link.title}
                <i className="text-gray-400">
                  <MdKeyboardArrowDown size={20} />
                </i>
              </button>

              <div
                className={`fixed inset-0 z-10 ${menuOpen || "hidden"} cu`}
                onClick={() => setMenuOpen(false)}
              ></div>
              <div
                className={`absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 ${
                  menuOpen
                    ? `block animate-fade-in`
                    : ` opacity-0 pointer-events-none animate-fade-out `
                }  `}
              >
                <div className="p-4">
                  {link.subLink.map((v) => (
                    <div
                      key={`${link.id}-${v.id}`}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        {icon(v.icon || "")}
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={`/${link.link}/${v.link}`}
                          className="block font-semibold text-gray-900"
                        >
                          {v.title}
                          <span className="absolute inset-0"></span>
                        </Link>
                        <p className="mt-1 text-gray-600">{v.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={link.id}
              href={link.link}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {link.title}
            </Link>
          )
        )}
      </div>
    );
  };

  const mobileMenu = (links: Array<TLink>) => {
    return (
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div
          className={`fixed inset-0 z-10 ${mobileMenuOpen || "hidden"}`}
          onClick={() => setMobilMenuOpen(false)}
        ></div>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${
            mobileMenuOpen ? `block` : `hidden`
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">DEV Style</span>
              <div className={"relative w-20 h-20"}>
                <Image
                  src={"/logo.png"}
                  alt="dev style"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 732px) 90vw, (max-width: 992px) 45vw, 320px"
                />
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobilMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IoMdClose size={20} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((link) =>
                  link.subLink ? (
                    <div key={link.id} className="-mx-3">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        aria-controls="disclosure-1"
                        aria-expanded="false"
                      >
                        {link.title}
                        <MdKeyboardArrowDown size={20} />
                      </button>
                      <div className="mt-2 space-y-2" id="disclosure-1">
                        {link.subLink.map((subLink) => (
                          <Link
                            key={`/${link.id}/${subLink.id}`}
                            href={`/${link.link}/${subLink.link}`}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.id}
                      href={link.link}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {link.title}
                    </Link>
                  )
                )}
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="bg-white h-20">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <Link href="/">
            <span className="sr-only">DEV Style</span>
            <div className={"relative w-20 h-20"}>
              <Image
                src={"/logo.png"}
                alt="dev style"
                fill
                priority
                sizes="(max-width: 732px) 90vw, (max-width: 992px) 45vw, 320px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobilMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <i>
              <GiHamburgerMenu size={20} />
            </i>
          </button>
        </div>
        {navbar(links)}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      {mobileMenu(links)}
    </header>
  );
}
