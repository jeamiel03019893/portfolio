import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const getSystemTheme = (): Theme =>
	window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

type ThemeProviderProps = {
	children: React.ReactNode;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	isLoading: boolean;
	loadingProgress: number;
};

const initialState: ThemeProviderState = {
	theme: 'dark',
	setTheme: () => null,
	isLoading: true,
	loadingProgress: 0,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
	children,
	storageKey = 'portfolio-theme',
	...props
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(
		() => (localStorage.getItem(storageKey) as Theme) || getSystemTheme(),
	);
	const [isLoading, setIsLoading] = useState(true);
	const [loadingProgress, setLoadingProgress] = useState(0);

	const simulateLoading = () => {
		setIsLoading(true);
		setLoadingProgress(0);

		const duration = 500;
		const interval = 20;
		const steps = duration / interval;
		const increment = 100 / steps;
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= 100) {
				setLoadingProgress(100);
				clearInterval(timer);
				setTimeout(() => {
					setIsLoading(false);
					setLoadingProgress(0);
				}, 100);
			} else {
				setLoadingProgress(Math.round(current));
			}
		}, interval);
	};

	useEffect(() => {
		simulateLoading();
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(theme);
	}, [theme]);

	const value = {
		theme,
		setTheme: (theme: Theme) => {
			localStorage.setItem(storageKey, theme);
			setTheme(theme);
			simulateLoading();
		},
		isLoading,
		loadingProgress,
	};

	return (
		<ThemeProviderContext.Provider
			{...props}
			value={value}
		>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined)
		throw new Error('useTheme must be used within a ThemeProvider');

	return context;
};
