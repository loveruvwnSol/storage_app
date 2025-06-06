import { csrfCookie } from "@/api/csrfCookie";
import { API_ROUTE, apiAxios } from "@/consts/api";
import { Media } from "@/types/media";
import { useEffect, useState } from "react";

export const useMedia = () => {
  const [media, setMedia] = useState<Media[]>([]);

  useEffect(() => {
    getMedia();
  }, []);

  const getMedia = async () => {
    try {
      await csrfCookie();
      const response = await apiAxios.get(API_ROUTE.GET_MEDIA.PATH);
      if (response.status === 200) {
        console.log(response.data);
        setMedia(response.data.media);
      }
    } catch (error) {
      console.log(error);
      alert("メディアの取得に失敗しました。");
    }
  };

  const uploadMedia = async (file: File) => {
    try {
      await csrfCookie();
      const formData = new FormData();
      formData.append("file", file);
      const response = await apiAxios.post(
        API_ROUTE.UPLOAD_MEDIA.PATH,
        formData
      );
      if (response.status === 200) {
        console.log(response.data);
        setMedia((prev) => [...prev, response.data.media]);
      }
    } catch (error) {
      console.log(error);
      alert("ファイルのアップロードに失敗しました");
    }
  };

  return { media, uploadMedia };
};
