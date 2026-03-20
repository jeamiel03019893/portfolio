import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
	const { theme, setTheme, isLoading, loadingProgress } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	if (isLoading) {
		return (
			<div className='fixed inset-0 z-50 flex items-center justify-center bg-background h-screen w-screen'>
				<div className='flex flex-col items-center gap-3'>
					<div className='w-48 h-2 bg-muted rounded-full overflow-hidden'>
						<div
							className='h-full bg-primary transition-all duration-100 ease-out'
							style={{ width: `${loadingProgress}%` }}
						/>
					</div>
					<span className='text-sm text-muted-foreground'>
						{loadingProgress}%
					</span>
				</div>
			</div>
		);
	}

	return (
		<Button
			variant='ghost'
			size='icon'
			onClick={toggleTheme}
			className='h-9 w-9 cursor-pointer'
		>
			<Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}
