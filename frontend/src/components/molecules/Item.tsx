import { Media } from "@/types/media";
import { BiDotsVerticalRounded, BiTrash } from "react-icons/bi";
import { Popout } from "./Popout";
import { useState } from "react";

type ItemProps = {
  deleteMedia: (id: number) => void;
  key?: number;
  media: Media;
};

export const Item: React.FC<ItemProps> = ({ deleteMedia, media }) => {
  const [isPopoutOpen, setIsPopoutOpen] = useState(false);
  return (
    <div className="relative border-2 border-gray-300 w-fit rounded-2xl">
      <img
        src={media.media_url}
        alt="user's media image"
        className="w-50 h-30 rounded-tl-2xl rounded-tr-2xl object-cover"
      />
      <div className="border-1 border-gray-300" />
      <div className="flex justify-between items-center w-50">
        <p className="p-4">
          {media.media_name.length > 11
            ? `${media.media_name.slice(0, 8)}...`
            : media.media_name}
        </p>
        <div className="relative">
          <BiDotsVerticalRounded
            onClick={() => setIsPopoutOpen(!isPopoutOpen)}
            size={24}
            className="opacity-50 hover:bg-black/30 rounded-4xl"
          />
          <Popout
            isPopoutOpen={isPopoutOpen}
            label="削除する"
            Icon={BiTrash}
            onClick={(e) => {
              e.preventDefault();
              deleteMedia(media.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};
