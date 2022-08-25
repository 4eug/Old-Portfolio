/* eslint-disable @next/next/no-img-element */
import Chips from "../utilities/Buttons/chips";
import { motion } from "framer-motion";

/* eslint-disable @next/next/no-html-link-for-pages */
export const Content = () => {
    const chipsContent1 = [
      {
        names:"Website",
        imgSrc:"/website.svg",
        href:"https://www.makewayapp.com/",
        id: 0
      },
      {
        names:"PlayStore",
        imgSrc:"/playstore.svg",
        href:"https://play.google.com/store/apps/details?id=com.jebo.makeway",
        id: 1
      },
      {
        names:"AppStore",
        imgSrc:"/appstore.svg",
        href:"https://apps.apple.com/app/makeway-app/id1592269187",
        id: 2
      }
    ]
    const chipsContent2 = [
      {
        names:"PlayStore",
        imgSrc:"/playstore.svg",
        href:"https://play.google.com/store/apps/details?id=com.tpconnect.ttuportal",
        id: 0
      }, 
    ]
    const chipsContent3 = [
      {
        names:"PlayStore",
        imgSrc:"/playstore.svg",
        href:"https://play.google.com/store/apps/details?id=com.eugenedebrah.thewallpaper",
        id: 0
      },
      {
        names:"Github",
        imgSrc:"/github.svg",
        href:"https://github.com/4eug/TheWallpaper-App",
        id: 1
      },
    ]
    const chipsContent4 = [
      {
        names:"Website",
        imgSrc:"/website.svg",
        href:"https://pub.dev/packages/adinkra_icons",
        id: 0
      }, 
      {
        names:"Github",
        imgSrc:"/github.svg",
        href:"https://github.com/4eug/adinkra-icons-flutter",
        id: 1
      }, 
    ]
    const chipsContent5 = [
      {
        names:"Website",
        imgSrc:"/website.svg",
        href:"/",
        id: 0
      }, 
    ]
    const chipsContent6 = [
      {
        names:"Website",
        imgSrc:"/website.svg",
        href:"https://famtechnologiesgh.com/",
        id: 0
      }, 
    ]

    return (
      <div className="mt-24 px-4 py-16 md:ml-24  sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:m-auto md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-xl xl:max-w-screen-2xl  m-auto">
          <div className=" flex-col justify-center md:items-start w-full px-2 py-8">
            
            <h1 className="py-3 text-3xl md:text-5xl font-semibold ">
              Some Projects 💻
            </h1>
            <p className="text-xl leading-relaxed">
            These are some of the projects I have worked.
            </p>
          </div>
        </div>
        <div className="grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
         
            <div className="flex flex-col h-full">
              <img
                src="/MakeWay.jpeg"
                className="object-cover w-full h-48 rounded-2xl border-2"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                      {chipsContent1.map((item) => (
                        <Chips
                        names={item.names}
                        src={item.imgSrc}
                        href={item.href}
                        key={item.id}
                        />
                      ))}
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  MakeWay App & Website
                  </h2>
                </div>
              </div>
            </div>
          
          
            <div className="flex flex-col h-full">
              <img
                src="/TTU StudentsApp.jpg"
                className="object-cover w-full h-48 rounded-2xl border-2"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    {chipsContent2.map((item) => (
                        <Chips
                        names={item.names}
                        src={item.imgSrc}
                        href={item.href}
                        key={item.id}
                        />
                      ))}
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  TTU Students App
                  </h2>
                </div>
              </div>
            </div>
          
            <div className="flex flex-col h-full">
              <img
                src="/TheWallpaper.png"
                className="object-cover w-full h-48 rounded-2xl border-2"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    {chipsContent3.map((item) => (
                        <Chips
                        names={item.names}
                        src={item.imgSrc}
                        href={item.href}
                        key={item.id}
                        />
                      ))}
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  TheWallpaper
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="/AdinkraIcons.png"
                className="object-cover w-full h-48 rounded-2xl border-2"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    {chipsContent4.map((item) => (
                        <Chips
                        names={item.names}
                        src={item.imgSrc}
                        href={item.href}
                        key={item.id}
                        />
                      ))}
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  Adinkra Icon Pack
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    {chipsContent5.map((item) => (
                        <Chips
                        names={item.names}
                        src={item.imgSrc}
                        href={item.href}
                        key={item.id}
                        />
                      ))}
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  Obodai’s Website
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    {chipsContent6.map((item) => (
                        <Chips
                        names={item.names}
                        src={item.imgSrc}
                        href={item.href}
                        key={item.id}
                        />
                      ))}
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  FamTechnologies GH Website
                  </h2>
                </div>
              </div>
            </div>
          
         
          
        </div>
        <div className="mt-16 mb-1 flex justify-center items-center">
        <a href="https://github.com/4eug" target="_blank" rel="noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="black  md:block"
            >
              <span className="font-medium ">View More</span>
            </motion.button>
          </a>
          </div>
      </div>
    );
  };