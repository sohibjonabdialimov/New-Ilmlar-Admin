import * as Accordion from "@radix-ui/react-accordion";
import right from "../../assets/images/right.png";
import time from "../../assets/images/time.png";
import check_green from "../../assets/images/check_green.png";
import "./course-info.css";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function CourseInfo() {
  const navigate = useNavigate();

  const modules = [
    {
      title: "1-Modul. JavaScript asoslari",
      duration: "7.21 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: true,
    },
    {
      title: "2-Modul. JavaScript loyiha",
      duration: "3.23 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: true,
    },
    {
      title: "3-Modul. Murakkab terminlar",
      duration: "4.53 soat",
      lecture: "12 ta darslik",
      lessons: [
        { title: "JSON va AJAX", time: "28:53" },
        { title: "Promise", time: "17:51" },
        { title: "Amaliyot. JSON Placeholder", time: "30:58" },
        { title: "Amaliyot. Fetch Telegram BOT", time: "29:49" },
        { title: "Array metodlar", time: "13:51" },
        { title: "NPM, ESLint, JSON-Server", time: "29:09" },
        { title: "Amaliyot. Slider Carousel", time: "32:20" },
        { title: "Amaliyot. LocalStorage", time: "19:44" },
        { title: "Regular Expression", time: "18:58" },
        { title: "Webpack", time: "24:44" },
        { title: "Amaliyot. Webpack", time: "31:19" },
        { title: "Async await. Try catch", time: "15:07" },
      ],
      isOpen: true,
    },
    {
      title: "4-Modul. Paint loyihasi",
      duration: "1.40 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: false,
    },
    {
      title: "5-Modul. Paint loyihasi",
      duration: "1.40 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: false,
    },
  ];

  return (
    <div className="py-7">
      <div
        onClick={() => navigate(-1)}
        className="btn back_btn inline-flex items-center sm:gap-3 gap-1 cursor-pointer sm:p-[4px_20px] p-[2px_10px]"
      >
        <i className="fa-solid fa-arrow-left sm:text-base text-xs"></i>
        <button className="sm:text-lg text-sm">Ortga qaytish</button>
      </div>
      <div className="grid grid-cols-2 gap-10 sm:pb-20 pb-12 sm:pt-12 pt-4">
        <div className="sm:col-span-1 col-span-2 flex flex-col justify-between">
          <div className="">
            <h1 className="sm:text-6xl text-xl sm:pt-7 pt-2 font-semibold sm:pb-8 pb-3">
              Memorable UI Design For Interactive Experiences
            </h1>
            <h4 className="sm:text-xl text-sm sm:mb-0 mb-5">
              Kurs muallifi:{" "}
              <Link className="sm:text-2xl text-base font-semibold border-b-2 border-black">
                {"Saidjon Azamatov"}
              </Link>
            </h4>
          </div>

          <div className="grid grid-cols-3 sm:gap-y-4 gap-y-3">
            <div className="flex items-center sm:gap-3 gap-1 sm:text-lg text-sm">
              <i className="fa-solid fa-globe"></i>
              <p className="font-bold">
                Ta'lim tili: <span className="font-normal">{"English"}</span>
              </p>
            </div>
            <div className="flex items-center sm:gap-3 gap-1 sm:text-lg text-sm">
              <i className="fa-regular fa-clock"></i>
              <p className="font-bold">
                Davomiyligi: <span className="font-normal">{"5 oy"}</span>
              </p>
            </div>

            <div className="flex items-center sm:gap-3 gap-1 sm:text-lg text-sm">
              <i className="fa-solid fa-bolt"></i>
              <p className="font-bold">
                Murakkablik: <span className="font-normal">{"Oson"}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-1 col-span-2">
          <img
            className="w-full h-full aspect-[8/7] rounded-[16px]"
            src="https://assets.awwwards.com/assets/redesign/images/pages/masterclass/courses/louis/poster.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex-grow flex-shrink-0 basis-0 w-full">
          <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16 mb-6">
            <h2 className="sm:text-3xl text-xl text-main_color font-semibold sm:mb-6 mb-2">
              Kurs haqida qisqacha
            </h2>
            <p className="sm:text-xl sm:leading-8 text-sm">
              Explore Auto Layout in Figma, starting with horizontal, vertical,
              and wrap layouts. Manage padding, gaps, and alignment, and use
              constraints like fixed, hug, and fill for optimal sizing. Design
              navigation bars, top bars, headings, cards, and lists for mobile,
              tablet, and desktop. This course prepares you to create scalable
              and adaptable UI designs. Explore Auto Layout in Figma, starting
              with horizontal, vertical, and wrap layouts. Manage padding, gaps,
              and alignment, and use constraints like fixed, hug, and fill for
              optimal sizing. Design navigation bars, top bars, headings, cards,
              and lists for mobile, tablet, and desktop. This course prepares
              you to create scalable and adaptable UI designs...
            </p>
          </div>
          <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16 mb-6">
            <h2 className="sm:text-3xl text-xl text-main_color font-semibold mb-6">
              Siz nimani o’rganasiz?
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-[1px] border-[#DCDFE3] rounded-[24px] p-4 flex sm:gap-4 gap-2">
                <div className="sm:w-[32px] sm:h-[32px] w-[20px] h-[20px]">
                  <img className="w-full h-full" src={check_green} alt="" />
                </div>
                <div className="course_advantage">
                  <h2 className="sm:text-xl text-sm font-semibold text-main_color mb-1">
                    Mijozlarga loyihani taqdim etish
                  </h2>
                  <p className="text-[#758195] sm:text-base text-sm font-normal">
                    UX/UI kursida siz figmada noldan ishlashni va turli xil
                    murakkablikdagi dizayn sxemalarini yaratishni o'rganasiz.
                    Loyiha oxirida mijozga ishni to’g’ri taqdim etish. To’g’ri
                    portfelni shakllantirish.
                  </p>
                </div>
              </div>
              <div className="border-[1px] border-[#DCDFE3] rounded-[24px] p-4 flex sm:gap-4 gap-2">
                <div className="sm:w-[32px] sm:h-[32px] w-[20px] h-[20px]">
                  <img className="w-full h-full" src={check_green} alt="" />
                </div>
                <div className="course_advantage">
                  <h2 className="sm:text-xl text-sm font-semibold text-main_color mb-1">
                    Mijozlarga loyihani taqdim etish
                  </h2>
                  <p className="text-[#758195] m:text-base text-sm font-normal">
                    UX/UI kursida siz figmada noldan ishlashni va turli xil
                    murakkablikdagi dizayn sxemalarini yaratishni o'rganasiz.
                    Loyiha oxirida mijozga ishni to’g’ri taqdim etish. To’g’ri
                    portfelni shakllantirish.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px]">
            <h2 className="sm:text-3xl text-xl text-main_color font-semibold mb-6">
              Video darslar
            </h2>
            <div className="flex justify-between items-center sm:mb-4 mb-3">
              <div className="flex items-center sm:gap-4 gap-2">
                <i className="fa-solid fa-book"></i>
                <p className="text-[#1B1D20] font-normal sm:text-base text-sm">
                  12 ta darslik
                </p>
              </div>
              <div className="flex items-center sm:gap-4 gap-2">
                <img className="w-[18px] h-[18px]" src={time} alt="" />
                <p className="text-[#1B1D20] font-normal sm:text-base text-sm">
                  1.40 soat
                </p>
              </div>
            </div>
            <Accordion.Root type="multiple" className="accordion-root w-full">
              {modules.map((module, index) => (
                <Accordion.Item
                  value={`module-${index}`}
                  key={index}
                  className="accordion-item"
                >
                  <Accordion.Header className="accordion-header">
                    <Accordion.Trigger className="accordion-trigger">
                      <div className="flex items-center sm:gap-3 gap-1">
                        <img
                          className="sm:w-[20px] w-[15px]"
                          src={right}
                          alt=""
                        />
                        <p>{module.title}</p>
                      </div>
                      {module.isOpen ? (
                        <button className="btn text-blue_color font-normal sm:text-base text-xs sm:p-[10px_20px] p-[5px_10px]">
                          Ko'rish
                        </button>
                      ) : (
                        <button
                          disabled
                          className="btn text-blue_color font-normal sm:text-base text-xs sm:p-[10px_20px] p-[5px_10px]"
                        >
                          Yopiq
                        </button>
                      )}
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="accordion-content">
                    <ul>
                      {module.lessons.length > 0 ? (
                        module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex}>
                            {lesson.title} - {lesson.time}
                          </li>
                        ))
                      ) : (
                        <li>Hech qanday dars yo'q</li>
                      )}
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
