<template>
  <section class="search mt-8 mb-20">
    <div class="filter sm:block hidden">
      <form action="" class="flex justify-between">
        <div class="w-3/5 option flex gap-3">
          <select
            class="block focus:ring-blue-500 text-sm md:px-2 lg:text-base lg:py-2.5 lg:px-5 rounded-sm border border-1"
          >
            <option selected>Programming</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            class="block focus:ring-blue-500 text-sm md:px-2 lg:text-base lg:py-2.5 lg:px-5 rounded-sm border border-1"
          >
            <option selected>All Duration</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            class="block focus:ring-blue-500 text-sm md:px-2 lg:text-base lg:py-2.5 lg:px-5 rounded-sm border border-1"
          >
            <option selected>All Level</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            class="block focus:ring-blue-500 text-sm md:px-2 lg:text-base lg:py-2.5 lg:px-5 rounded-sm border border-1"
          >
            <option selected>English</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <button
          type="submit"
          class="py-1.5 sm:px-3 md:px-8 lg:px-12 text-sm md:text-base text-white bg-primary focus:outline-none hover:bg-gray-200 hover:text-black focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl"
        >
          Apply Filter
        </button>
      </form>
    </div>
    <div class="sort mt-11 justify-between items-center sm:flex hidden">
      <span> Showing 2,312 results of Kitani Studio </span>
      <select
        class="block focus:ring-blue-500 w-auto py-2.5 px-5 rounded-sm border border-1"
      >
        <option selected>Top Rated</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
    <div class="result mt-16 sm:mt-8">
      <div class="title">
        <h2 class="font-bold text-xl sm:block hidden">Top Result</h2>
        <h2 class="font-bold text-xl sm:hidden block">Popular Search</h2>
        <p class="text-light-gray">
          We know the best things for You. Top picks for You.
        </p>
      </div>
      <div
        class="content flex gap-2 sm:flex-wrap md:justify-evenly lg:justify-between mt-5 overflow-x-auto"
      >
        <div class="course-information w-285 mb-10 shrink-0">
          <img
            class="w-full h-161 rounded-23 mb-1"
            src="@/assets/course/vuejs.png"
            alt=""
          />
          <h2 class="name text-base font-bold">VUE JS SCRATCH COURSE</h2>
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
            More than 8yr Experience as Illustrator. Learn how to becoming
            professional Illustrator Now...
          </span>
          <div class="rate flex items-center">
            <div class="star">
              <ul class="flex">
                <li>
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
                <li>
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
                <li>
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
                <li>
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
                <li>
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
            <span class="new font-bold text-xl"> $24.92 </span>
            <span
              class="old text-base font-normal text-light-gray line-through decoration-1"
            >
              $32.90
            </span>
          </div>
        </div>
        <div class="course-information w-285 mb-10 shrink-0">
          <img
            class="w-full h-161 rounded-23 mb-1"
            src="@/assets/course/UIdesign.png"
            alt=""
          />
          <h2 class="name text-base font-bold">UI DESIGN FOR BEGINNERS</h2>
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
            Learn how to make web application with Vue.js Framework.
          </span>
          <div class="rate flex items-center">
            <div class="star">
              <ul class="flex">
                <li>
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
                <li>
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
                <li>
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
                <li>
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
                <li>
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
            <span class="new font-bold text-xl"> $24.92 </span>
            <span
              class="old text-base font-normal text-light-gray line-through decoration-1"
            >
              $32.90
            </span>
          </div>
        </div>
        <div class="course-information w-285 mb-10 shrink-0">
          <img
            class="w-full h-161 rounded-23 mb-1"
            src="@/assets/course/reactnative.png"
            alt=""
          />
          <h2 class="name text-base font-bold">MOBILE DEV REACT NATIVE</h2>
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
            More than 8yr Experience as Illustrator. Learn how to becoming
            professional Illustrator Now...
          </span>
          <div class="rate flex items-center">
            <div class="star">
              <ul class="flex">
                <li>
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
                <li>
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
                <li>
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
                <li>
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
                <li>
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
            <span class="new font-bold text-xl"> $24.92 </span>
            <span
              class="old text-base font-normal text-light-gray line-through decoration-1"
            >
              $32.90
            </span>
          </div>
        </div>
        <div class="course-information w-285 mb-10 shrink-0">
          <img
            class="w-full h-161 rounded-23 mb-1"
            src="@/assets/course/webdev.png"
            alt=""
          />
          <h2 class="name text-base font-bold">WEBSITE DEV ZERO TO HERO</h2>
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
            More than 8yr Experience as Illustrator. Learn how to becoming
            professional Illustrator Now...
          </span>
          <div class="rate flex items-center">
            <div class="star">
              <ul class="flex">
                <li>
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
                <li>
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
                <li>
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
                <li>
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
                <li>
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
            <span class="new font-bold text-xl"> $24.92 </span>
            <span
              class="old text-base font-normal text-light-gray line-through decoration-1"
            >
              $32.90
            </span>
          </div>
        </div>
        <div class="course-information w-285 mb-10 shrink-0">
          <img
            class="w-full h-161 rounded-23 mb-1"
            src="@/assets/course/AI.png"
            alt=""
          />
          <h2 class="name text-base font-bold">
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
          <span class="caption text-sm font-normal">
            More than 8yr Experience as Illustrator. Learn how to becoming
            professional Illustrator Now...
          </span>
          <div class="rate flex items-center">
            <div class="star">
              <ul class="flex">
                <li>
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
                <li>
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
                <li>
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
                <li>
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
                <li>
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
            <span class="new font-bold text-xl"> $24.92 </span>
            <span
              class="old text-base font-normal text-light-gray line-through decoration-1"
            >
              $32.90
            </span>
          </div>
        </div>
        <div class="course-information w-285 mb-10 shrink-0">
          <img
            class="w-full h-161 rounded-23 mb-1"
            src="@/assets/course/IOS.png"
            alt=""
          />
          <h2 class="name text-base font-bold">
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
          <span class="caption text-sm font-normal">
            Learn how to make web application with Vue.js Framework.
          </span>
          <div class="rate flex items-center">
            <div class="star">
              <ul class="flex">
                <li>
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
                <li>
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
                <li>
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
                <li>
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
                <li>
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
            <span class="new font-bold text-xl"> $24.92 </span>
            <span
              class="old text-base font-normal text-light-gray line-through decoration-1"
            >
              $32.90
            </span>
          </div>
        </div>
        <div class="course-information w-285 mb-10 shrink-0">
          <img
            class="w-full h-161 rounded-23 mb-1"
            src="@/assets/course/design2.png"
            alt=""
          />
          <h2 class="name text-base font-bold">Design Fundamentals</h2>
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
            More than 8yr Experience as Illustrator. Learn how to becoming
            professional Illustrator Now...
          </span>
          <div class="rate flex items-center">
            <div class="star">
              <ul class="flex">
                <li>
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
                <li>
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
                <li>
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
                <li>
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
                <li>
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
            <span class="new font-bold text-xl"> $24.92 </span>
            <span
              class="old text-base font-normal text-light-gray line-through decoration-1"
            >
              $32.90
            </span>
          </div>
        </div>
        <div class="course-information w-285 mb-10 shrink-0">
          <img
            class="w-full h-161 rounded-23 mb-1"
            src="@/assets/course/IOS2.png"
            alt=""
          />
          <h2 class="name text-base font-bold">
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
          <span class="caption text-sm font-normal">
            More than 8yr Experience as Illustrator. Learn how to becoming
            professional Illustrator Now...
          </span>
          <div class="rate flex items-center">
            <div class="star">
              <ul class="flex">
                <li>
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
                <li>
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
                <li>
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
                <li>
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
                <li>
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
            <span class="new font-bold text-xl"> $24.92 </span>
            <span
              class="old text-base font-normal text-light-gray line-through decoration-1"
            >
              $32.90
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:block hidden show-more text-center">
      <button
        type="submit"
        class="py-2.5 px-12 text-base text-white bg-primary focus:outline-none hover:bg-gray-200 hover:text-black focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl"
      >
        Show More
      </button>
    </div>
    <div class="author">
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
