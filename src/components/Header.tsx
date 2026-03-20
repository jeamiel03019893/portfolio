import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Contact', href: '#contact' },
];

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b'>
			<nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
				<a
					href='#'
					className='text-xl font-bold tracking-tight'
				>
					Emiel Azucena
				</a>

				<ul className='hidden md:flex items-center gap-8'>
					{navItems.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className='text-sm text-muted-foreground hover:text-foreground transition-colors'
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>

				<div className='flex items-center gap-2'>
					<ThemeToggle />
					<Button
						asChild
						className='hidden md:inline-flex'
					>
						<a href='#contact'>Get in Touch</a>
					</Button>
					<Button
						variant='ghost'
						size='icon'
						className='md:hidden'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X className='h-5 w-5' />
						) : (
							<Menu className='h-5 w-5' />
						)}
					</Button>
				</div>
			</nav>

			{mobileMenuOpen && (
				<div className='md:hidden border-t bg-background'>
					<ul className='container mx-auto px-4 py-4 flex flex-col gap-4'>
						{navItems.map((item) => (
							<li key={item.label}>
								<a
									href={item.href}
									className='text-muted-foreground hover:text-foreground transition-colors'
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.label}
								</a>
							</li>
						))}
						<li>
							<Button
								asChild
								className='w-full'
							>
								<a
									href='#contact'
									onClick={() => setMobileMenuOpen(false)}
								>
									Get in Touch
								</a>
							</Button>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}
