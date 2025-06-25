import { csrfCookie } from "@/api/csrfCookie";
import { API_ROUTE, apiAxios } from "@/consts/api";
import { Media } from "@/types/media";
import { useEffect, useState } from "react";

export const useGetMedia = () => {
  const [media, setMedia] = useState<Media[]>([]);

  useEffect(() => {
    getMedia();
  }, []);

  const getMedia = async () => {
    try {
      await csrfCookie();
      const response = await apiAxios.get(API_ROUTE.GET_MEDIA.PATH);
      if (response.status === 200) {
        setMedia(response.data.media);
      }
    } catch (error) {
      console.log(error);
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
        alert("ファイルをアップロードしました");
        setMedia([...media, response.data.media]);
      }
    } catch (error) {
      console.log(error);
      alert("ファイルのアップロードに失敗しました");
    }
  };

  const deleteMedia = async (id: number) => {
    try {
      await csrfCookie();

      const response = await apiAxios.delete(
        API_ROUTE.DELETE_MEDIA.PATH + `/${id}`
      );
      if (response.status === 200) {
        setMedia(media.filter((media) => media.id !== id));
        alert("ファイルを削除しました");
      }
    } catch (error) {
      console.log(error);
      alert("ファイルの削除に失敗しました");
    }
  };

  return { media, uploadMedia, deleteMedia };
};
