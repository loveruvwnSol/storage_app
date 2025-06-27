"use client";

import { useMedia } from "@/hooks/useMedia";
import { Item } from "../molecules/Item";
import { Input } from "../atoms/Input";

export const MyStorage = () => {
  const { media, uploadMedia, deleteMedia } = useMedia();
  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold">マイストレージ</h1>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {media.map((media, idx) => (
          <Item deleteMedia={deleteMedia} key={idx} media={media} />
        ))}
      </div>
      <div className="absolute bottom-5 right-5">
        <label
          className={
            "flex w-full justify-center rounded-md bg-indigo-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
          }
        >
          <Input
            type="file"
            hidden={true}
            onChange={(e) => {
              e.preventDefault();
              if (e.target.files?.[0]) {
                uploadMedia(e.target.files?.[0]);
              }
            }}
          />
          ファイルをアップロード
        </label>
      </div>
    </div>
  );
};
