import Form from "./components/Form";

function App() {
  return (
    <div className="max-w-sm text-center m-4 grid xl:max-w-xl ">
      <div className="w-1/5 pb-8 m-auto">
        <img src="/logo.svg" alt="" className="" />
      </div>
      <h1 className="text-customgray xl:text-4xl">
        We are launching{" "}
        <span className=" font-bold text-verydarkblue">soon!</span>
      </h1>
      <p className="text-sm text-verydarkblue mt-4 mb-6 xl:text-base">
        Subscribe and get notified
      </p>

      <Form />

      <img
        src="/illustration.png"
        alt="Illustration showing 4 charts in an uptrend direction"
        className="my-12"
      />

      <div className="place-self-center grid grid-cols-3 gap-2">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="feather feather-facebook fill-blue-500 rounded-full border w-10 h-10 hover:bg-blue-500 hover:cursor-pointer hover:fill-white hover:border-blue-500"
          >
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              className="translate-x-[6px] translate-y-2"
            />
          </svg>
        </a>

        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="feather feather-twitter fill-blue-500 rounded-full border w-10 h-10 hover:bg-blue-500 hover:cursor-pointer hover:fill-white hover:border-blue-500"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              className="translate-x-2 translate-y-2"
            ></path>
          </svg>
        </a>

        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2px"
            stroke-linecap="round"
            class="feather feather-instagram rounded-full text-blue-500 fill-white border w-10 h-10 hover:bg-blue-500 hover:cursor-pointer hover:fill-white hover:border-blue-500"
          >
            <rect
              x="2"
              y="2"
              rx="5"
              ry="5"
              className="translate-x-2 translate-y-[7px] fill-white w-5 h-5"
            />

            <path
              d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"
              className="translate-x-2 translate-y-[7px] "
            />
          </svg>
        </a>
      </div>
      <p className="text-sm font-light pt-4 text-customgray">
        &copy; Copyright Ping. All rights reserved.
      </p>
    </div>
  );
}

export default App;
