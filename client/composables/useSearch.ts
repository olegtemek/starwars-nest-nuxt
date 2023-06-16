import { ISearch } from "~/interfaces/ISearch";

export const useSearch = () => {
  const results = async (query: string): Promise<ISearch> => {
    const fetch: ISearch = await $fetch(
      `${useRuntimeConfig().public.api}/search?query=${query}`
    );

    return fetch;
  };

  return { results };
};
