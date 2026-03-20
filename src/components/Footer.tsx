export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='py-8 border-t'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
					<p className='text-sm text-muted-foreground'>
						&copy; {currentYear} Emiel Azucena. All rights reserved.
					</p>
					<p className='text-sm text-muted-foreground'>
						Built with React & Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	);
}
