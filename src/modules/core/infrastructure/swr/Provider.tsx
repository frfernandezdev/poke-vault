"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";
import fetcher from "./fetcher";

export default function SWRProvider({ children }: { children: ReactNode }) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
