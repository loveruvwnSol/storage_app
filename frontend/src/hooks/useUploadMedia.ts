import { csrfCookie } from "@/api/csrfCookie";
import { API_ROUTE, apiAxios } from "@/consts/api";

export const useUploadMedia = () => {
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
        return response.data.media;
      }
    } catch (error) {
      console.log(error);
      alert("ファイルのアップロードに失敗しました");
    }
  };

  return { uploadMedia };
};
