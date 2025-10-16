/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Kapan perlu refresh data
      staleTime: 5 * 60 * 1000, // 5 menit
      gcTime: 10 * 60 * 1000, // 10 menit,
      retry: (failureCount, error) => {
        if (
          error instanceof AxiosError &&
          error.status &&
          error.status >= 400 &&
          error.status < 500
        ) {
          return false;
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      onError: (error: any) => {
        console.error(error);
      },
    },
  },
});

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
  Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<
  ReturnType<T>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<
  MutationFnType extends (...args: any) => Promise<any>,
> = UseMutationOptions<
  ApiFnReturnType<MutationFnType>,
  Error,
  Parameters<MutationFnType>[0]
>;
