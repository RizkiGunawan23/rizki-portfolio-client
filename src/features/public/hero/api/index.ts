import { HeroData } from "@/features/public/hero/types";
import { axiosInstance } from "@/lib/axios";

export const getHeroData = async () => {
  const response = await axiosInstance.get<HeroData>("/");
  console.log(response.data);
  return response.data;
};
