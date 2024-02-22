import '../src/app/globals.css';
import type { Preview } from '@storybook/react';

import {
	withThemeByClassName,
	withThemeFromJSXProvider
} from '@storybook/addon-themes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Red Hat Display', sans-serif;
    }
`;

export const decorators = [
	withThemeFromJSXProvider({
		GlobalStyles
	})
];

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},

	decorators: [
		withThemeByClassName({
			themes: {
				// nameOfTheme: 'classNameForTheme',
				light: '',
				dark: 'dark'
			},
			defaultTheme: 'light'
		})
	]
};

export default preview;
