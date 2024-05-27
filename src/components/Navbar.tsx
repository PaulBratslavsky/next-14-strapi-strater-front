import Link from "next/link";
import { NavbarDataInterface, StrapiMetaInterface } from "@/types";
import ThemeChanger from "./DarkSwitch";
import { DisclosureClient } from "@/components/DisclosureClient";

async function loader() {
  const data = {
    data: {
      id: 8,
      documentId: "luienlndlhxy1wrbz3jmn510",
      title: "Global",
      description: "Global setting pate",
      createdAt: "2024-05-23T15:35:56.132Z",
      updatedAt: "2024-05-23T17:32:00.225Z",
      publishedAt: "2024-05-23T17:32:00.243Z",
      locale: null,
      topnav: {
        id: 7,
        logoLink: {
          id: 12,
          href: "/",
          text: "Strapifive",
          image: {
            id: 1,
            documentId: "adlqqhmaathuqym1ree67xp2",
            url: "/img/logo.svg",
            alternativeText: null,
            name: "logo.svg",
          },
        },
        link: [
          { id: 49, href: "/about", text: "About", external: false },
          { id: 50, href: "/blog", text: "Blog", external: false },
        ],
        cta: {
          id: 51,
          href: "https://strapi.io/five",
          text: "Strapi 5",
          external: true,
        },
      },
    },
    meta: {},
  };
  return data;
}

interface Data {
  data: NavbarDataInterface;
  meta: StrapiMetaInterface;
}

export async function Navbar() {
  const data = (await loader()) as Data;
  if (!data.data) return null;

  const navigation = data?.data?.topnav;
  const cta = data.data.topnav.cta;

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}

        <DisclosureClient topnav={navigation} />

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation &&
              navigation.link.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href={menu.href}
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href={cta.href}
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            target={cta.external ? "_blank" : "_self"}
          >
            {cta.text}
          </Link>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
