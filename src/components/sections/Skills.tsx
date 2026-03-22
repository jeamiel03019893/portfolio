import {
	Code,
	Server,
	Database,
	Container,
	Wrench,
	type LucideIcon,
} from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { cn } from '@/lib/utils';

type CategoryColor = {
	icon: string;
	ring: string;
	tagHover: string;
	header: string;
};

const categoryColors: Record<string, CategoryColor> = {
	Frontend: {
		icon: 'text-violet-400',
		ring: 'hover:ring-violet-500/50',
		tagHover:
			'hover:bg-violet-500/10 hover:text-violet-400 hover:border-violet-500/30',
		header: 'bg-violet-500/5',
	},
	Backend: {
		icon: 'text-emerald-400',
		ring: 'hover:ring-emerald-500/50',
		tagHover:
			'hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30',
		header: 'bg-emerald-500/5',
	},
	Databases: {
		icon: 'text-sky-400',
		ring: 'hover:ring-sky-500/50',
		tagHover:
			'hover:bg-sky-500/10 hover:text-sky-400 hover:border-sky-500/30',
		header: 'bg-sky-500/5',
	},
	'Infrastructure & DevOps': {
		icon: 'text-amber-400',
		ring: 'hover:ring-amber-500/50',
		tagHover:
			'hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/30',
		header: 'bg-amber-500/5',
	},
	Tools: {
		icon: 'text-rose-400',
		ring: 'hover:ring-rose-500/50',
		tagHover:
			'hover:bg-rose-500/10 hover:text-rose-400 hover:border-rose-500/30',
		header: 'bg-rose-500/5',
	},
};

const iconMap: Record<string, LucideIcon> = {
	Frontend: Code,
	Backend: Server,
	Databases: Database,
	'Infrastructure & DevOps': Container,
	Tools: Wrench,
};

const skillCategories = [
	{
		title: 'Frontend',
		skills: [
			'React',
			'TypeScript',
			'JavaScript',
			'HTML/CSS',
			'Mantine UI',
			'AG Grid',
			'Handsontable',
			'WordPress',
			'Bootstrap',
			'jQuery',
		],
	},
	{
		title: 'Backend',
		skills: [
			'Node.js',
			'Express.js',
			'Socket.IO',
			'PHP',
			'REST APIs',
			'JWT',
			'Multer',
		],
	},
	{
		title: 'Databases',
		skills: ['MongoDB', 'MSSQL', 'PostgreSQL', 'MySQL'],
	},
	{
		title: 'Infrastructure & DevOps',
		skills: ['Docker', 'NGINX', 'Linux'],
	},
	{
		title: 'Tools',
		skills: ['Git', 'Postman', 'VS Code'],
	},
];

export function Skills() {
	return (
		<section
			id='skills'
			className='py-20'
		>
			<div className='container mx-auto px-4'>
				<FadeIn>
					<p className='text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2'>
						Skills
					</p>
					<h2 className='text-3xl md:text-4xl font-black mb-12'>
						Tech Stack
					</h2>
				</FadeIn>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl'>
					{skillCategories.map((category, index) => {
						const Icon = iconMap[category.title] ?? Wrench;
						const colors =
							categoryColors[category.title] ??
							categoryColors.Frontend;
						return (
							<FadeIn
								key={category.title}
								delay={index * 100}
							>
								<div
									className={cn(
										'rounded-2xl border border-border p-5 bg-card transition-all duration-300 h-full',
										'hover:ring-2',
										colors.ring,
									)}
								>
									<div
										className={cn(
											'flex items-center gap-2 mb-4 -mx-5 -mt-5 px-5 pt-4 pb-3 rounded-t-2xl',
											colors.header,
										)}
									>
										<Icon
											className={cn(
												'h-5 w-5 shrink-0',
												colors.icon,
											)}
										/>
										<h3 className='font-semibold text-foreground'>
											{category.title}
										</h3>
									</div>

									<div className='flex flex-wrap gap-2'>
										{category.skills.map((skill) => (
											<span
												key={skill}
												className={cn(
													'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
													'text-muted-foreground border-border bg-transparent',
													'transition-colors cursor-default',
													colors.tagHover,
												)}
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							</FadeIn>
						);
					})}
				</div>
			</div>
		</section>
	);
}
