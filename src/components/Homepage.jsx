import * as React from "react";

function Homepage(props) {
  return (
    <div className="flex flex-col items-center pt-12 bg-gray-50 rounded-3xl">
      <div className="flex gap-5 justify-between px-5 w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto text-4xl font-bold text-zinc-500">
          Event<span className="text-zinc-500"> Hive</span>
        </div>
        <div className="flex gap-5 justify-between text-base whitespace-nowrap">
          <div className="my-auto text-neutral-900">Login</div>
          <div className="justify-center px-10 py-4 text-center text-white rounded-md bg-zinc-500 max-md:px-5">
            Signup
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col px-9 py-12 mt-8 w-full max-w-[1320px] min-h-[596px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/assets/home-banner.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative self-center mt-16 ml-14 text-6xl font-bold text-center text-white uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Made for those <br />
          who do
        </div>
        <div className="flex relative gap-5 justify-between mt-8 mb-44 max-md:flex-wrap max-md:mb-10 max-md:max-w-full">
          <div className="flex justify-center items-center px-2.5 aspect-square bg-zinc-100 bg-opacity-20 h-[50px] rounded-[50px] w-[50px]">
            <img
              loading="lazy"
              src="/assets/Button.png"
              className="w-full aspect-square"
            />
          </div>
          <div className="flex justify-center items-center px-2.5 aspect-square bg-zinc-100 bg-opacity-20 h-[50px] rounded-[50px] w-[50px]">
            <img
              loading="lazy"
              src="/assets/Button (1).png"
              className="w-full aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex z-10 gap-5 justify-between px-16 py-9 mt-0 w-full rounded-3xl bg-neutral-900 max-w-[1200px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col flex-1 justify-between">
            <div className="text-base text-gray-50 whitespace-nowrap">
              Looking for
            </div>
            <div className="flex gap-5 justify-between px-4 py-2 mt-3 text-xs bg-gray-200 rounded-md text-neutral-900">
              <div className="self-start mt-2">Choose event type</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/29daab012856cffe2a967a319fefa174a60e1d0e95387dd4065aef9a30563732?"
                className="w-6 aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-between">
            <div className="text-base text-gray-50">Location</div>
            <div className="flex gap-5 justify-between px-4 py-2 mt-3 text-xs bg-gray-200 rounded-md text-neutral-900">
              <div className="self-start mt-2">Choose location</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/29daab012856cffe2a967a319fefa174a60e1d0e95387dd4065aef9a30563732?"
                className="w-6 aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-between">
            <div className="text-base text-gray-50">When</div>
            <div className="flex gap-5 justify-between px-4 py-2 mt-3 text-xs bg-gray-200 rounded-md text-neutral-900">
              <div className="flex-auto self-start mt-2">
                Choose data and time
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/29daab012856cffe2a967a319fefa174a60e1d0e95387dd4065aef9a30563732?"
                className="w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-6 rounded-md aspect-square bg-zinc-500 h-[70px] w-[70px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c96a92faebb37672cd3c89f43a35da95c00bc22afd74b550ceeaa69cf7d3d973?"
            className="w-full aspect-square"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between px-5 mt-24 w-full max-w-[1200px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto text-4xl font-bold text-zinc-500">
          Upcoming <span className="text-zinc-500">Events</span>
        </div>
        <div className="flex gap-5 justify-center self-start text-xs text-neutral-900 max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between px-4 py-2 whitespace-nowrap rounded-md bg-slate-500 bg-opacity-10">
            <div className="self-start mt-2">Weekdays</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93bdc497fbf82856ceca7f6bbe9f9a386be4ccbcc7a123d05d30a767377a2d61?"
              className="w-6 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between px-4 py-2 rounded-md bg-slate-500 bg-opacity-10">
            <div className="self-start mt-2">Event type</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93bdc497fbf82856ceca7f6bbe9f9a386be4ccbcc7a123d05d30a767377a2d61?"
              className="w-6 aspect-square"
            />
          </div>
          <div className="flex gap-3.5 justify-between px-4 py-2 rounded-md bg-slate-500 bg-opacity-10">
            <div className="self-start mt-2">Any category</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93bdc497fbf82856ceca7f6bbe9f9a386be4ccbcc7a123d05d30a767377a2d61?"
              className="w-6 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="px-5 mt-8 w-full max-w-[1200px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 w-full text-xs bg-white rounded-xl shadow text-zinc-500 max-md:mt-5">
              <div className="flex overflow-hidden relative flex-col items-start pt-2.5 pr-16 pb-12 pl-2.5 text-xs text-center whitespace-nowrap aspect-[1.45] max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="/assets/image3.png"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-2.5 py-1.5 mb-28 bg-white rounded-md aspect-[1.91] max-md:mb-10">
                  FREE
                </div>
              </div>
              <div className="mt-5 text-base text-black">
                BestSelller Book Bootcamp -write, Market & Publish Your Book
                -Lucknow
              </div>
              <div className="mt-6 whitespace-nowrap">
                Saturdat, March 18, 9.30PM
              </div>
              <div className="mt-7 whitespace-nowrap text-zinc-500">
                ONLINE EVENT - Attend anywhere
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 w-full text-xs bg-white rounded-xl shadow text-zinc-500 max-md:mt-5">
              <div className="flex overflow-hidden relative flex-col items-start pt-2.5 pr-16 pb-12 pl-2.5 text-xs text-center whitespace-nowrap aspect-[1.45] max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="/assets/image2.png"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-2.5 py-1.5 mb-28 bg-white rounded-md aspect-[1.91] max-md:mb-10">
                  FREE
                </div>
              </div>
              <div className="mt-5 text-base text-black">
                BestSelller Book Bootcamp -write, Market & Publish Your Book
                -Lucknow
              </div>
              <div className="mt-6 whitespace-nowrap">
                Saturdat, March 18, 9.30PM
              </div>
              <div className="mt-7 whitespace-nowrap text-zinc-500">
                ONLINE EVENT - Attend anywhere
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 w-full text-xs bg-white rounded-xl shadow text-zinc-500 max-md:mt-5">
              <div className="flex overflow-hidden relative flex-col items-start pt-2.5 pr-16 pb-12 pl-2.5 text-xs text-center whitespace-nowrap aspect-[1.45] max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="/assets/image1.png"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-2.5 py-1.5 mb-28 bg-white rounded-md aspect-[1.91] max-md:mb-10">
                  FREE
                </div>
              </div>
              <div className="mt-5 text-base text-black">
                BestSelller Book Bootcamp -write, Market & Publish Your Book
                -Lucknow
              </div>
              <div className="mt-6 whitespace-nowrap">
                Saturdat, March 18, 9.30PM
              </div>
              <div className="mt-7 whitespace-nowrap text-zinc-500">
                ONLINE EVENT - Attend anywhere
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-8 w-full max-w-[1200px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 w-full text-xs bg-white rounded-xl shadow text-zinc-500 max-md:mt-5">
              <div className="flex overflow-hidden relative flex-col items-start pt-2.5 pr-16 pb-12 pl-2.5 text-xs text-center whitespace-nowrap aspect-[1.45] max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="/assets/image1.png"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-2.5 py-1.5 mb-28 bg-white rounded-md aspect-[1.91] max-md:mb-10">
                  FREE
                </div>
              </div>
              <div className="mt-5 text-base text-black">
                BestSelller Book Bootcamp -write, Market & Publish Your Book
                -Lucknow
              </div>
              <div className="mt-6 whitespace-nowrap">
                Saturdat, March 18, 9.30PM
              </div>
              <div className="mt-7 whitespace-nowrap text-zinc-500">
                ONLINE EVENT - Attend anywhere
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 w-full text-xs bg-white rounded-xl shadow text-zinc-500 max-md:mt-5">
              <div className="flex overflow-hidden relative flex-col items-start pt-2.5 pr-16 pb-12 pl-2.5 text-xs text-center whitespace-nowrap aspect-[1.45] max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="/assets/image3.png"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-2.5 py-1.5 mb-28 bg-white rounded-md aspect-[1.91] max-md:mb-10">
                  FREE
                </div>
              </div>
              <div className="mt-5 text-base text-black">
                BestSelller Book Bootcamp -write, Market & Publish Your Book
                -Lucknow
              </div>
              <div className="mt-6 whitespace-nowrap">
                Saturdat, March 18, 9.30PM
              </div>
              <div className="mt-7 whitespace-nowrap text-zinc-500">
                ONLINE EVENT - Attend anywhere
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 w-full text-xs bg-white rounded-xl shadow text-zinc-500 max-md:mt-5">
              <div className="flex overflow-hidden relative flex-col items-start pt-2.5 pr-16 pb-12 pl-2.5 text-xs text-center whitespace-nowrap aspect-[1.45] max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="/assets/image2.png"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-2.5 py-1.5 mb-28 bg-white rounded-md aspect-[1.91] max-md:mb-10">
                  FREE
                </div>
              </div>
              <div className="mt-5 text-base text-black">
                BestSelller Book Bootcamp -write, Market & Publish Your Book
                -Lucknow
              </div>
              <div className="mt-6 whitespace-nowrap">
                Saturdat, March 18, 9.30PM
              </div>
              <div className="mt-7 whitespace-nowrap text-zinc-500">
                ONLINE EVENT - Attend anywhere
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center px-5 py-4 mt-10 text-base text-center text-white whitespace-nowrap rounded-md bg-zinc-500 max-md:px-5">
        Load more...
      </div>
      <div className="self-stretch px-20 mt-32 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/assets/banner.png"
              className="grow mt-0 w-full aspect-[1.79] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-lg font-bold text-gray-50 max-md:mt-10">
              <div className="text-4xl">Make your own Event </div>
              <div className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
              <div className="justify-center items-center px-16 py-6 mt-6 text-center text-white rounded-md shadow-2xl bg-zinc-500 max-md:px-5">
                Create Events
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-24 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
        <div className="self-center text-4xl font-bold text-center text-zinc-500">
          <span className="text-neutral-900">Join these </span>brands
        </div>
        <div className="self-center mt-10 text-lg font-bold text-center text-neutral-900 w-[656px] max-md:max-w-full">
          We've had the pleasure of working with industry-defining brands. These
          are just some of them.
        </div>
        <img
          loading="lazy"
          srcSet="/assets/clients.png"
          className="mt-14 w-full aspect-[6.25] max-md:mt-10 max-md:max-w-full"
        />
        {/* Trending */}
        <div className="mt-24 text-4xl font-bold text-zinc-500 max-md:mt-10 max-md:max-w-full">
          Trending <span className="text-zinc-500">colleges</span>
        </div>
        <div className="justify-center mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-between mx-auto w-full bg-white rounded-xl shadow max-md:mt-5">
                <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-end px-7 py-11 w-full font-medium text-center whitespace-nowrap rounded-xl aspect-[1.17] max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="/assets/card-image.png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  {/* <div className="flex relative gap-0 justify-center px-5 py-2 mt-52 text-base text-black bg-white rounded-3xl max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/713fd1987452f9f77ef24b1b7fea370a920036f3fc3b3f47bcd0d4a5cc9e5fba?"
                      className="w-6 aspect-square"
                    />
                    <div className="grow my-auto">4.8</div>
                  </div>
                  <div className="relative justify-center px-4 py-4 mt-48 text-sm tracking-wider text-white bg-black rounded-3xl max-md:mt-10">
                    EXCLUSIVE
                  </div> */}
                </div>
                <div className="self-start mt-6 ml-6 text-2xl font-bold whitespace-nowrap text-neutral-900 max-md:ml-2.5">
                  Harvard University
                </div>
                <div className="flex gap-5 justify-between px-6 pt-2.5 pb-6 mt-6 max-md:px-5">
                  <div className="flex-auto my-auto text-sm font-medium text-black">
                    Cambridge, Massachusetts, UK
                  </div>
                  <div className="flex justify-center items-center px-2.5 aspect-square bg-zinc-100 h-[50px] rounded-[50px] w-[50px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5e2546f78192138daec82c60a173c4d01d6d337e13f29da9f3ad86a9a12ede1?"
                      className="w-full aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-between mx-auto w-full bg-white rounded-xl shadow max-md:mt-5">
                <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-end px-7 py-11 w-full font-medium text-center whitespace-nowrap rounded-xl aspect-[1.17] max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="/assets/card-image-2.png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  {/* <div className="flex relative gap-0 justify-center px-5 py-2 mt-52 text-base text-black bg-white rounded-3xl max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/93b99c2eaac6e495a89636700afbdfe899b9f707ffb1a571bd8ab11ab1cb560d?"
                      className="w-6 aspect-square"
                    />
                    <div className="grow my-auto">4.8</div>
                  </div>
                  <div className="relative justify-center px-4 py-4 mt-48 text-sm tracking-wider text-white bg-black rounded-3xl max-md:mt-10">
                    EXCLUSIVE
                  </div> */}
                </div>
                <div className="self-start mt-6 ml-6 text-2xl font-bold text-black whitespace-nowrap max-md:ml-2.5">
                  Stanford University
                </div>
                <div className="flex gap-5 justify-between px-6 pt-2.5 pb-6 mt-6 max-md:px-5">
                  <div className="flex-auto my-auto text-sm font-medium text-black">
                    Stanford, California
                  </div>
                  <div className="flex justify-center items-center px-2.5 aspect-square bg-zinc-100 h-[50px] rounded-[50px] w-[50px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0890d75cbe3bfb67d4e3a530015d47fd5f3a9d5fcabc015b9b041f7aa6954599?"
                      className="w-full aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-between mx-auto w-full bg-white rounded-xl shadow max-md:mt-5">
                <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-end px-7 py-11 w-full font-medium text-center whitespace-nowrap rounded-xl aspect-[1.17] max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="/assets/card-image-3.png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  {/* <div className="flex relative gap-0 justify-center px-5 py-2 mt-52 text-base text-black bg-white rounded-3xl max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd44751dda66a71e0625e93b3e2ab59123ce89082b0e34deea6903e13156f3ff?"
                      className="w-6 aspect-square"
                    />
                    <div className="grow my-auto">4.8</div>
                  </div>
                  <div className="relative justify-center px-4 py-4 mt-48 text-sm tracking-wider text-white bg-black rounded-3xl max-md:mt-10">
                    EXCLUSIVE
                  </div> */}
                </div>
                <div className="self-start mt-6 ml-6 text-2xl font-bold text-black whitespace-nowrap max-md:ml-2.5">
                  Nanyang University
                </div>
                <div className="flex gap-5 justify-between px-6 pt-2.5 pb-6 mt-6 max-md:px-5">
                  <div className="flex-auto my-auto text-sm font-medium text-black">
                    Nanyang Ave, Singapura
                  </div>
                  <div className="flex justify-center items-center px-2.5 aspect-square bg-zinc-100 h-[50px] rounded-[50px] w-[50px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b072eb1d908d33634bbdf819e3b74542a4ddca2cac8a817f97ae77ad2f3b626?"
                      className="w-full aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center self-center px-5 py-4 mt-10 text-base text-center text-white whitespace-nowrap rounded-md bg-zinc-500 max-md:px-5">
          Load more...
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-col self-stretch px-16 pt-10 pb-6 mt-32 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-end self-center max-w-full w-[648px]">
          <div className="self-stretch text-4xl font-bold text-center text-zinc-500 max-md:max-w-full">
            <span className="text-gray-50">Event</span>{" "}
            <span className="text-zinc-500">Hive</span>
          </div>
          <div className="flex gap-2.5 justify-center mt-7 mr-5 max-w-full whitespace-nowrap w-[450px] max-md:flex-wrap max-md:mr-2.5">
            <div className="grow justify-center items-start py-5 pr-16 pl-4 text-xs bg-white rounded-md text-slate-500 max-md:pr-5">
              Enter your mail
            </div>
            <div className="grow justify-center px-10 py-4 text-base text-center text-white rounded-md bg-zinc-500 max-md:px-5">
              Subscribe
            </div>
          </div>
          <div className="flex gap-0 justify-center mt-8 text-base text-center text-white max-md:flex-wrap max-md:max-w-full">
            <div className="grow">Home</div>
            <div>About</div>
            <div className="flex-auto">Services</div>
            <div className="flex-auto">Get in touch</div>
            <div className="grow">FAQs</div>
          </div>
        </div>
        <div className="shrink-0 mt-7 h-px bg-white max-md:max-w-full" />
        <div className="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-2.5 items-center text-xs text-center text-white whitespace-nowrap">
            <div className="justify-center self-stretch px-5 py-2.5 rounded-md aspect-[2.26] bg-zinc-500">
              English
            </div>
            <div className="self-stretch my-auto">French</div>
            <div className="self-stretch my-auto">Hindi</div>
          </div>
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-4 justify-center px-px">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3154c4e1aff88efc93bc09c4ccef434c067a31ef5faa201d29d57318a4acf20c?"
                className="aspect-square w-[31px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c67c7831952fd57070cd499bcca6df52424205155184bf4b2e386b19e944287c?"
                className="aspect-square w-[31px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db877a0f4c077d292c2aa74deda0ba7e30af6b0e8c6e1be86b5482f0647148e5?"
                className="aspect-square w-[31px]"
              />
            </div>
            <div className="flex-auto self-start mt-3 text-base text-right text-white">
              Non Copyrighted © 2023 Upload by KV6002
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

