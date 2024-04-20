import { ReactNode } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/modules/core/infrastructure/chakra";
import { SWRProvider } from "@/modules/core/infrastructure/swr";
import { RecoilProvider } from "@/modules/core/infrastructure/recoil";
import { I18NProvider } from "@/modules/core/infrastructure/i18n";
import { fonts } from "@/modules/core/infrastructure/fonts";
import Drawer from "@/modules/core/presentation/organisms/Drawer";

import "./globals.css";

export const metadata: Metadata = {
  title: "PokeVault",
  description: "PokeVault",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
	const isDev = process.env.NODE_ENV === 'development';
  return (
    <html lang="en" suppressHydrationWarning={isDev} className={fonts.poppins.variable}>
      <body suppressHydrationWarning={isDev}>
				<RecoilProvider>
					<SWRProvider>
						<ThemeProvider>
							<I18NProvider>
								<Drawer/>
								{children}
							</I18NProvider>
						</ThemeProvider>
					</SWRProvider>
				</RecoilProvider>
      </body>
    </html>
  );
}
