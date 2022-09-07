import { useState } from "react";
import Sidebar from "./Sidebar";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [states, updateState] = useState({
    mobileSidebar: false,
  });

  const handleStateChange = (name: any, value: any) => {
    updateState({
      ...states,
      [name]: value,
    });
  };
  return (
    <>
      {/* <NewHeader /> */}
      <div className="h-screen flex overflow-hidden bg-white">
        <div className="fixed z-50"></div>
        <Sidebar
          mobileSidebar={states.mobileSidebar}
          onCloseMobileSidebar={() => handleStateChange("mobileSidebar", false)}
        />
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div
            onClick={() =>
              handleStateChange("mobileSidebar", !states.mobileSidebar)
            }
            className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3"
          >
            <button className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span className="sr-only">Open sidebar</span>
              <svg
                className="h-6 w-6"
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
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <main
            className="flex-1 flex flex-col bg-white focus:outline-none max-h-100 overflow-y-hidden"
            tabIndex={0}
          >
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
