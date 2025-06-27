import { useMedia } from "@/hooks/useMedia";
import { BiDotsVerticalRounded, BiSolidFolder } from "react-icons/bi";
import { Item } from "../molecules/Item";

export const Home = () => {
  const { media, deleteMedia } = useMedia();
  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold">ホーム</h1>
      <div className="mt-10">
        <h2 className="text-xl">よく使うフォルダ</h2>
        <div className="mt-5 ml-2">
          <div className="flex items-center justify-between bg-gray-200 p-4 gap-3 rounded-3xl w-64">
            <div className="flex items-center gap-3">
              <BiSolidFolder fill="gray" size={24} />
              <p>Folder name</p>
            </div>
            <BiDotsVerticalRounded
              size={24}
              className="opacity-50 hover:bg-black/30 rounded-4xl"
            />
          </div>
        </div>
        <h2 className="text-xl mt-10">最近使用したファイル</h2>
        <div className="mt-5 ml-2">
          <div className="grid grid-cols-4 gap-5 mt-10">
            {media
              .filter((m, len) => len < 8)
              .map((media) => {
                return (
                  <Item
                    deleteMedia={deleteMedia}
                    key={media.id}
                    media={media}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
