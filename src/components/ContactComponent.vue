<template>
  <section class="contact mb-20 hidden md:block">
    <div
      class="bg-custom inline-block w-full rounded-xl overflow-hidden relative"
    >
      <img class="float-right" src="@/assets/contactBG.png" alt="" />
      <div class="content flex items-center justify-around absolute inset-0">
        <div class="left">
          <h1 class="text-title font-bold text-white">
            Join and get amazing discount
          </h1>
          <p class="text-2xl text-gray-300 font-normal mt-2">
            With our responsive themes and mobile and desktop apps
          </p>
        </div>
        <form class="flex justify-between w-1/4 lg:w-1/3 shrink-0 flex-wrap">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative w-9/12">
            <input
              type="input"
              id="default-search"
              class="rounded placeholder-gray-300 block w-full p-2 text-sm text-white border border-gray-300 bg-gray-100 focus:ring-black-500 bg-opacity-30 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
              placeholder="Email Address"
              required
            />
            <div
              class="absolute inset-y-0 right-0 flex items-center pe-3 pointer-events-none"
            >
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
                  d="M13.2883 12.6627H13.9796L17.6896 16.3902C18.0483 16.7489 18.0483 17.3352 17.6896 17.6939C17.3308 18.0527 16.7446 18.0527 16.3858 17.6939L12.6671 13.9752V13.2839L12.4308 13.0389C11.2058 14.0889 9.53455 14.6314 7.7583 14.3339C5.3258 13.9227 3.3833 11.8927 3.0858 9.44266C2.6308 5.74141 5.7458 2.62641 9.44705 3.08141C11.8971 3.37891 13.9271 5.32141 14.3383 7.75391C14.6358 9.53016 14.0933 11.2014 13.0433 12.4264L13.2883 12.6627ZM4.79205 8.72516C4.79205 10.9039 6.5508 12.6627 8.72955 12.6627C10.9083 12.6627 12.6671 10.9039 12.6671 8.72516C12.6671 6.54641 10.9083 4.78766 8.72955 4.78766C6.5508 4.78766 4.79205 6.54641 4.79205 8.72516Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-emerald-300 text-base py-1 px-2 rounded mt-2 lg:mt-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
