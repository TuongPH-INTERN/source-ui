<template>
  <section class="myCourse mt-8 mb-20">
    <section class="hero w-full mt-20 sm:mt-10">
      <div
        class="banner bg-hero-2 w-full hidden sm:flex justify-between rounded-2xl relative"
      >
        <div class="banner-img-left relative">
          <img src="@/assets/Pattern.png" alt="" />
          <div
            class="z-20 sm:w-11/12 md:w-10/12 hero-content-left absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-left"
          >
            <div>
              <p
                class="text-lg leading-5 text-white lg:text-5xl sm:text-3xl font-bold sm:leading-7 lg:leading-62px"
              >
                Learn something new everyday
              </p>
              <p
                class="text-xs text-white md:text-base font-normal mt-1 md:mt-2"
              >
                Become professionals and ready to join the world
              </p>
              <button
                class="bg-white hover:bg-sky-400 hover:text-white text-black font-bold py-0.5 px-2 sm:py-1 sm:px-5 lg:py-3 lg:px-7 rounded-2xl mt-2 text-xs sm:mt-3 lg:mt-8 sm:text-base lg:text-xl"
              >
                Explore Photography
              </button>
            </div>
          </div>
        </div>
        <div class="banner-img-right relative">
          <img src="@/assets/hero-right-2.png" alt="" />
          <div
            class="h-full banner-img-center absolute top-0 -translate-x-[34%]"
          >
            <img src="@/assets/hero-center-2.png" class="h-full" alt="" />
          </div>
          <div
            class="banner-right-content flex justify-between absolute bottom-6 w-full left-0 right-0 px-2"
          >
            <div class="person flex w-full sm:w-auto">
              <div
                class="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-4 border-white overflow-hidden"
              >
                <img src="@/assets/signInAvatar.png" alt="" />
              </div>
              <div class="name my-auto text-white text-left ml-3.5">
                <p class="text-sm lg:text-base leading-21px font-bold">
                  Jessica Wong
                </p>
                <span class="text-xs lg:text-sm">Photographer</span>
              </div>
            </div>
            <div
              class="hidden sm:block information text-right text-white my-auto text-xs md:text-sm lg:text-base"
            >
              <p>Winner Photo 2017 Awwards</p>
              <p>Joined Klevr since 2006</p>
            </div>
          </div>
        </div>
        <div
          class="navigate w-full flex justify-between absolute bottom-1/2 translate-y-1/2 opacity-30"
        >
          <button class="left py-30px px-7px bg-slate-500 hover:bg-teal-400">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7469 1.87814C14.9177 2.049 14.9177 2.32601 14.7469 2.49686L6.74372 10.5L14.7469 18.5031C14.9177 18.674 14.9177 18.951 14.7469 19.1219C14.576 19.2927 14.299 19.2927 14.1281 19.1219L5.81564 10.8094C5.64478 10.6385 5.64478 10.3615 5.81564 10.1906L14.1281 1.87814C14.299 1.70729 14.576 1.70729 14.7469 1.87814Z"
                fill="white"
              />
            </svg>
          </button>
          <button class="next py-30px px-7px bg-slate-500 hover:bg-teal-400">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.25314 19.1219C6.08229 18.951 6.08229 18.674 6.25314 18.5031L14.2563 10.5L6.25314 2.49686C6.08229 2.326 6.08229 2.049 6.25314 1.87814C6.424 1.70729 6.70101 1.70729 6.87186 1.87814L15.1844 10.1906C15.3552 10.3615 15.3552 10.6385 15.1844 10.8094L6.87186 19.1219C6.701 19.2927 6.424 19.2927 6.25314 19.1219Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="py-4 hidden sm:flex items-center justify-center">
        <span
          class="rounded-full bg-teal-400 w-2 h-2 inline-block my-auto"
        ></span>
        <span
          class="rounded-full bg-slate-300 w-1 h-1 inline-block mx-1"
        ></span>
        <span class="rounded-full bg-slate-300 w-1 h-1 inline-block"></span>
        <span
          class="rounded-full bg-slate-300 w-1 h-1 inline-block mx-1"
        ></span>
      </div>
    </section>
    <div class="course mt-5 sm:mt-20">
      <div class="hidden sm:flex justify-between items-center">
        <div class="title">
          <h2 class="font-bold text-xl">My Course</h2>
          <p class="text-light-gray">List of your courses</p>
        </div>
        <div class="flex">
          <select
            class="focus:ring-blue-500 w-auto py-2.5 px-6 rounded-md border border-1"
          >
            <option selected>All Rated</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            class="focus:ring-blue-500 w-auto py-2.5 px-6 rounded-md border border-1 ml-2"
          >
            <option selected>Recently added</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
      <div
        class="filter flex overflow-x-auto sm:hidden border-b justify-between"
      >
        <span class="px-4 text-center shrink-0 border-b-4 border-primary pb-2">
          All
        </span>
        <span class="px-4 text-center shrink-0 pb-2"> Courses </span>
        <span class="px-4 text-center shrink-0 pb-2"> Wishlist </span>
        <span class="px-4 text-center shrink-0 pb-2"> Completed </span>
      </div>
      <div
        class="content flex gap-2 justify-evenly ld:justify-between mt-5 flex-wrap"
      >
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/vuejs.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            VUE JS SCRATCH COURSE
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal">
            4/10 Videos Completed
          </span>
        </div>
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/UIdesign.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            UI DESIGN FOR BEGINNERS
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal"> Not Yet Started </span>
        </div>
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/reactnative.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            MOBILE DEV REACT NATIVE
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal">
            3/8 Videos Completed
          </span>
        </div>
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/webdev.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            WEBSITE DEV ZERO TO HERO
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal"> Not Yet Started </span>
        </div>
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/AI.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            Adobe Illustrator Scretch Course
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal"> Not Yet Started </span>
        </div>
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/IOS.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            Bootcamp Vue.js Web Framework
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal"> Not Yet Started </span>
        </div>
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/design2.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            Design Fundamentals
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal"> Not Yet Started </span>
        </div>
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/IOS2.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            Ionic - Build iOS, Android & Web...
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal"> Not Yet Started </span>
        </div>
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/AI2.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            Adobe Illustrator Scretch Course
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal"> Not Yet Started </span>
        </div>
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/vuejs2.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            Bootcamp Vue.js Web Framework
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal text-primary">
            Completed!
          </span>
        </div>
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/design3.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            Design Fundamentals
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal text-primary">
            Completed!
          </span>
        </div>
        <div class="course-information w-[160px] sm:w-285 mb-10">
          <img
            class="w-full h-[90px] sm:h-161 rounded-23 mb-1"
            src="@/assets/course/ios3.png"
            alt=""
          />
          <h2 class="name text-sm sm:text-base font-bold">
            Ionic - Build iOS, Android & Web...
          </h2>
          <div class="author flex justify-content-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.575 6C10.575 5.13 9.87 4.425 9 4.425C8.13 4.425 7.425 5.13 7.425 6C7.425 6.87 8.13 7.575 9 7.575C9.87 7.575 10.575 6.87 10.575 6ZM13.575 12.75C13.575 12.27 11.2275 11.175 9 11.175C6.7725 11.175 4.425 12.27 4.425 12.75V13.575H13.575V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75Z"
                fill="#1B1B1B"
                fill-opacity="0.6"
              />
            </svg>

            <span class="text-sm text-teal-400 ml-1">Kitani Studio</span>
          </div>
          <span class="caption text-sm font-normal text-primary">
            Completed!
          </span>
        </div>
      </div>
    </div>
    <div class="navigation flex justify-between mx-auto max-w-fit">
      <div
        class="back w-8 h-8 sm:w-10 sm:h-10 content-center text-center border-light-gray border-2 rounded-md flex justify-center items-center mr-2 sm:mr-4"
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99998 11.2895C7.38998 10.8995 7.38998 10.2695 6.99998 9.87949L3.11998 5.99949L6.99998 2.11949C7.38998 1.72949 7.38998 1.09949 6.99998 0.70949C6.60998 0.319489 5.97998 0.319489 5.58998 0.70949L0.999981 5.29949C0.609981 5.68949 0.609981 6.31949 0.999981 6.70949L5.58998 11.2995C5.96998 11.6795 6.60998 11.6795 6.99998 11.2895Z"
            fill="#1B1B1B"
            fill-opacity="0.6"
          />
        </svg>
      </div>
      <div class="page text-xs sm:text-sm flex gap-1 sm:gap-2 text-light-gray">
        <span
          class="w-8 h-8 sm:w-10 sm:h-10 content-center text-center border-primary text-primary border-2 rounded-xl"
        >
          1
        </span>
        <span
          class="w-8 h-8 sm:w-10 sm:h-10 content-center text-center border-light-gray border-2 rounded-xl"
          >2</span
        >
        <span
          class="w-8 h-8 sm:w-10 sm:h-10 content-center text-center border-light-gray border-2 rounded-xl"
          >3</span
        >
        <span
          class="hidden sm:block w-8 h-8 sm:w-10 sm:h-10 content-center text-center border-light-gray border-2 rounded-xl"
          >4</span
        >
        <span
          class="hidden sm:block w-8 h-8 sm:w-10 sm:h-10 content-center text-center border-light-gray border-2 rounded-xl"
          >5</span
        >
        <span
          class="w-8 h-8 sm:w-10 sm:h-10 content-center text-center border-light-gray border-2 rounded-xl"
          >...</span
        >
        <span
          class="w-8 h-8 sm:w-10 sm:h-10 content-center text-center border-light-gray border-2 rounded-xl"
          >98</span
        >
      </div>
      <div
        class="next w-8 h-8 sm:w-10 sm:h-10 content-center text-center border-light-gray border-2 rounded-md flex justify-center items-center ml-2 sm:ml-4"
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00002 0.71051C0.61002 1.10051 0.61002 1.73051 1.00002 2.12051L4.88002 6.00051L1.00002 9.88051C0.61002 10.2705 0.61002 10.9005 1.00002 11.2905C1.39002 11.6805 2.02002 11.6805 2.41002 11.2905L7.00002 6.70051C7.39002 6.31051 7.39002 5.68051 7.00002 5.29051L2.41002 0.70051C2.03002 0.32051 1.39002 0.32051 1.00002 0.71051Z"
            fill="#1B1B1B"
            fill-opacity="0.6"
          />
        </svg>
      </div>
    </div>
  </section>
  <Contact />
</template>
<script>
import Contact from "@/components/ContactComponent.vue";
export default {
  components: { Contact },
};
</script>
