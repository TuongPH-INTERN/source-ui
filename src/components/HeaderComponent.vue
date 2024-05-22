<template>
  <header
    class="header sm:static fixed top-0 right-0 left-0 flex justify-between bg-white border-b sm:border-none py-1 px-2 sm:px-0 z-50 sm:z-0"
  >
    <div class="logo flex items-center">
      <div class="mr-4 sm:hidden">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.33333 6.66667C2.875 6.66667 2.5 6.29167 2.5 5.83333C2.5 5.375 2.875 5 3.33333 5H16.6667C17.125 5 17.5 5.375 17.5 5.83333C17.5 6.29167 17.125 6.66667 16.6667 6.66667H3.33333ZM3.33333 10.8333H16.6667C17.125 10.8333 17.5 10.4583 17.5 10C17.5 9.54167 17.125 9.16667 16.6667 9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333ZM3.33333 15H16.6667C17.125 15 17.5 14.625 17.5 14.1667C17.5 13.7083 17.125 13.3333 16.6667 13.3333H3.33333C2.875 13.3333 2.5 13.7083 2.5 14.1667C2.5 14.625 2.875 15 3.33333 15Z"
            fill="#3DCBB1"
          />
        </svg>
      </div>
      <img src="@/assets/logo.svg" alt="" />
      <img class="ml-2" src="@/assets/name.svg" alt="" />
    </div>
    <div class="option hidden lg:hidden sm:block font-medium">
      <form class="max-w-24 mx-auto">
        <select
          id="countries"
          class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700"
        >
          <option selected>Browser</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </form>
    </div>
    <div class="hidden sm:flex search items-center">
      <form class="lg:w-[350px] w-[230px]">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <input
            type="input"
            id="default-search"
            class="block w-full p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-black-500 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
            placeholder="Search for cource"
            required
          />
          <div
            class="absolute inset-y-0 right-0 flex items-center pe-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-black-500 dark:text-black-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
    <div class="flex justify-between gap-2">
      <span class="my-auto hidden lg:block"> Become Instructor </span>
      <div class="cart-icon my-auto">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.99609 3C1.99609 3.55 2.44609 4 2.99609 4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H18.9961C19.5461 17 19.9961 16.55 19.9961 16C19.9961 15.45 19.5461 15 18.9961 15H7.99609L9.09609 13H16.5461C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.53609 2.57C5.37609 2.22 5.01609 2 4.63609 2H2.99609C2.44609 2 1.99609 2.45 1.99609 3ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM16.0061 20C16.0061 18.9 16.8961 18 17.9961 18C19.0961 18 19.9961 18.9 19.9961 20C19.9961 21.1 19.0961 22 17.9961 22C16.8961 22 16.0061 21.1 16.0061 20Z"
            fill="#1B1B1B"
          />
        </svg>
      </div>
      <div class="notify-icon my-auto lg:hidden">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.2901 17.04L18.0001 15.75V10.75C18.0001 7.68 16.3601 5.11 13.5001 4.43V3.75C13.5001 2.92 12.8301 2.25 12.0001 2.25C11.1701 2.25 10.5001 2.92 10.5001 3.75V4.43C7.63005 5.11 6.00005 7.67 6.00005 10.75V15.75L4.71005 17.04C4.08005 17.67 4.52005 18.75 5.41005 18.75H18.5801C19.4801 18.75 19.9201 17.67 19.2901 17.04ZM8.00005 16.75V10.75C8.00005 8.27 9.51005 6.25 12.0001 6.25C14.4901 6.25 16.0001 8.27 16.0001 10.75V16.75H8.00005ZM14.0001 19.75C14.0001 20.85 13.1001 21.75 12.0001 21.75C10.8901 21.75 10.0001 20.85 10.0001 19.75H14.0001Z"
            fill="#1B1B1B"
          />
        </svg>
      </div>
      <div
        class="avatar w-9 h-9 rounded-full overflow-hidden hidden sm:block lg:hidden"
      >
        <img class="w-full" src="@/assets/my-account.png" alt="" />
      </div>
      <div class="hidden lg:flex login justify-content-center">
        <button
          @click="$emit('toggleLogin')"
          type="button"
          class="text-gray-900 bg-white border-2 border-gray-600 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl px-6 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Login
        </button>
      </div>
      <div class="hidden lg:flex sign-up">
        <button
          @click="$emit('toggleSignUp')"
          type="button"
          class="inline-flex flex items-center text-white bg-teal-400 border-2 border-teal-400 focus:outline-none hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl text px-6 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.99992 0.333496C3.31992 0.333496 0.333252 3.32016 0.333252 7.00016C0.333252 10.6802 3.31992 13.6668 6.99992 13.6668C10.6799 13.6668 13.6666 10.6802 13.6666 7.00016C13.6666 3.32016 10.6799 0.333496 6.99992 0.333496ZM9.82659 4.1735C9.04659 3.3935 8.02659 3.00016 6.99992 3.00016V7.00016L4.17325 9.82683C5.73325 11.3868 8.26659 11.3868 9.83325 9.82683C11.3933 8.26683 11.3933 5.7335 9.82659 4.1735ZM1.66659 7.00016C1.66659 9.94683 4.05325 12.3335 6.99992 12.3335C9.94658 12.3335 12.3333 9.94683 12.3333 7.00016C12.3333 4.0535 9.94658 1.66683 6.99992 1.66683C4.05325 1.66683 1.66659 4.0535 1.66659 7.00016Z"
              fill="white"
            />
          </svg>
          <span class="ml-1"> Sign Up</span>
        </button>
      </div>
    </div>
  </header>
</template>
