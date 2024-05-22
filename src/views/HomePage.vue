<template>
  <section class="hero w-full mt-20 sm:mt-10">
    <div class="filter flex overflow-x-auto sm:hidden justify-between mb-2">
      <span class="px-4 text-center shrink-0 border-b-4 border-primary pb-2">
        All
      </span>
      <span class="px-4 text-center shrink-0 pb-2"> Illustrator </span>
      <span class="px-4 text-center shrink-0 pb-2"> Photoshop </span>
      <span class="px-4 text-center shrink-0 pb-2"> UI Desiign </span>
    </div>
    <div
      class="banner bg-teal-400 w-full flex justify-between rounded-2xl relative"
    >
      <div class="banner-img-left relative">
        <img src="@/assets/Pattern.png" alt="" />
        <div
          class="z-20 w-10/12 hero-content-left absolute sm:w-9/12 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-left"
        >
          <div>
            <p
              class="text-lg leading-5 text-white lg:text-5xl sm:text-3xl font-bold sm:leading-7 lg:leading-62px"
            >
              Learn something new everyday
            </p>
            <p class="text-xs text-white md:text-base font-normal mt-1 md:mt-2">
              Become professionals and ready to join the world
            </p>
            <button
              class="bg-white hover:bg-sky-400 hover:text-white text-teal-400 font-bold py-0.5 px-2 sm:py-1 sm:px-5 lg:py-3 lg:px-7 rounded-2xl mt-2 text-xs sm:mt-3 lg:mt-8 sm:text-base lg:text-xl"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <div class="banner-img-right relative">
        <img src="@/assets/right.png" alt="" />
        <div class="h-full banner-img-center absolute top-0 -translate-x-[30%]">
          <img class="h-full" src="@/assets/Overlay.png" alt="" />
        </div>
        <div
          class="banner-right-content flex justify-between absolute bottom-6 w-full sm:right-6 right-0"
        >
          <div class="person flex w-full sm:w-auto">
            <div
              class="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-4 border-white overflow-hidden"
            >
              <img src="@/assets/avatar.png" alt="" />
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
    <div class="py-4 flex items-center justify-center">
      <span
        class="rounded-full bg-teal-400 w-2 h-2 inline-block my-auto"
      ></span>
      <span class="rounded-full bg-slate-300 w-1 h-1 inline-block mx-1"></span>
      <span class="rounded-full bg-slate-300 w-1 h-1 inline-block"></span>
      <span class="rounded-full bg-slate-300 w-1 h-1 inline-block mx-1"></span>
    </div>
  </section>
  <section class="course">
    <div class="categories my-10 overflow-x-auto">
      <div class="flex items-center justify-start min-w-max">
        <button
          class="mr-2 text-sm font-normal text-teal-400 text-sm rounded-xl border border-teal-400 py-2 px-4"
        >
          All Recommendation
        </button>
        <button
          class="mr-2 text-sm font-normal text-light-gray rounded-xl border border-light-gray py-2 px-4"
        >
          Adobe IIlustrator
        </button>
        <button
          class="mr-2 text-sm font-normal text-light-gray rounded-xl border border-light-gray py-2 px-4"
        >
          Adobe Photoshop
        </button>
        <button
          class="mr-2 text-sm font-normal text-light-gray rounded-xl border border-light-gray py-2 px-4"
        >
          UI Design
        </button>
        <button
          class="mr-2 text-sm font-normal text-light-gray rounded-xl border border-light-gray py-2 px-4"
        >
          Web Programming
        </button>
        <button
          class="mr-2 text-sm font-normal text-light-gray rounded-xl border border-light-gray py-2 px-4"
        >
          Mobile Programming
        </button>
        <button
          class="mr-2 text-sm font-normal text-light-gray rounded-xl border border-light-gray py-2 px-4"
        >
          Backend Development
        </button>
        <button
          class="mr-2 text-sm font-normal text-light-gray rounded-xl border border-light-gray py-2 px-4"
        >
          Vue JS
        </button>
      </div>
    </div>
    <div class="lists-course">
      <div class="title">
        <h2 class="text-xl font-bold mb-1">More from Kitami Studio</h2>
        <p class="text-light-gray">
          We know the best things for You. Top pucks for you
        </p>
      </div>
      <div class="content flex gap-2 mt-5 overflow-x-auto flex-nowrap">
        <div
          v-for="data in kitaniCourse"
          :key="data.id"
          class="course-information min-w-[285px] mb-10"
        >
          <img
            class="w-full h-161 rounded-23 mb-1"
            :src="require(`@/assets/course/${data.img}`)"
            alt=""
          />
          <h2 class="name text-base font-bold">{{ data.name }}</h2>
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

            <span class="text-sm text-teal-400 ml-1">{{ data.author }}</span>
          </div>
          <span class="caption text-sm font-normal">
            {{ data.description }}
          </span>
          <div class="rate flex items-center">
            <div class="star">
              <ul class="flex">
                <li
                  v-for="(start, index) in Math.floor(data.rate)"
                  :key="index"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00005 11.6798L10.7667 13.3531C11.2734 13.6598 11.8934 13.2064 11.76 12.6331L11.0267 9.48643L13.4734 7.36643C13.92 6.97976 13.68 6.24643 13.0934 6.19976L9.87338 5.92643L8.61338 2.9531C8.38671 2.4131 7.61338 2.4131 7.38671 2.9531L6.12671 5.91976L2.90672 6.1931C2.32005 6.23976 2.08005 6.9731 2.52672 7.35976L4.97338 9.47976L4.24005 12.6264C4.10671 13.1998 4.72671 13.6531 5.23338 13.3464L8.00005 11.6798Z"
                      fill="#FFD130"
                    />
                  </svg>
                </li>
                <li v-if="data.rate % 2 !== 0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.87241 5.91634L13.0991 6.19634C13.6857 6.24301 13.9191 6.97634 13.4724 7.36301L11.0257 9.48301L11.7591 12.6363C11.8924 13.2097 11.2724 13.663 10.7657 13.3563L7.99907 11.683L5.23241 13.3497C4.72574 13.6563 4.10574 13.203 4.23907 12.6297L4.97241 9.48301L2.52574 7.36301C2.07907 6.97634 2.31907 6.24301 2.90574 6.19634L6.12574 5.92301L7.38574 2.94968C7.61241 2.40968 8.38574 2.40968 8.61241 2.94968L9.87241 5.91634ZM7.99907 4.23634V10.4363L10.5124 11.9563L9.84574 9.10301L12.0591 7.18301L9.13907 6.92968L7.99907 4.23634Z"
                      fill="#FFD130"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            <span class="text-sm font-normal text-light-gray">(1.2k)</span>
          </div>
          <div class="price">
            <span class="new font-bold text-xl"> ${{ data.price }} </span>
            <span
              class="old text-base font-normal text-light-gray line-through decoration-1"
            >
              ${{ data.old_price }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="lists-course">
      <div class="title">
        <h2 class="text-xl font-bold mb-1">Trending Course</h2>
        <p class="text-light-gray">
          We know the best things for You. Top picks for You.
        </p>
      </div>
      <div
        class="content flex gap-2 md:flex-wrap overflow-x-auto md:justify-evenly lg:justify-between mt-5"
      >
        <div
          v-for="data in trendingCourse"
          :key="data.id"
          class="course-information w-285 mb-10 shrink-0"
        >
          <img
            class="w-full h-161 rounded-23 mb-1"
            :src="require(`@/assets/course/${data.img}`)"
            alt=""
          />
          <router-link
            :to="{
              name: 'detail',
              params: { slug: data.slug },
            }"
          >
            <h2 class="name text-base font-bold">{{ data.name }}</h2>
          </router-link>
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

            <span class="text-sm text-teal-400 ml-1">{{ data.author }}</span>
          </div>
          <span class="caption text-sm font-normal">
            {{ data.description }}
          </span>
          <div class="rate flex items-center">
            <div class="star">
              <ul class="flex">
                <li
                  v-for="(start, index) in Math.floor(data.rate)"
                  :key="index"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00005 11.6798L10.7667 13.3531C11.2734 13.6598 11.8934 13.2064 11.76 12.6331L11.0267 9.48643L13.4734 7.36643C13.92 6.97976 13.68 6.24643 13.0934 6.19976L9.87338 5.92643L8.61338 2.9531C8.38671 2.4131 7.61338 2.4131 7.38671 2.9531L6.12671 5.91976L2.90672 6.1931C2.32005 6.23976 2.08005 6.9731 2.52672 7.35976L4.97338 9.47976L4.24005 12.6264C4.10671 13.1998 4.72671 13.6531 5.23338 13.3464L8.00005 11.6798Z"
                      fill="#FFD130"
                    />
                  </svg>
                </li>
                <li v-if="data.rate % 2 !== 0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.87241 5.91634L13.0991 6.19634C13.6857 6.24301 13.9191 6.97634 13.4724 7.36301L11.0257 9.48301L11.7591 12.6363C11.8924 13.2097 11.2724 13.663 10.7657 13.3563L7.99907 11.683L5.23241 13.3497C4.72574 13.6563 4.10574 13.203 4.23907 12.6297L4.97241 9.48301L2.52574 7.36301C2.07907 6.97634 2.31907 6.24301 2.90574 6.19634L6.12574 5.92301L7.38574 2.94968C7.61241 2.40968 8.38574 2.40968 8.61241 2.94968L9.87241 5.91634ZM7.99907 4.23634V10.4363L10.5124 11.9563L9.84574 9.10301L12.0591 7.18301L9.13907 6.92968L7.99907 4.23634Z"
                      fill="#FFD130"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            <span class="text-sm font-normal text-light-gray">(1.2k)</span>
          </div>
          <div class="price">
            <span class="new font-bold text-xl"> ${{ data.price }} </span>
            <span
              class="old text-base font-normal text-light-gray line-through decoration-1"
            >
              ${{ data.old_price }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="author mb-20">
    <div class="title mb-6">
      <h2 class="text-xl font-bold mb-1">Popular Instructor</h2>
      <p class="text-light-gray">
        We know the best things for You. Top picks for You.
      </p>
    </div>
    <div class="list-author flex gap-2 overflow-x-auto">
      <div class="w-285 h-400 relative shrink-0">
        <img
          class="w-full h-full rounded-18"
          src="@/assets/author/author1.png"
          alt=""
        />
        <div
          class="infor absolute text-center right-0 left-0 bottom-4 -translate-y-2 text-white"
        >
          <h1 class="name font-bold text-2xl">Alexander Bastian</h1>
          <p class="career font-normal text-base">Expert Mobile Engineer</p>
        </div>
      </div>
      <div class="w-285 h-400 relative shrink-0">
        <img
          class="w-full h-full rounded-18"
          src="@/assets/author/author2.png"
          alt=""
        />
        <div
          class="infor absolute text-center right-0 left-0 bottom-4 -translate-y-2 text-white"
        >
          <h1 class="name font-bold text-2xl">Labie Carthaline</h1>
          <p class="career font-normal text-base">Marketing Specialist</p>
        </div>
      </div>
      <div class="w-285 h-400 relative shrink-0">
        <img
          class="w-full h-full rounded-18"
          src="@/assets/author/author3.png"
          alt=""
        />
        <div
          class="infor absolute text-center right-0 left-0 bottom-4 -translate-y-2 text-white"
        >
          <h1 class="name font-bold text-2xl">Jonathan Doe</h1>
          <p class="career font-normal text-base">Financial Strategiest</p>
        </div>
      </div>
      <div class="w-285 h-400 relative shrink-0">
        <img
          class="w-full h-full rounded-18"
          src="@/assets/author/author4.png"
          alt=""
        />
        <div
          class="infor absolute text-center right-0 left-0 bottom-4 -translate-y-2 text-white"
        >
          <h1 class="name font-bold text-2xl">Kitani Sarasvati</h1>
          <p class="career font-normal text-base">Film Maker & Director</p>
        </div>
      </div>
    </div>
  </section>
  <Contact />
</template>
<script>
import Contact from "@/components/ContactComponent.vue";
import kitaniCourse from "@/Common/Item/kitaniCourse.json";
import trendingCourse from "@/Common/Item/trendingCourse.json";
export default {
  components: { Contact },
  setup() {
    return {
      kitaniCourse,
      trendingCourse,
    };
  },
};
</script>
