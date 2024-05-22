<template>
  <div
    v-show="status"
    class="bg-white sm:bg-black/70 fixed inset-0 z-30 h-screen flex items-center"
    @click="closeModal"
  >
    <div
      @click.stop=""
      class="flex justify-center w-800 sm:h-550 sm:m-auto rounded-md bg-white overflow-hidden relative"
    >
      <!-- Left: Image -->
      <div class="w-1/2 sm:block hidden">
        <img
          src="@/assets/signUp.png"
          alt="Placeholder Image"
          class="object-cover w-full h-full"
        />
        <div class="person flex items-center absolute bottom-6 left-6">
          <div
            class="w-11 h-11 rounded-full border-4 border-white overflow-hidden"
          >
            <img
              class="object-cover h-full w-full"
              src="@/assets/avtSignup.png"
              alt=""
            />
          </div>
          <div class="name my-auto text-white text-left ml-3.5">
            <p class="text-base leading-21px font-bold">Jane Kitani</p>
            <span class="text-sm">Graphic Designer</span>
          </div>
        </div>
      </div>
      <!-- Right: SignUp Form -->
      <div class="w-full sm:w-1/2">
        <div class="mx-6 mt-34px">
          <div class="logo sm:block hidden">
            <svg
              width="120"
              height="34"
              viewBox="0 0 120 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_1385)">
                <rect width="34" height="34" rx="17" fill="#3DCBB1" />
                <rect
                  x="3.71875"
                  y="3.71875"
                  width="26.5625"
                  height="26.5625"
                  rx="13.2812"
                  fill="#3DCBB1"
                />
                <path
                  d="M23.5307 18.9882C27.0502 18.9882 29.1925 21.2529 29.1925 25.4151V34.7188H23.5307V26.1802C23.5307 25.1396 23.041 24.4357 21.9699 24.4357C20.6539 24.4357 20.1642 25.4763 20.1642 26.7004V34.7188H14.5024V26.1802C14.5024 25.1396 14.0128 24.4357 12.9416 24.4357C11.6256 24.4357 11.136 25.4763 11.136 26.7004V34.7188H5.47417V19.4166H11.136V20.855C12.0235 19.7533 13.4313 18.9882 15.2981 18.9882C17.0426 18.9882 18.328 19.6309 19.1237 20.8856C20.103 19.7533 21.4802 18.9882 23.5307 18.9882Z"
                  fill="white"
                />
              </g>
              <path
                d="M50.0666 11.9256V21.7695H47.8166V16.046L45.2712 20.2226H45.0181L42.4727 16.046V21.7695H40.2227V11.9256H42.4727L45.1446 16.2991L47.8166 11.9256H50.0666ZM56.118 14.7381H58.3681L55.9633 21.5586C55.1758 23.7946 53.9242 24.6805 51.9554 24.5821V22.6133C52.9398 22.6133 53.4039 22.3039 53.7133 21.4461L50.9148 14.7381H53.2351L54.7961 19.0414L56.118 14.7381ZM63.9126 21.9664C60.9454 21.9664 58.7938 19.7445 58.7938 16.8476C58.7938 13.9506 60.9454 11.7287 63.9126 11.7287C65.6986 11.7287 67.2736 12.6147 68.1315 14.0069L66.1908 15.1319C65.7549 14.3725 64.9111 13.9225 63.9126 13.9225C62.1689 13.9225 61.0438 15.0897 61.0438 16.8476C61.0438 18.6054 62.1689 19.7726 63.9126 19.7726C64.9111 19.7726 65.7689 19.3226 66.1908 18.5632L68.1315 19.6882C67.2877 21.0805 65.7127 21.9664 63.9126 21.9664ZM72.5594 21.9664C70.4922 21.9664 68.8327 20.3492 68.8327 18.2538C68.8327 16.1585 70.4922 14.5413 72.5594 14.5413C74.6266 14.5413 76.286 16.1585 76.286 18.2538C76.286 20.3492 74.6266 21.9664 72.5594 21.9664ZM72.5594 19.9132C73.4735 19.9132 74.1766 19.2523 74.1766 18.2538C74.1766 17.2554 73.4735 16.5944 72.5594 16.5944C71.6453 16.5944 70.9422 17.2554 70.9422 18.2538C70.9422 19.2523 71.6453 19.9132 72.5594 19.9132ZM82.0214 14.7381H84.1309V21.7695H82.0214V21.1086C81.6417 21.6289 80.9386 21.9664 80.0105 21.9664C78.5901 21.9664 77.3807 20.9539 77.3807 19.0554V14.7381H79.4901V18.746C79.4901 19.6179 80.0386 20.0257 80.7136 20.0257C81.4871 20.0257 82.0214 19.5757 82.0214 18.5773V14.7381ZM87.7873 15.9897C88.0685 15.0475 89.0108 14.5975 89.8967 14.5975V16.9882C89.0248 16.8476 87.7873 17.1991 87.7873 18.5913V21.7695H85.6779V14.7381H87.7873V15.9897ZM92.6737 16.7913C92.6737 17.5929 96.1331 17.0585 96.1331 19.6601C96.1331 21.2773 94.7268 21.9664 93.2081 21.9664C91.8018 21.9664 90.733 21.432 90.1846 20.2929L92.0127 19.2523C92.1955 19.7867 92.5893 20.082 93.2081 20.082C93.7143 20.082 93.9674 19.9273 93.9674 19.6461C93.9674 18.8726 90.508 19.2804 90.508 16.8476C90.508 15.3147 91.8018 14.5413 93.2643 14.5413C94.4034 14.5413 95.4159 15.0475 96.0065 16.046L94.2065 17.0163C94.0096 16.6507 93.7284 16.3975 93.2643 16.3975C92.8987 16.3975 92.6737 16.5382 92.6737 16.7913ZM99.002 19.0976C99.2692 19.8289 99.9161 20.082 100.69 20.082C101.266 20.082 101.758 19.857 102.04 19.5476L103.727 20.5179C103.038 21.4742 101.997 21.9664 100.661 21.9664C98.2567 21.9664 96.766 20.3492 96.766 18.2538C96.766 16.1585 98.2848 14.5413 100.507 14.5413C102.56 14.5413 104.079 16.1304 104.079 18.2538C104.079 18.5492 104.051 18.8304 103.994 19.0976H99.002ZM98.9598 17.5226H101.983C101.758 16.7069 101.126 16.4116 100.493 16.4116C99.6911 16.4116 99.1567 16.8054 98.9598 17.5226ZM105.907 21.9664C105.176 21.9664 104.571 21.3617 104.571 20.6304C104.571 19.8992 105.176 19.2945 105.907 19.2945C106.639 19.2945 107.243 19.8992 107.243 20.6304C107.243 21.3617 106.639 21.9664 105.907 21.9664ZM109.708 14.1194C109.019 14.1194 108.443 13.5428 108.443 12.8537C108.443 12.1646 109.019 11.5881 109.708 11.5881C110.397 11.5881 110.974 12.1646 110.974 12.8537C110.974 13.5428 110.397 14.1194 109.708 14.1194ZM108.653 21.7695V14.7381H110.763V21.7695H108.653ZM115.682 21.9664C113.614 21.9664 111.955 20.3492 111.955 18.2538C111.955 16.1585 113.614 14.5413 115.682 14.5413C117.749 14.5413 119.408 16.1585 119.408 18.2538C119.408 20.3492 117.749 21.9664 115.682 21.9664ZM115.682 19.9132C116.596 19.9132 117.299 19.2523 117.299 18.2538C117.299 17.2554 116.596 16.5944 115.682 16.5944C114.768 16.5944 114.064 17.2554 114.064 18.2538C114.064 19.2523 114.768 19.9132 115.682 19.9132Z"
                fill="black"
              />
              <defs>
                <clipPath id="clip0_1_1385">
                  <rect width="34" height="34" rx="17" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p class="text-light-gray mt-2">
            Join us and get more benefits. We promise to keep your data safely.
          </p>
          <!-- Others signUp -->
          <button
            type="button"
            class="flex items-center justify-center text-base mt-6 w-full text-white bg-facebook focus:outline-none hover:bg-blue-400 focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl text py-2.5"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_285_2710)">
                <path
                  d="M19.8411 3.09286e-10H1.15106C0.84506 0.00207934 0.552299 0.125099 0.336656 0.342217C0.121013 0.559335 -7.06435e-06 0.852928 3.09286e-10 1.15894V19.8489C0.00207934 20.1549 0.125099 20.4477 0.342217 20.6633C0.559335 20.879 0.852928 21 1.15894 21H11.2179V12.8796H8.48794V9.69938H11.2179V7.36312C11.2179 4.6515 12.8756 3.16312 15.2946 3.16312C16.1109 3.15966 16.9268 3.20173 17.7384 3.28912V6.132H16.0584C14.7459 6.132 14.4926 6.762 14.4926 7.6755V9.69938H17.64L17.22 12.8796H14.49V21H19.8411C20.1484 21 20.4432 20.8779 20.6606 20.6606C20.8779 20.4432 21 20.1484 21 19.8411V1.15106C20.9979 0.84506 20.8749 0.552299 20.6578 0.336656C20.4407 0.121013 20.1471 -7.06435e-06 19.8411 3.09286e-10Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_285_2710">
                  <rect width="21" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span class="ml-2">Continue with Facebook</span>
          </button>
          <button
            type="button"
            class="flex items-center justify-center text-base mt-2 w-full text-white bg-black focus:outline-none hover:bg-zinc-600 focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl text py-2.5"
          >
            <svg
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8508 11.1566C13.8792 14.3346 16.5304 15.3922 16.5598 15.4056C16.5374 15.4802 16.1362 16.9128 15.163 18.3925C14.3217 19.6717 13.4486 20.9463 12.0732 20.9727C10.7217 20.9986 10.2871 20.1389 8.74201 20.1389C7.19734 20.1389 6.71451 20.9463 5.43518 20.9986C4.10755 21.0509 3.09657 19.6153 2.24832 18.3407C0.515024 15.7335 -0.809575 10.9733 0.969027 7.76014C1.8526 6.16446 3.43161 5.15402 5.14548 5.12811C6.44918 5.10223 7.67971 6.04065 8.47668 6.04065C9.27314 6.04065 10.7685 4.91212 12.3405 5.07786C12.9986 5.10636 14.8459 5.35444 16.0321 7.16093C15.9365 7.22257 13.8279 8.49974 13.8508 11.1566V11.1566ZM11.3109 3.35296C12.0157 2.46528 12.4901 1.22955 12.3607 0C11.3447 0.0424842 10.1162 0.704394 9.38742 1.59159C8.73433 2.37724 8.16236 3.63472 8.31669 4.83994C9.44912 4.93109 10.606 4.24121 11.3109 3.35297"
                fill="white"
              />
            </svg>
            <span class="ml-2">Continue with Apple</span>
          </button>
          <button
            type="button"
            class="border flex items-center justify-center text-base mt-2 w-full bg-white focus:outline-none hover:bg-zinc-200 hover:text-black focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl text py-2.5"
          >
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_311_105)">
                <mask
                  id="mask0_311_105"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="11"
                  y="8"
                  width="11"
                  height="11"
                >
                  <path
                    d="M21.08 10.7385C21.08 9.99401 21.0133 9.27805 20.8891 8.59082H11V12.6524H16.651C16.4075 13.9649 15.6677 15.077 14.5558 15.8215V18.4561H17.9491C19.9346 16.6281 21.08 13.9363 21.08 10.7385Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_311_105)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 18.4561H21.08V8.59082H11V18.4561Z"
                    fill="#5070A8"
                  />
                </g>
                <mask
                  id="mask1_311_105"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="12"
                  width="17"
                  height="10"
                >
                  <path
                    d="M10.9998 21.0002C13.8348 21.0002 16.2116 20.0599 17.9489 18.4563L14.5555 15.8218C13.6152 16.4518 12.4125 16.824 10.9998 16.824C8.265 16.824 5.9502 14.977 5.12458 12.4951H1.61663V15.2156C3.34436 18.6472 6.89519 21.0002 10.9998 21.0002Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_311_105)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.61663 21.0002H17.9489V12.4951H1.61663V21.0002Z"
                    fill="#2F9E4F"
                  />
                </g>
                <mask
                  id="mask2_311_105"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="5"
                  width="6"
                  height="11"
                >
                  <path
                    d="M5.12477 12.495C4.91473 11.8651 4.7954 11.1921 4.7954 10.5C4.7954 9.80803 4.91473 9.13507 5.12477 8.50505V5.78467H1.61682C0.905699 7.20214 0.5 8.80576 0.5 10.5C0.5 12.1944 0.905699 13.7981 1.61682 15.2155L5.12477 12.495Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask2_311_105)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.5 15.2155H5.12477V5.78467H0.5V15.2155Z"
                    fill="#EFB529"
                  />
                </g>
                <mask
                  id="mask3_311_105"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="0"
                  width="18"
                  height="9"
                >
                  <path
                    d="M10.9998 4.17613C12.5414 4.17613 13.9255 4.70594 15.0136 5.74637L18.0252 2.73478C16.2068 1.04049 13.83 0 10.9998 0C6.89519 0 3.34436 2.35297 1.61663 5.7846L5.12458 8.50498C5.9502 6.02319 8.265 4.17613 10.9998 4.17613Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask3_311_105)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.61663 8.50498H18.0252V0H1.61663V8.50498Z"
                    fill="#D53E36"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_311_105">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span class="ml-2">Continue with Google</span>
          </button>
          <p class="text-center pt-4 text-text-smCaption">or you can</p>
          <form action="#" method="POST" class="mt-4">
            <!-- Username Input -->
            <div class="relative">
              <input
                type="email"
                id="Email"
                class="rounded placeholder-gray-300 block w-full px-2 py-2.5 text-sm bg-login-input focus:ring-black-500 bg-opacity-90 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
                placeholder="Email Address"
                required
              />
              <div
                class="absolute inset-y-0 right-0 flex items-center pe-3 pointer-events-none"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.2882 9.66266H10.9795L14.6895 13.3902C15.0482 13.7489 15.0482 14.3352 14.6895 14.6939C14.3307 15.0527 13.7445 15.0527 13.3857 14.6939L9.66699 10.9752V10.2839L9.43074 10.0389C8.20574 11.0889 6.53449 11.6314 4.75824 11.3339C2.32574 10.9227 0.38324 8.89266 0.0857403 6.44266C-0.36926 2.74141 2.74574 -0.373593 6.44699 0.0814068C8.89699 0.378907 10.927 2.32141 11.3382 4.75391C11.6357 6.53016 11.0932 8.20141 10.0432 9.42641L10.2882 9.66266ZM1.79199 5.72516C1.79199 7.90391 3.55074 9.66266 5.72949 9.66266C7.90824 9.66266 9.66699 7.90391 9.66699 5.72516C9.66699 3.54641 7.90824 1.78766 5.72949 1.78766C3.55074 1.78766 1.79199 3.54641 1.79199 5.72516Z"
                    fill="#1B1B1B"
                    fill-opacity="0.1"
                  />
                </svg>
              </div>
            </div>
            <!-- Password Input -->
            <div class="relative mt-2">
              <input
                type="password"
                id="password"
                class="rounded placeholder-gray-300 block w-full px-2 py-2.5 text-sm bg-login-input focus:ring-black-500 bg-opacity-90 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
                placeholder="Pass word"
                required
              />
              <div
                class="absolute inset-y-0 right-0 flex items-center pe-3 pointer-events-none"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.2882 9.66266H10.9795L14.6895 13.3902C15.0482 13.7489 15.0482 14.3352 14.6895 14.6939C14.3307 15.0527 13.7445 15.0527 13.3857 14.6939L9.66699 10.9752V10.2839L9.43074 10.0389C8.20574 11.0889 6.53449 11.6314 4.75824 11.3339C2.32574 10.9227 0.38324 8.89266 0.0857403 6.44266C-0.36926 2.74141 2.74574 -0.373593 6.44699 0.0814068C8.89699 0.378907 10.927 2.32141 11.3382 4.75391C11.6357 6.53016 11.0932 8.20141 10.0432 9.42641L10.2882 9.66266ZM1.79199 5.72516C1.79199 7.90391 3.55074 9.66266 5.72949 9.66266C7.90824 9.66266 9.66699 7.90391 9.66699 5.72516C9.66699 3.54641 7.90824 1.78766 5.72949 1.78766C3.55074 1.78766 1.79199 3.54641 1.79199 5.72516Z"
                    fill="#1B1B1B"
                    fill-opacity="0.1"
                  />
                </svg>
              </div>
            </div>
            <!-- Login Button -->
            <button
              type="submit"
              class="text-base mt-4 w-full text-white bg-teal-400 focus:outline-none hover:bg-teal-200 hover:text-black focus:ring-4 focus:ring-gray-100 font-bold rounded-2xl text py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Login
            </button>
          </form>
          <!-- Login  Link -->
          <div class="mt-4 text-light-gray text-center">
            <span class="text-sm">Already have an Account?</span>
            <a
              @click="$emit('toggleLogin')"
              href="#"
              class="hover:underline text-primary text-xs"
              >Sign in</a
            >
          </div>
        </div>
      </div>
      <button class="top-5 right-5 absolute" @click="closeModal">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.19998 0.806638C9.07543 0.681802 8.90633 0.611647 8.72998 0.611647C8.55364 0.611647 8.38454 0.681802 8.25998 0.806638L4.99998 4.05997L1.73998 0.799971C1.61543 0.675136 1.44633 0.60498 1.26998 0.60498C1.09364 0.60498 0.924535 0.675136 0.79998 0.799971C0.53998 1.05997 0.53998 1.47997 0.79998 1.73997L4.05998 4.99997L0.79998 8.25997C0.53998 8.51997 0.53998 8.93997 0.79998 9.19997C1.05998 9.45997 1.47998 9.45997 1.73998 9.19997L4.99998 5.93997L8.25998 9.19997C8.51998 9.45997 8.93998 9.45997 9.19998 9.19997C9.45998 8.93997 9.45998 8.51997 9.19998 8.25997L5.93998 4.99997L9.19998 1.73997C9.45331 1.48664 9.45331 1.05997 9.19998 0.806638Z"
            fill="#1B1B1B"
            fill-opacity="0.9"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignUpModal",
  props: {
    status: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const closeModal = () => {
      emit("closeModal");
    };
    return {
      closeModal,
    };
  },
};
</script>
