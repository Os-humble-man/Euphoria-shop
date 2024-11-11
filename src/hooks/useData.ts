import apiClient from "@/services/api-client";
import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  status: string;
  products: T[];
}

const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endPoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.products);
          setError(null);
        })
        .catch((err) => {
          if (err instanceof Error) {
            setError(err.message);
          }
        });
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
