import Head from "next/head";
import Link from "next/link";

import Loader from "~/components/loader";
import Footer from "~/components/footer";

import { api } from "~/utils/api";
import { useState } from "react";

const Listings = () => {

   const navStyle = "bg-slate-50 border-x border-r-black p-[10px]"

   const [filterQuery, setFilterQuery] = useState("pdesc")
   const { data } = api.retailQuery.sortFilter.useQuery({ filterType: filterQuery })

   if (!data) return (
      <>
         <Head>
            <title>Produkta Motor Group Pre Owned Vehicles</title>
            <meta name="PMG Used Car Sales" content="Produced by Kewan Seymour" />
            <link rel="icon" href="https://d2638j3z8ek976.cloudfront.net/e7f70f8f2924dd722584ce633c3c631404770d82/1680248095/images/logo.png" />
         </Head>
         <header>
            <nav className="flex w-full items-center text-lg font-bold border-b border-b-black">
               <Link href={"https://www.produktamotorgroup.co.za/"}>
                  <img
                     className={`${navStyle}`}
                     src='https://d2638j3z8ek976.cloudfront.net/e7f70f8f2924dd722584ce633c3c631404770d82/1680248095/images/logo.png'
                     alt="PMG logo"
                     width={110}
                  />
               </Link>
               <Link href={"/about"}
                  className={`${navStyle}`}>
                  <div className="p-1 rounded-full hover:underline decoration-[#da251C]">About</div>
               </Link>
               <h1 className="flex justify-center w-full underline decoration-black text-2xl">Pre Owned Vehicles</h1>
            </nav>
         </header>
         <main>
            <div className="flex min-h-max bg-[#0009B4]">

               <div className="pt-3 pl-2 items-center justify-center w-0 md:w-[12%] min-h-screen bg-white">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                     <thead className="text-lg text-gray-900 uppercase dark:text-gray-400">
                        <th className="pb-2">
                           Sort Listings:
                        </th>
                     </thead>
                     <tbody>
                        <tr>
                           <td className="text-lg">
                              Price:
                           </td>
                        </tr>
                        <tr>
                           <td className="h-[7px]" />
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                              >
                                 High to Low
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                              >
                                 Low to high
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <td className="h-[7px]" />
                           </td>
                        </tr>
                        <tr>
                           <td className="text-lg">
                              Mileage:
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <td className="h-[7px]" />
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                              >
                                 Low to high
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                              >
                                 High to low
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td className="text-lg">
                              Fuel:
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <td className="h-[7px]" />
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                              >
                                 Diesel
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                              >
                                 Petrol
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td className="text-lg">
                              Transmition:
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <td className="h-[7px]" />
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                              >
                                 Auto
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                              >
                                 Manual
                              </button>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div className="justify-center text-white w-[100%] md:w-[88%] min-h-screen border-x border-white bg-black">
                  <Loader/>
                  <Loader/>
                  <Loader/>
                  <Loader/>
                  <Loader/>
                  <Loader/>
                  <Loader/>
                  <Loader/>
                  <Loader/>
                  <Loader/>
               </div>
            </div>
         </main>
      </>
   )

   return (
      <>
         <Head>
            <title>Produkta Motor Group Pre Owned Vehicles</title>
            <meta name="PMG Used Car Sales" content="Produced by Kewan Seymour" />
            <link rel="icon" href="https://d2638j3z8ek976.cloudfront.net/e7f70f8f2924dd722584ce633c3c631404770d82/1680248095/images/logo.png" />
         </Head>
         <header>
            <nav className="flex w-full items-center text-lg font-bold border-b border-b-black">
               <Link href={"https://www.produktamotorgroup.co.za/"}>
                  <img
                     className={`${navStyle}`}
                     src='https://d2638j3z8ek976.cloudfront.net/e7f70f8f2924dd722584ce633c3c631404770d82/1680248095/images/logo.png'
                     alt="PMG logo"
                     width={110}
                  />
               </Link>
               <Link href={"/about"}
                  className={`${navStyle}`}>
                  <div className="p-1 rounded-full hover:underline decoration-[#da251C]">About</div>
               </Link>
               <h1 className="flex justify-center w-full underline decoration-black text-2xl">Pre Owned Vehicles</h1>
            </nav>
         </header>
         <main>
            <div className="flex min-h-max bg-[#0009B4]">
               <div className="pt-3 pl-2 items-center justify-center w-0 md:w-[12%] min-h-screen bg-white">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                     <thead className="text-lg text-gray-900 uppercase dark:text-gray-400">
                        <th className="pb-2">
                           Sort Listings:
                        </th>
                     </thead>
                     <tbody>
                        <tr>
                           <td className="text-lg">
                              Price:
                           </td>
                        </tr>
                        <tr>
                           <td className="h-[7px]" />
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                 onClick={() => setFilterQuery("rdesc")}
                              >
                                 High to Low
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                 onClick={() => setFilterQuery("rasc")}
                              >
                                 Low to high
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <td className="h-[7px]" />
                           </td>
                        </tr>
                        <tr>
                           <td className="text-lg">
                              Mileage:
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <td className="h-[7px]" />
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                 onClick={() => setFilterQuery("masc")}
                              >
                                 Low to high
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                 onClick={() => setFilterQuery("mdesc")}
                              >
                                 High to low
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td className="text-lg">
                              Fuel:
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <td className="h-[7px]" />
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                 onClick={() => setFilterQuery("fdesc")}
                              >
                                 Diesel
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                 onClick={() => setFilterQuery("fasc")}
                              >
                                 Petrol
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td className="text-lg">
                              Transmition:
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <td className="h-[7px]" />
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                 onClick={() => setFilterQuery("tasc")}
                              >
                                 Auto
                              </button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <button type="button" className="text-stone-800 dark:text-stone-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                 onClick={() => setFilterQuery("tdesc")}
                              >
                                 Manual
                              </button>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div className="flex justify-center text-white w-[100%] md:w-[88%] min-h-screen border-x border-white">
                  <div>
                     <table>
                        <tr>
                           <td>
                              {data.map((car) => (
                                 <div key={car.id} className="flex align-middle pl-1 pt-2 pb-1 border-b-4 border-white-400">
                                    <img src={car.image} alt="Car image"
                                       className="border-solid border-4 border-slate-400"
                                       width={195}
                                    />
                                    <div className="ml-3 overflow-auto h-36 w-full">
                                       <h1 className="underline"><Link href={`https://wa.me/27763408289?text=I%27m%20interested%20in%20your%20${car.year}%20${car.model}%20for%20sale`}>{car.year} {car.model}</Link></h1>
                                       <p className="mt-1">Retail: R {car.retail}</p>
                                       <p className="mt-1 mb-1">Mileage: {car.mileage} Km</p>
                                       <p className="mt-1 mb-1">Transmition: {car.transmition}</p>
                                       <p className="mt-1 mb-1">Fuel: {car.fuel}</p>
                                       <hr />
                                       <p className="mt-1">{car.features}</p>
                                    </div>
                                 </div>
                              ))}
                           </td>
                        </tr>
                     </table>
                  </div>
               </div>
            </div>
            {/* <Footer /> */}
         </main>
      </>
   )
}

export default Listings;