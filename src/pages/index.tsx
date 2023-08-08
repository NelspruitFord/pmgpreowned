import Head from "next/head";
import Link from "next/link";

import Loader from "~/components/loader";
import Footer from "~/components/footer";

import { api } from "~/utils/api";
import { useState } from "react";

const Home = () => {

   const navStyle = "bg-gray-300 border-x border-r-black p-[10px]"

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
                     <th className="pb-2 text-lg text-gray-900 uppercase dark:text-gray-400">
                        Sort Listings:
                     </th>
                     <tbody>
                        <tr>
                           <td className="text-lg">
                              Price:
                           </td>
                        </tr>
                        <tr>
                           <td className="h-[3px]" />
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
                              <td className="h-[3px]" />
                           </td>
                        </tr>
                        <tr>
                           <td className="text-lg">
                              Mileage:
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <td className="h-[3px]" />
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
                              <td className="h-[3px]" />
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
                              <td className="h-[3px]" />
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
                  <div>
                     <table className="w-full">
                        <tr>
                           <td>

                              <Loader />
                              <Loader />
                              <Loader />
                              <Loader />
                              <Loader />
                              <Loader />
                              <Loader />
                              <Loader />
                              <Loader />
                              <Loader />
                           </td>
                        </tr>
                     </table>
                  </div>
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
         {/* Header */}
         <header>
            <nav className="flex w-full items-center bg-gray-300 text-lg font-bold border-b border-b-black">
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
               <div className="absolute right-0 mr-10" >
                  <table>
                     <tr>
                        <td>
                           <Link target="_blank" href={"https://wa.me/+27763408289/"}
                           >
                              <table className="bg-[#1bd741] p-11 rounded-xl">
                                 <tr>
                                    <td>

                                       <img
                                          src="data:image/png;base64,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" alt="Whatsapp Image"
                                          width={50}
                                          className="rounded-xl"
                                       />
                                    </td>
                                    <td className="text-white pr-3">
                                       Whatsapp us
                                    </td>
                                    <td className="w-1" />
                                 </tr>
                              </table>
                           </Link>
                           <td className="w-10" />
                        </td>
                        <td className="w-5" />
                        <td>
                           <Link target="_blank" href={"mailto:righardt@nelauto.co.za"}>
                              <table className="bg-[#0374c5] -translate-y-[0.6px] rounded-lg">
                                 <tr>
                                    <td>

                                       <img
                                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_RcAm_QCdjYJ1SLCTQ1TSYUsxfH1uW7PYSRle3fsXlwk534sC80YgNNMxRnIsk3ufD8&usqp=CAU"
                                          alt="Email Image"
                                          width={100}
                                          className="translate-x-1"
                                       />
                                    </td>
                                    <td className="text-white pr-4 translate-x-0">
                                       Send an email
                                    </td>
                                 </tr>
                              </table>
                           </Link>
                        </td>
                     </tr>
                  </table>
               </div>
            </nav>
         </header>
         {/* Main... */}
         <main>
            <div className="flex min-h-max bg-[#0009B4]">
               {/* Sorter UI */}
               <div className="pt-3 pl-2 items-center justify-center w-0 md:w-[12%] min-h-screen bg-gray-300">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                     <th className="pb-2 text-lg text-gray-900 uppercase dark:text-gray-400">
                        Sort Listings:
                     </th>
                     <tbody>
                        <tr>
                           <td className="text-lg">
                              Price:
                           </td>
                        </tr>
                        <tr>
                           <td className="h-[3px]" />
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
                              <td className="h-[3px]" />
                           </td>
                        </tr>
                        <tr>
                           <td className="text-lg">
                              Mileage:
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <td className="h-[3px]" />
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
                              <td className="h-[3px]" />
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
                              <td className="h-[3px]" />
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
               {/* Listings */}
               <div className="flex justify-center text-white w-[100%] md:w-[88%] min-h-screen border-x border-white">
                  <div>
                     <table>
                        <tr>
                           <td>
                              {data.map((car) => (
                                 <div key={car.id} className="flex align-middle pl-1 pt-2 pb-1 border-b-4 border-gray-400">
                                    <img src={car.image} alt="Car image"
                                       className="border-solid border-4 border-slate-400"
                                       width={195}
                                    />
                                    <div className="ml-3 overflow-auto h-40 w-full">
                                       <table className="w-full">
                                          <tbody>
                                             <tr>
                                                <td>
                                                   <h1 className="underline"><Link href={`https://wa.me/27763408289?text=I%27m%20interested%20in%20your%20${car.year}%20${car.model}%20for%20sale`}>{car.year} {car.model}</Link></h1>
                                                </td>
                                             </tr>
                                             <tr className="absolute right-3">
                                                <td>
                                                   <Link target="_blank" href={`https://wa.me/27763408289?text=I%27m%20interested%20in%20your%20${car.year}%20${car.model}%20for%20sale`} >
                                                      <table className="p-11">
                                                         <tr>
                                                            <td>

                                                               <img
                                                                  src="data:image/png;base64,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" alt="Whatsapp Image"
                                                                  width={50}
                                                                  className="rounded-xl"
                                                               />
                                                            </td>
                                                            <td className="w-1" />
                                                         </tr>
                                                      </table>
                                                   </Link>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <p>Retail: R {car.retail}</p>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <p>Mileage: {car.mileage} Km</p>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <p>Transmition: {car.transmition}</p>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <p className="mt-1 mb-3">Fuel: {car.fuel}</p>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <hr />
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <p className="mt-1">{car.features}</p>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              ))}
                           </td>
                        </tr>
                     </table>
                  </div>
               </div>
            </div>
            {/* Footer */}
            <Footer />
         </main>
      </>
   )
}

export default Home;