import HeroSection from "../components/HeroSection"
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function DNE() {
  return (
    <>
      <NextSeo title="Nolp - Page not found" />
      <HeroSection
        children={
          <>
            <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-75"></div>
            <img
              src="images/static.gif"
              alt="static"
              className="w-full h-full top-0 left-0 absolute bg-cover bg-center bg-no-repeat"
              style={{ zIndex: -10 }}
            />
          </>
        }
        icon={
          <>
            <img
              src="images/doomer.png"
              alt="Doomer"
              className="mx-auto"
              height="100"
              width="100"
            />
          </>
        }
        title="Sorry!"
        subtitle="The page you requested does not exist"
      />
      <section className="section">
        <div className="w-full px-4 mx-3 sm:w-96">
          <div className="grid grid-cols-1 gap-2">
            <Link href="/">
              <a className="form_red_button">Go home</a>
            </Link>
            <Link href="/register">
              <a className="form_red_button">Sign up</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
