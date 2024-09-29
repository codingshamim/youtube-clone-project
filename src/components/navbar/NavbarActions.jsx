import NavbarActionItem from "./NavbarActionItem";

export default function NavbarActions() {
  return (
    <div className="md:w-[30%] flex gap-2 lg:gap-4 justify-end items-center">
      <NavbarActionItem createMode={true}>
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 12V8C17 6.89543 16.1046 6 15 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V12ZM17 12L21 8V16L17 12Z"
            stroke="black"
            className="dark:stroke-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
          />
          <path
            d="M10 9V12M10 15V12M10 12H13M10 12H7"
            stroke="black"
            className="dark:stroke-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </NavbarActionItem>
      <span className="w-[40px] h-[40px] flex md:hidden justify-center items-center transition-all duration-150 hover:bg-secondaryBgWhite hover:dark:bg-secondaryBg cursor-pointer">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-black dark:fill-white"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-256.000000, -1139.000000)"
              className="fill-black dark:fill-white"
            >
              <path
                d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z"
                fillRule="nonzero"
              />
            </g>
          </g>
        </svg>
      </span>
      <NavbarActionItem>
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-black dark:fill-white"
        >
          <path
            d="M17.778 16.407c.395-.125.613-.547.487-.942s-.547-.613-.942-.487l.455 1.43ZM11.68 15.934c-.414.011-.74.355-.728.769s.355.74.769.728l-.041-1.5ZM16.876 16.013c.182.372.631.527 1.004.345s.527-.631.345-1.004L16.876 16.013ZM16.91 14.374l-.688.299c.005.01.01.02.015.03l.674-.33ZM15.942 10.806l.745-.09a3.727 3.727 0 00-.745.09ZM11.707 5.941c-.414 0-.75.336-.75.75s.336.75.75.75v-1.5ZM11.707 7.441c.414 0 .75-.336.75-.75s-.336-.75-.75-.75v1.5ZM7.458 10.807l-.74-.123a3.727 3.727 0 00.744.123ZM6.49 14.374l.674.33a4.89 4.89 0 00.015-.03l-.688-.3ZM5.176 15.355c-.182.372-.028.82.345 1.003.372.182.82.028 1.003-.345L5.176 15.355ZM10.957 6.691c0 .414.336.75.75.75s.75-.336.75-.75h-1.5ZM12.457 5c0-.414-.336-.75-.75-.75s-.75.336-.75.75h1.5ZM10.957 6.691c0 .414.336.75.75.75s.75-.336.75-.75h-1.5ZM12.457 5c0-.414-.336-.75-.75-.75s-.75.336-.75.75h1.5ZM6.078 14.977c-.395-.126-.817.091-.942.487-.126.395.091.817.487.942l.455-1.43ZM11.68 17.434c.414.011.76-.315.77-.728.011-.414-.315-.76-.729-.769l-.041 1.5ZM10.5 16.523c0-.414-.336-.75-.75-.75s-.75.336-.75.75h1.5ZM14.405 16.523c0-.414-.336-.75-.75-.75s-.75.336-.75.75h1.5ZM17.322 14.977C15.493 15.561 13.594 15.883 11.68 15.934l.041 1.5c2.055-.056 4.093-.402 6.057-1.028l-.455-1.43ZM18.224 15.355l-.64-1.31-.348.658.64 1.31.348-.658ZM17.598 14.075c-.464-1.067-.771-2.199-.912-3.36l-1.489.18c.158 1.304.503 2.577 1.025 3.777l1.376-.598ZM16.682 10.683c-.213-1.28-.666-2.468-1.488-3.344-.842-.897-2.008-1.398-3.488-1.398v1.5c1.113 0 1.867.362 2.395.924.548.584.917 1.453 1.102 2.563l1.479-.245ZM11.707 5.941c-1.48 0-2.648.501-3.493 1.397-.826.876-1.282 2.064-1.495 3.345l1.48.216c.185-1.11.556-1.979 1.108-2.564.532-.562 1.285-.924 2.4-.924v-1.5ZM6.713 10.717c-.141 1.16-.448 2.293-.912 3.36l1.376.598c.522-1.201.867-2.474 1.025-3.777l-1.489-.18ZM5.816 14.045l-.64 1.31.348.658.64-1.31-.348-.658ZM12.457 6.691V5h-1.5v1.691h1.5ZM12.457 6.691V5h-1.5v1.691h1.5ZM5.622 16.407c1.963.626 4.002.971 6.057 1.028l.041-1.5c-1.915-.052-3.814-.373-5.643-.957l-.455 1.43ZM9 16.523v.5h1.5v-.5H9ZM9 17.023c0 1.503 1.192 2.753 2.702 2.753v-1.5c-.646 0-1.202-.542-1.202-1.253H9ZM11.702 19.776c1.511 0 2.703-1.25 2.703-2.753h-1.5c0 .71-.556 1.253-1.203 1.253v1.5ZM14.405 17.023v-.5h-1.5v.5h1.5Z"
            className="fill-black dark:fill-white"
          />
        </svg>
      </NavbarActionItem>

      <div className="profile">
        <img
          className="w-full h-full object-cover rounded-sm"
          src="https://yt3.ggpht.com/17ILeKx3l9jcxKRpqdQnPZBoTaBUyxhiVw7_rfVUjEYBTBc65WpsKKrGzWTOfkQv7eobw-Zv=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </div>
    </div>
  );
}
