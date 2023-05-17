import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { highlightKeywords } from "./highlightKeywords";

import { Position } from './experience'

export default function ShowPosition({ position }: { position: Position }) {

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            {position.position} <span className="text-AAsecondary">@ {position.company}</span>
          </span>
          {/* Date and Location*/}
          <span className="font-mono text-xs text-gray-500">{position.location} {'<'}- -{'>'} {position.from} - {position.until}</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {position.tasks.map((item, index) => {
            return (
              <div key={item.text + index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: highlightKeywords(item.text, item.keywords),
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
