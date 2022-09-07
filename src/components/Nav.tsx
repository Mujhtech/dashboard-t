import React, { useState } from "react";

export default function Nav() {
  const [tab, setTab] = useState("dashboard");
  return (
    <nav className="mt-0 md:mt-5 flex-1 px-2 md:px-4 bg-transparent space-y-5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-3">
          <a
            className={
              (tab == "dashboard"
                ? "active text-primary bg-primary bg-opacity-5"
                : "text-black") +
              " hover:text-secondary hover:bg-secondary hover:bg-opacity-5 group flex items-center px-2 py-2 text-md font-normal rounded-md cursor-pointer"
            }
          >
            <div className="h-5 w-5 mr-3 ml-2">
              <figure className="w-full transform duration-200 ease-in">
                <img
                  src="dashboard.svg"
                  alt="Dashboard"
                  width={20}
                  height={20}
                />
              </figure>
            </div>
            Dashboard
          </a>
          <a
            className={
              (tab == "dashboard"
                ? "active text-secondary bg-secondary bg-opacity-5"
                : "text-black") +
              " hover:text-secondary hover:bg-secondary hover:bg-opacity-5 group flex items-center px-2 py-2 text-md font-normal rounded-md cursor-pointer"
            }
          >
            <div className="h-5 w-5 mr-3 ml-2">
              <figure className="w-full transform duration-200 ease-in">
                <img src="edit.svg" alt="Edit" width={20} height={20} />
              </figure>
            </div>
            Item 1
          </a>
          <a
            className={
              (tab == "dashboard"
                ? "active text-secondary bg-secondary bg-opacity-5"
                : "text-black") +
              " hover:text-secondary hover:bg-secondary hover:bg-opacity-5 group flex items-center px-2 py-2 text-md font-normal rounded-md cursor-pointer"
            }
          >
            <div className="h-5 w-5 mr-3 ml-2">
              <figure className="w-full transform duration-200 ease-in">
                <img src="group.svg" alt="Group" width={20} height={20} />
              </figure>
            </div>
            Item 2
          </a>
          <a
            className={
              (tab == "dashboard"
                ? "active text-secondary bg-secondary bg-opacity-5"
                : "text-black") +
              " hover:text-secondary hover:bg-secondary hover:bg-opacity-5 group flex items-center px-2 py-2 text-md font-normal rounded-md cursor-pointer"
            }
          >
            <div className="h-5 w-5 mr-3 ml-2">
              <figure className="w-full transform duration-200 ease-in">
                <img
                  src="hourglass_empty.svg"
                  alt="Hour glass"
                  width={20}
                  height={20}
                />
              </figure>
            </div>
            Item 3
          </a>

          <div className="space-y-1">
            <div
              role="button"
              aria-label="accordion-item"
              className="flex items-center space-x-1.5 px-2 ml-2 pb-2"
            >
              <span className="text-support text-xs font-medium uppercase">
                Other 1
              </span>
            </div>
            <a
              className={
                (tab == "dashboard"
                  ? "active text-secondary bg-secondary bg-opacity-5"
                  : "text-black") +
                " hover:text-secondary hover:bg-secondary hover:bg-opacity-5 group flex items-center px-2 py-2 text-md font-normal rounded-md cursor-pointer"
              }
            >
              <div className="h-5 w-5 mr-3 ml-2">
                <figure className="w-full transform duration-200 ease-in">
                  <img
                    src="add_a_photo.svg"
                    alt="Add a photo"
                    width={20}
                    height={20}
                  />
                </figure>
              </div>
              Item 4
            </a>
            <a
              className={
                (tab == "dashboard"
                  ? "active text-secondary bg-secondary bg-opacity-5"
                  : "text-black") +
                " hover:text-secondary hover:bg-secondary hover:bg-opacity-5 group flex items-center px-2 py-2 text-md font-normal rounded-md cursor-pointer"
              }
            >
              <div className="h-5 w-5 mr-3 ml-2">
                <figure className="w-full transform duration-200 ease-in">
                  <img src="delete.svg" alt="Delete" width={20} height={20} />
                </figure>
              </div>
              Item 5
            </a>
          </div>
          <div className="space-y-1">
            <div
              role="button"
              aria-label="accordion-item"
              className="flex items-center space-x-1.5 px-2 ml-2 pb-2"
            >
              <span className="text-support text-xs font-medium uppercase">
                Other 2
              </span>
            </div>
            <a
              className={
                (tab == "dashboard"
                  ? "active text-secondary bg-secondary bg-opacity-5"
                  : "text-black") +
                " hover:text-secondary hover:bg-secondary hover:bg-opacity-5 group flex items-center px-2 py-2 text-md font-normal rounded-md cursor-pointer"
              }
            >
              <div className="h-5 w-5 mr-3 ml-2">
                <figure className="w-full transform duration-200 ease-in">
                  <img
                    src="subscriptions.svg"
                    alt="Subscription"
                    width={20}
                    height={20}
                  />
                </figure>
              </div>
              Item 6
            </a>
            <a
              className={
                (tab == "dashboard"
                  ? "active text-secondary bg-secondary bg-opacity-5"
                  : "text-black") +
                " hover:text-secondary hover:bg-secondary hover:bg-opacity-5 group flex items-center px-2 py-2 text-md font-normal rounded-md cursor-pointer"
              }
            >
              <div className="h-5 w-5 mr-3 ml-2">
                <figure className="w-full transform duration-200 ease-in">
                  <img
                    src="file_present.svg"
                    alt="File Present"
                    width={20}
                    height={20}
                  />
                </figure>
              </div>
              Item 7
            </a>
            <a
              className={
                (tab == "dashboard"
                  ? "active text-secondary bg-secondary bg-opacity-5"
                  : "text-black") +
                " hover:text-secondary hover:bg-secondary hover:bg-opacity-5 group flex items-center px-2 py-2 text-md font-normal rounded-md cursor-pointer"
              }
            >
              <div className="h-5 w-5 mr-3 ml-2">
                <figure className="w-full transform duration-200 ease-in">
                  <img src="alarm.svg" alt="Alarm" width={20} height={20} />
                </figure>
              </div>
              Item 8
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
