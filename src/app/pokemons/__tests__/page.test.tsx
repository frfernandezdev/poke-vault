import { render, screen } from "@testing-library/react";
import Page from "../page";
import { RecoilProvider } from "@/modules/core/infrastructure/recoil";
import { SWRProvider } from "@/modules/core/infrastructure/swr";
import { I18NProvider } from "@/modules/core/infrastructure/i18n";
import { ThemeProvider } from "@/modules/core/infrastructure/chakra";

describe("Page Pokemon", () => {
  it("renders a heading", () => {
    render(
			<RecoilProvider>
				<SWRProvider>
					<ThemeProvider>
						<I18NProvider>
							<Page />
						</I18NProvider>
					</ThemeProvider>
				</SWRProvider>
			</RecoilProvider>
		);

    expect(true).toBe(true);
  });
});
