<template>
  <section class="course-detail mt-10 mb-28 relative">
    <div class="title sm:block hidden">
      <p class="category text-light-gray text-base font-normal">
        Development / Mobile Engineer
      </p>
      <h1 class="name text-lg sm:text-xl md:text-title font-bold my-2">
        {{ thisCourse.name }}
      </h1>
      <div class="rating flex">
        <span class="text-base text-red-700 mr-4">{{ thisCourse.author }}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0001 17.5195L16.1501 20.0295C16.9101 20.4895 17.8401 19.8095 17.6401 18.9495L16.5401 14.2295L20.2101 11.0495C20.8801 10.4695 20.5201 9.36952 19.6401 9.29952L14.8101 8.88952L12.9201 4.42952C12.5801 3.61952 11.4201 3.61952 11.0801 4.42952L9.19007 8.87952L4.36007 9.28952C3.48007 9.35952 3.12007 10.4595 3.79007 11.0395L7.46007 14.2195L6.36007 18.9395C6.16007 19.7995 7.09007 20.4795 7.85007 20.0195L12.0001 17.5195Z"
            fill="#F4D876"
          />
        </svg>
        <span class="text-base font-normal"> {{ thisCourse.rate }} </span>
        <span class="ml-1 text-light-gray">(1,812 ratings)</span>
      </div>
    </div>
    <div class="inline-block">
      <div
        class="video rounded-30 overflow-hidden my-6 w-full md:w-66% float-left"
      >
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/VsFmb8-VuOE?si=rexlLCQTygek0qzU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div class="w-32% float-right sm:block hidden">
        <div class="information shadow-md">
          <div class="price w-5/6 mx-auto pt-6 pb-8">
            <div class="md:block hidden">
              <div class="mb-2">
                <span class="text-2xl new font-bold text-xl">
                  US${{ thisCourse.price }}
                </span>
                <span
                  class="old text-base font-normal text-light-gray line-through decoration-1"
                >
                  ${{ thisCourse.old_price }}
                </span>
              </div>
              <p class="rounded-sm inline text-white bg-fuchsia-600 w-auto p-1">
                {{
                  Math.floor(
                    ((thisCourse.old_price - thisCourse.price) * 100) /
                      thisCourse.old_price
                  )
                }}% OFF
              </p>
              <button
                type="button"
                class="text-xl mt-8 w-full text-white bg-teal-400 border-2 border-teal-400 focus:outline-none hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl text py-3 px-6 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Buy
              </button>
              <button
                type="button"
                class="text-xl mt-4 w-full flex items-center justify-center text-light-gray bg-white border border-light-gray focus:outline-none hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl py-3 px-6 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0004 5.70604C14.9071 3.47437 18.4387 2.56437 21.2987 4.51437C22.8154 5.55437 23.7687 7.30937 23.8337 9.15104C23.9746 13.3544 20.2587 16.7235 14.5712 21.8802L14.4521 21.9885C13.6287 22.7469 12.3612 22.7469 11.5379 21.9994L11.4296 21.9019L11.3641 21.8424C5.7135 16.7085 2.01598 13.3491 2.16706 9.16187C2.23206 7.30937 3.18539 5.55437 4.70206 4.51437C7.56206 2.55354 11.0937 3.47437 13.0004 5.70604ZM13.0004 20.396L13.1087 20.2877C18.2654 15.6185 21.6671 12.531 21.6671 9.4002C21.6671 7.23354 20.0421 5.60854 17.8754 5.60854C16.2071 5.60854 14.5821 6.68104 14.0187 8.1652H11.9929C11.4187 6.68104 9.79373 5.60854 8.12539 5.60854C5.95873 5.60854 4.33373 7.23354 4.33373 9.4002C4.33373 12.531 7.73539 15.6185 12.8921 20.2877L13.0004 20.396Z"
                    fill="#1B1B1B"
                    fill-opacity="0.6"
                  />
                </svg>

                <span class="ml-1"> Wishlist</span>
              </button>
            </div>
            <ul class="mt-6 text-sm sm:text-base">
              <li class="flex items-center mb-14px">
                <svg
                  class="mr-1"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 0H1C0.45 0 0 0.45 0 1V17C0 17.55 0.45 18 1 18H17C17.55 18 18 17.55 18 17V1C18 0.45 17.55 0 17 0ZM6 4H4V6H6V4ZM13 6H9C8.45 6 8 5.55 8 5C8 4.45 8.45 4 9 4H13C13.55 4 14 4.45 14 5C14 5.55 13.55 6 13 6ZM13 10H9C8.45 10 8 9.55 8 9C8 8.45 8.45 8 9 8H13C13.55 8 14 8.45 14 9C14 9.55 13.55 10 13 10ZM9 14H13C13.55 14 14 13.55 14 13C14 12.45 13.55 12 13 12H9C8.45 12 8 12.45 8 13C8 13.55 8.45 14 9 14ZM4 8H6V10H4V8ZM6 12H4V14H6V12ZM2 16H16V2H2V16Z"
                    fill="#1B1B1B"
                    fill-opacity="0.6"
                  />
                </svg>

                <span class="ml-4">22 Section</span>
              </li>
              <li class="flex items-center mb-14px">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 0.5H2C0.9 0.5 0 1.4 0 2.5V15.5C0 16.6 0.9 17.5 2 17.5H20C21.1 17.5 22 16.6 22 15.5V2.5C22 1.4 21.1 0.5 20 0.5ZM20 14.5C20 15.05 19.55 15.5 19 15.5H11V2.5H19C19.55 2.5 20 2.95 20 3.5V14.5ZM12.75 6H18.25C18.66 6 19 6.34 19 6.75C19 7.16 18.66 7.5 18.25 7.5H12.75C12.34 7.5 12 7.16 12 6.75C12 6.34 12.34 6 12.75 6ZM18.25 8.5H12.75C12.34 8.5 12 8.84 12 9.25C12 9.66 12.34 10 12.75 10H18.25C18.66 10 19 9.66 19 9.25C19 8.84 18.66 8.5 18.25 8.5ZM12.75 11H18.25C18.66 11 19 11.34 19 11.75C19 12.16 18.66 12.5 18.25 12.5H12.75C12.34 12.5 12 12.16 12 11.75C12 11.34 12.34 11 12.75 11Z"
                    fill="#1B1B1B"
                    fill-opacity="0.6"
                  />
                </svg>

                <span class="ml-4">152 Lectures</span>
              </li>
              <li class="flex items-center mb-14px">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 3.9001H12.41L15.35 0.960098C15.55 0.760098 15.55 0.450098 15.35 0.250098C15.15 0.0500977 14.84 0.0500977 14.64 0.250098L11 3.8901L7.36 0.250098C7.16 0.0500977 6.85 0.0500977 6.65 0.250098C6.45 0.450098 6.45 0.760098 6.65 0.960098L9.59 3.9001H2C0.9 3.9001 0 4.7901 0 5.9001V17.9001C0 19.0001 0.9 19.9001 2 19.9001H20C21.1 19.9001 22 19.0001 22 17.9001V5.9001C22 4.7901 21.1 3.9001 20 3.9001ZM9.5 15.0501L13.48 12.7701C14.15 12.3901 14.15 11.4201 13.48 11.0301L9.5 8.7501C8.83 8.3701 8 8.8601 8 9.6201V14.1701C8 14.9401 8.83 15.4301 9.5 15.0501ZM3 17.9001H19C19.55 17.9001 20 17.4501 20 16.9001V6.9001C20 6.3501 19.55 5.9001 19 5.9001H3C2.45 5.9001 2 6.3501 2 6.9001V16.9001C2 17.4501 2.45 17.9001 3 17.9001Z"
                    fill="#1B1B1B"
                    fill-opacity="0.6"
                  />
                </svg>

                <span class="ml-4">21h 33m total lenghts</span>
              </li>
              <li class="flex items-center mb-14px">
                <svg
                  class="mr-1"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 1.65179V1.45179C11 0.821794 11.63 0.371794 12.21 0.601794C15.6 1.89179 18 5.16179 18 9.00179C18 12.8418 15.6 16.1118 12.21 17.4018C11.63 17.6218 11 17.1818 11 16.5518V16.3518C11 15.9718 11.24 15.6418 11.6 15.5018C14.18 14.4718 16 11.9418 16 9.00179C16 6.06179 14.18 3.53179 11.6 2.50179C11.25 2.36179 11 2.03179 11 1.65179ZM0 7.00179V11.0018C0 11.5518 0.45 12.0018 1 12.0018H4L7.29 15.2918C7.92 15.9218 9 15.4718 9 14.5818V3.41179C9 2.52179 7.92 2.07179 7.29 2.70179L4 6.00179H1C0.45 6.00179 0 6.45179 0 7.00179ZM13.5 9.00179C13.5 7.23179 12.48 5.71179 11 4.97179V13.0218C12.48 12.2918 13.5 10.7718 13.5 9.00179Z"
                    fill="#1B1B1B"
                    fill-opacity="0.6"
                  />
                </svg>
                <span class="ml-4">English</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="title sm:hidden block">
        <h1 class="name text-lg sm:text-xl md:text-title font-bold my-2">
          {{ thisCourse.name }}
        </h1>
        <div class="rating flex">
          <span class="text-base text-red-700 mr-4">{{
            thisCourse.author
          }}</span>
        </div>
      </div>
      <div class="flex justify-between sm:hidden items-center mt-6">
        <div class="block sm:hidden">
          <div class="mb-2">
            <span class="text-2xl new font-bold text-xl">
              US${{ thisCourse.price }}
            </span>
            <span
              class="old text-base font-normal text-light-gray line-through decoration-1"
            >
              ${{ thisCourse.old_price }}
            </span>
          </div>
          <p class="rounded-sm inline text-white bg-fuchsia-600 w-auto p-1">
            {{
              Math.floor(
                ((thisCourse.old_price - thisCourse.price) * 100) /
                  thisCourse.old_price
              )
            }}% OFF
          </p>
        </div>
        <div class="block sm:hidden ml-3 mb-1 text-right">
          <span class="inline-flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0001 17.5195L16.1501 20.0295C16.9101 20.4895 17.8401 19.8095 17.6401 18.9495L16.5401 14.2295L20.2101 11.0495C20.8801 10.4695 20.5201 9.36952 19.6401 9.29952L14.8101 8.88952L12.9201 4.42952C12.5801 3.61952 11.4201 3.61952 11.0801 4.42952L9.19007 8.87952L4.36007 9.28952C3.48007 9.35952 3.12007 10.4595 3.79007 11.0395L7.46007 14.2195L6.36007 18.9395C6.16007 19.7995 7.09007 20.4795 7.85007 20.0195L12.0001 17.5195Z"
                fill="#F4D876"
              />
            </svg>
            <span class="text-base font-normal"> {{ thisCourse.rate }} </span>
          </span>
          <p class="ml-1 text-light-gray">(1,812 ratings)</p>
        </div>
      </div>
      <div class="mt-8 mb-4 float-left w-full sm:w-66%">
        <nav class="mb-6 font-medium text-sm sm:text-base">
          <span class="cursor-pointer">Description</span>
          <span class="cursor-pointer mx-8 border-b-2 border-red-700 pb-2"
            >Courses</span
          >
          <span class="cursor-pointer">Review</span>
        </nav>
        <div class="about-sourse">
          <h3 class="font-bold mb-4">About Course</h3>
          <p class="text-light-gray text-sm sm:text-base">
            {{ thisCourse.about }}
          </p>
        </div>
        <div class="review mt-8">
          <h3 class="font-bold">Review</h3>
          <div class="comment flex mt-4">
            <div
              class="avatar flex-shrink-0 w-33 h-33 overflow-hidden rounded-full"
            >
              <img
                class="w-full h-full object-cover"
                src="@/assets/user/user1.png"
                alt=""
              />
            </div>
            <div class="ml-4">
              <p class="name text-primary font-bold">Leonardo Da Vinci</p>
              <p class="time text-gray-200">today</p>
              <p class="content text-light-gray text-sm sm:text-base">
                Loved the course. I've learned some very subtle tecniques,
                expecially on leaves.
              </p>
            </div>
          </div>
          <div class="comment flex mt-4">
            <div
              class="avatar flex-shrink-0 w-33 h-33 overflow-hidden rounded-full"
            >
              <img
                class="w-full h-full object-cover"
                src="@/assets/user/user2.png"
                alt=""
              />
            </div>
            <div class="ml-4">
              <p class="name text-primary font-bold">Titania S</p>
              <p class="time text-gray-200">today</p>
              <p class="content text-light-gray text-sm sm:text-base">
                I loved the course, it had been a long time since I had
                experimented with watercolors and now I will do it more often
                thanks to Kitani Studio
              </p>
            </div>
          </div>
          <div class="comment flex mt-4">
            <div
              class="avatar flex-shrink-0 w-33 h-33 overflow-hidden rounded-full"
            >
              <img
                class="w-full h-full object-cover"
                src="@/assets/user/user3.png"
                alt=""
              />
            </div>
            <div class="ml-4">
              <p class="name text-primary font-bold">Zhirkov</p>
              <p class="time text-gray-200">today</p>
              <p class="content text-light-gray text-sm sm:text-base">
                Yes. I just emphasize that the use of Photoshop, for non-users,
                becomes difficult to follow. What requires a course to master
                it. Safe and very didactic teacher.
              </p>
            </div>
          </div>
          <div class="comment flex mt-4">
            <div
              class="avatar flex-shrink-0 w-33 h-33 overflow-hidden rounded-full"
            >
              <img
                class="w-full h-full object-cover"
                src="@/assets/user/user4.png"
                alt=""
              />
            </div>
            <div class="ml-4">
              <p class="name text-primary font-bold">Miphoska</p>
              <p class="time text-gray-200">today</p>
              <p class="content text-light-gray text-sm sm:text-base">
                I haven't finished the course yet, as I would like to have some
                feedback from the teacher, about the comments I shared on the
                forum 3 months ago, and I still haven't had any answer. I think
                the course is well structured, however the explanations and
                videos are very quick for beginners. However, it is good to go
                practicing.
              </p>
            </div>
          </div>
        </div>
        <div class="load-more mt-6 flex items-center mx-auto w-max text-center">
          <div class="mr-10">
            <select class="block focus:ring-blue-500 w-auto">
              <option selected>Browse</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <button
            class="rounded-md border border-1 border-black p-2 font-bold text-xs"
          >
            Load more review
          </button>
        </div>
      </div>
      <div class="float-right md:w-32% hidden md:block">
        <div class="learn-more bg-lear-more-bg h-631 rounded-18 relative">
          <img
            class="absolute bottom-0 right-0"
            src="@/assets/BgDetailPage.png"
          />
          <div class="content w-89% mx-auto pt-10">
            <span class="text-white bg-primary text-xs p-1 rounded-sm"
              >WEBINAR</span
            >
            <h2 class="text-slate-300 text-xl my-1">Ana Kursova</h2>
            <p class="text-white font-bold text-title">
              Masterclass in Design Thinking, Innovation & Creativity
            </p>
            <button
              type="button"
              class="text-xs mt-1 border border-yellow-400 text-yellow-400 rounded py-2 px-4"
            >
              <span class="ml-1">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mx-2 md:hidden sticky z-10 bg-white flex items-center justify-between py-2 px-1 rounded-3xl drop-shadow-2xl bottom-1.5"
    >
      <div class="sm:block hidden ml-3 mb-1">
        <div class="mb-2">
          <span class="text-2xl new font-bold text-xl">
            US${{ thisCourse.price }}
          </span>
          <span
            class="old text-base font-normal text-light-gray line-through decoration-1"
          >
            ${{ thisCourse.old_price }}
          </span>
        </div>
        <p class="rounded-sm inline text-white bg-fuchsia-600 w-auto p-1">
          {{
            Math.floor(
              ((thisCourse.old_price - thisCourse.price) * 100) /
                thisCourse.old_price
            )
          }}% OFF
        </p>
      </div>
      <div class="flex gap-2 w-full sm:w-max justify-around">
        <button
          type="button"
          class="px-14 text-xl text-white bg-teal-400 border-2 border-teal-400 focus:outline-none hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl text py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Buy
        </button>
        <button
          type="button"
          class="px-5 text-xl flex items-center justify-center text-light-gray bg-white border border-light-gray focus:outline-none hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.0004 5.70604C14.9071 3.47437 18.4387 2.56437 21.2987 4.51437C22.8154 5.55437 23.7687 7.30937 23.8337 9.15104C23.9746 13.3544 20.2587 16.7235 14.5712 21.8802L14.4521 21.9885C13.6287 22.7469 12.3612 22.7469 11.5379 21.9994L11.4296 21.9019L11.3641 21.8424C5.7135 16.7085 2.01598 13.3491 2.16706 9.16187C2.23206 7.30937 3.18539 5.55437 4.70206 4.51437C7.56206 2.55354 11.0937 3.47437 13.0004 5.70604ZM13.0004 20.396L13.1087 20.2877C18.2654 15.6185 21.6671 12.531 21.6671 9.4002C21.6671 7.23354 20.0421 5.60854 17.8754 5.60854C16.2071 5.60854 14.5821 6.68104 14.0187 8.1652H11.9929C11.4187 6.68104 9.79373 5.60854 8.12539 5.60854C5.95873 5.60854 4.33373 7.23354 4.33373 9.4002C4.33373 12.531 7.73539 15.6185 12.8921 20.2877L13.0004 20.396Z"
              fill="#1B1B1B"
              fill-opacity="0.6"
            />
          </svg>

          <span class="ml-1"> Wishlist</span>
        </button>
      </div>
    </div>
  </section>
  <Contact />
</template>
<script>
import Contact from "@/components/ContactComponent.vue";
import trendingCourse from "@/Common/Item/trendingCourse.json";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const trendingCourseData = ref(trendingCourse);
    const route = useRoute();
    const slug = route.params.slug;
    const thisCourse = trendingCourseData.value.find(
      (value) => value.slug === slug
    );
    console.log(thisCourse);
    return {
      thisCourse,
    };
  },
  components: { Contact },
};
</script>
