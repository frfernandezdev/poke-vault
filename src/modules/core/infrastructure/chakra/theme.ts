import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: true
}

const theme = extendTheme({
	config,
	fonts: {
		heading: 'var(--font-poppins)',
		body: 'var(--font-poppins)'
	},
	colors: {
		brown: {
			400: '#d04848',
			600: '#8f2323'
		}
	}
});	

export default theme;
