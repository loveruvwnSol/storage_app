"use client";

import { Logo } from "../atoms/Logo";
import { Tab } from "../molecules/Tab";
import {
  BiArrowFromRight,
  BiHomeAlt,
  BiBook,
  BiCog,
  BiGroup,
} from "react-icons/bi";
import { Card } from "./Card";
import { useState } from "react";
import { Link } from "../atoms/Link";

export const Sidebar = () => {
  const SidebarContents = [
    { label: "ホーム", Icon: BiHomeAlt, link: "/" },
    { label: "マイストレージ", Icon: BiBook, link: "/my-storage" },
    { label: "共有ストレージ", Icon: BiGroup, link: "/share-storage" },
    { label: "設定", Icon: BiCog, link: "/settings" },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      className={`sticky top-0 ${
        isSidebarOpen ? "w-75" : "w-20"
      } h-screen bg-neutral-800 p-4 pt-8 text-white font-semibold`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Logo size={42} />
          <h1 className="text-xl mt-1 font-semibold">
            {isSidebarOpen ? "Storage App" : ""}
          </h1>
        </div>
        {isSidebarOpen ? (
          <BiArrowFromRight
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            size={28}
            fill="white"
            className="rounded-4xl hover:bg-white/30"
          />
        ) : (
          <></>
        )}
      </div>
      <div className="mt-15">
        {SidebarContents.map((content, idx) => {
          return (
            <Link key={idx} href={content.link}>
              <Tab isSidebarOpen={isSidebarOpen} label={content.label} Icon={content.Icon} />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Card isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
};
