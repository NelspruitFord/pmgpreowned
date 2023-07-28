import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Home() {

  const { data } = api.car.getAll.useQuery();

  const navStyle: string = "border-x p-[10px]"


  return (
    <>
      <Head>
        <title>Produkta Motor Group Pre Owned Vehicles</title>
        <meta name="PMG Used Car Sales" content="Produced by Kewan Seymour" />
        <link rel="icon" href="https://d2638j3z8ek976.cloudfront.net/e7f70f8f2924dd722584ce633c3c631404770d82/1680248095/images/logo.png" />
      </Head>
      <header>
        <nav className="flex w-full items-center text-lg font-bold">
          <Link href={"https://www.produktamotorgroup.co.za/"}>
            <img
              className={`${navStyle}`}
              src='https://d2638j3z8ek976.cloudfront.net/e7f70f8f2924dd722584ce633c3c631404770d82/1680248095/images/logo.png'
              alt="Whatsapp button logo"
              width={90}
            />
          </Link>
          <Link href={"listings"} className={`${navStyle}`}>
            <div className="p-1 rounded-full hover:underline decoration-[#da251C]">Pre Owned Listings</div>
          </Link>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              {/* Map cars here */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}