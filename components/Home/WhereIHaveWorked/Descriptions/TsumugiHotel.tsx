import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TsumugiHotel() {
  const tasks = [
    {
      text: "Highly experienced hotel receptionist with a proven track record of 9 months working in Japan.",
      keywords: ["Highly experienced", 'Japan'],
    },
    {
      text: "Skillfully managed guest check-ins and check-outs while delivering exceptional customer service.",
      keywords: ["exceptional customer service"],
    },
    {
      text: "Effective communicator and proficient in handling reservations, providing accurate information, and ensuring a an enjoyable guest experience.",
      keywords: ['Effective communicator'],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Hotel Receptionist <span className="text-AAsecondary">@ Tsumugi Hotel</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Kyoto, Japan {'<'}- -{'>'} Jun 2022 - Mar 2023</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={item.text + index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
