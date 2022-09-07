import Nav from "./Nav";

type Props = {
  mobileSidebar: any;
  onCloseMobileSidebar: any;
};

export default function Sidebar({
  mobileSidebar,
  onCloseMobileSidebar,
}: Props) {
  return (
    <>
      <div className={(mobileSidebar ? "block" : "hidden") + " md:hidden"}>
        <div className="fixed inset-0 flex z-9999">
          <div className="">
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-primary bg-opacity-25"></div>
            </div>
          </div>
          <div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white h-full">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  onClick={() => onCloseMobileSidebar()}
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                >
                  <span className="sr-only">Close sidebar</span>
                  <svg
                    className="h-6 w-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center h-auto pt-5 pb-4 overflow-y-auto">
                <img
                  src="/mainstack.svg"
                  alt="Mainstack"
                  width={40}
                  height={40}
                  className="flex items-center justify-center"
                />
              </div>
              <div className="flex flex-col h-0 flex-1 bg-transparent">
                <div className="flex-1 flex flex-col pt-0 pb-0 md:pt-5 md:pb-4 overflow-y-auto">
                  <Nav />
                </div>
              </div>
              <div className="flex-shrink-0 flex border-t border-grey-divider border-opacity-50 py-4 md:py-7 mx-2 md:mx-4">
                <button
                  className={
                    "text-tertiary font-normal hover:text-secondary hover:bg-secondary hover:bg-opacity-5 group flex items-center px-2 py-2 text-md rounded-md w-full"
                  }
                >
                  <div className="h-5 w-5 mr-3 ml-2">
                    <figure className="w-full transform duration-200 ease-in">
                      <img
                        src="unsplash_F16KPYxfm6s.svg"
                        alt="Blessing Daniels"
                        height={32}
                        width={32}
                        className="rounded-full"
                      />
                    </figure>
                  </div>
                  Blessing Daniels
                </button>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-14"></div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-shrink-0 border-r border-r-tertiary border-opacity-10">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-transparent">
            <div className="flex-1 flex flex-col pt-0 pb-0 md:pt-5 md:pb-4 overflow-y-auto">
              <div className="px-2 md:px-4">
                <img
                  src="/mainstack.svg"
                  alt="Mainstack"
                  width={40}
                  height={40}
                />
              </div>

              <Nav />
            </div>
            <div className="flex-shrink-0 flex border-t border-grey border-opacity-10 py-4 md:py-7 mx-2 md:mx-4">
              <button
                className={
                  "text-tertiary font-normal hover:text-secondary hover:bg-secondary hover:bg-opacity-5 group flex items-center px-2 py-2 text-md rounded-md w-full step-five"
                }
              >
                <div className="h-5 w-5 mr-3 ml-2">
                  <figure className="w-full transform duration-200 ease-in">
                    <img
                      src="unsplash_F16KPYxfm6s.svg"
                      alt="Blessing Daniels"
                      height={32}
                      width={32}
                      className="rounded-full"
                    />
                  </figure>
                </div>
                Blessing Daniels
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
