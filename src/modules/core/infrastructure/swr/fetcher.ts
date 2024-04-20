import { AxiosRequestConfig } from "axios";
import instance from "../axios";

const fetcher = <D extends { [key: string]: any }>(
  config: AxiosRequestConfig<D>
) => instance.request(config).then(res => res.data);

export default fetcher;

