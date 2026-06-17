import { FadeIn } from '@/components/FadeIn';
import { cn } from '@/lib/utils';

const companyColors = {
	blue: {
		border: 'border-blue-500',
		bg: 'bg-blue-500/5',
		dot: 'text-blue-500',
		pill: 'bg-blue-500/10 text-blue-400',
		tag: 'bg-blue-500/10 text-blue-400',
		bullet: 'text-blue-500',
	},
	amber: {
		border: 'border-amber-500',
		bg: 'bg-amber-500/5',
		dot: 'text-amber-500',
		pill: 'bg-amber-500/10 text-amber-400',
		tag: 'bg-amber-500/10 text-amber-400',
		bullet: 'text-amber-500',
	},
	violet: {
		border: 'border-violet-500',
		bg: 'bg-violet-500/5',
		dot: 'text-violet-500',
		pill: 'bg-violet-500/10 text-violet-400',
		tag: 'bg-violet-500/10 text-violet-400',
		bullet: 'text-violet-500',
	},
	emerald: {
		border: 'border-emerald-500',
		bg: 'bg-emerald-500/5',
		dot: 'text-emerald-500',
		pill: 'bg-emerald-500/10 text-emerald-400',
		tag: 'bg-emerald-500/10 text-emerald-400',
		bullet: 'text-emerald-500',
	},
};

const experiences = [
	{
		company: 'TaoCrowd Inc.',
		period: 'Apr 2026 – May 2026',
		color: 'blue' as const,
		roles: [
			{
				title: 'Full Stack Developer – Contractor',
				period: 'Apr 2026 – May 2026',
				bullets: [
					'Maintained a Next.js application with full-stack architecture, contributing across both frontend and backend development.',
					'Developed responsive and dynamic user interfaces and built backend API logic with PostgreSQL.',
				],
				tags: ['Next.js', 'PostgreSQL'],
			},
		],
	},
	{
		company: 'REPSShield',
		period: 'Nov 2025 – Apr 2026',
		color: 'amber' as const,
		roles: [
			{
				title: 'Full Stack Developer – Contractor',
				period: 'Nov 2025 – Apr 2026',
				bullets: [
					'Implemented full-stack features for the REPSShield app using React, Node.js, and PostgreSQL across frontend and backend tickets.',
					'Delivered responsive UI components and backend API endpoints, maintaining production quality under independent ownership.',
				],
				tags: ['React', 'Node.js', 'PostgreSQL'],
			},
		],
	},
	{
		company: 'Mindanao Consolidated Cooperative Bank (MCCB)',
		period: '2021 – 2025',
		color: 'violet' as const,
		roles: [
			{
				title: 'Sr. Software Developer / Analyst',
				period: 'Jan 2023 – Dec 2025',
				bullets: [
					'Built and deployed multiple full-stack production systems used daily across bank departments — covering financial reconciliation, regulatory reporting, and internal operations.',
					'Integrated third-party REST APIs including an SMS gateway serving bulk notifications to cooperative members, and core banking connectors for real-time transaction synchronization.',
					'Owned the complete SDLC as sole developer: requirements gathering, design, build, test, deploy, and ongoing maintenance — all under regulatory audit and compliance constraints.',
					'Led stakeholder interviews with department heads and end-users to translate complex banking workflows into precise technical specifications and working software.',
					'Reduced deployment complexity by containerizing applications with Docker; configured Nginx and Apache as reverse proxies for production stability.',
					'Modernized and extended legacy Laravel/PHP systems, restoring maintainability while preserving compliance-critical functionality.',
				],
				tags: [
					'Node.js',
					'React',
					'TypeScript',
					'MongoDB',
					'MSSQL',
					'Docker',
				],
			},
			{
				title: 'Jr. Software Developer / Analyst',
				period: 'Feb 2021 – Dec 2022',
				bullets: [
					'Contributed to full-stack banking applications using Node.js and React, working on both frontend and backend tasks.',
					'Drove code quality through peer reviews and technical discussions, fostering consistent engineering standards across the team.',
					'Resolved production defects in compliance-sensitive systems, maintaining operational stability during banking hours.',
				],
				tags: ['Node.js', 'PHP', 'MongoDB', 'MySQL'],
			},
		],
	},
	{
		company: 'Misamis Oriental Sport Complex (MOISC)',
		period: '2018 – 2020',
		color: 'emerald' as const,
		roles: [
			{
				title: 'IT Staff',
				period: 'Jun 2018 – Dec 2020',
				bullets: [
					'Administered the facility\'s IT infrastructure — computers, network equipment, and multimedia systems — keeping systems operational across daily facility operations.',
					'Set up and operated technical requirements for live events including streaming, projection, and audio systems.',
				],
				tags: ['Networking', 'LAN', 'Hardware', 'Multimedia'],
			},
		],
	},
];

export function Experience() {
	return (
		<section
			id='experience'
			className='py-20'
		>
			<div className='container mx-auto px-4'>
				<FadeIn>
					<p className='text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2'>
						Experience
					</p>
					<h2 className='text-3xl md:text-4xl font-black mb-12'>
						Where I've Worked
					</h2>
				</FadeIn>

				<div className='max-w-3xl space-y-6'>
					{experiences.map((exp, expIndex) => {
						const c = companyColors[exp.color];
						return (
							<FadeIn
								key={exp.company}
								delay={expIndex * 150}
							>
								<div className='rounded-2xl border bg-card hover:shadow-md transition-shadow duration-300 overflow-hidden'>
									{/* Company header */}
									<div
										className={cn(
											'flex items-center justify-between gap-4 px-6 py-4 border-l-4',
											c.border,
											c.bg,
										)}
									>
										<p className='font-semibold text-foreground'>
											<span className={cn('mr-1', c.dot)}>
												●
											</span>
											{exp.company}
										</p>
										<span
											className={cn(
												'shrink-0 rounded-full text-xs font-medium px-2.5 py-1',
												c.pill,
											)}
										>
											{exp.period}
										</span>
									</div>

									{/* Roles */}
									<div className='divide-y'>
										{exp.roles.map((role, roleIndex) => (
											<div
												key={roleIndex}
												className='px-6 py-5 space-y-3'
											>
												{/* Role title + date */}
												<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1'>
													<h3 className='text-lg font-semibold'>
														{role.title}
													</h3>
													<span
														className={cn(
															'rounded-full text-xs font-medium px-2.5 py-1 w-fit',
															c.pill,
														)}
													>
														{role.period}
													</span>
												</div>

												{/* Bullets */}
												<ul className='space-y-1.5'>
													{role.bullets.map(
														(bullet, i) => (
															<li
																key={i}
																className='flex gap-2 text-sm text-muted-foreground leading-relaxed'
															>
																<span
																	className={cn(
																		'mt-0.5 shrink-0',
																		c.bullet,
																	)}
																>
																	•
																</span>
																{bullet}
															</li>
														),
													)}
												</ul>

												{/* Tags */}
												<div className='flex flex-wrap gap-1.5 pt-1'>
													{role.tags.map((tag) => (
														<span
															key={tag}
															className={cn(
																'rounded-full text-xs font-medium px-2.5 py-1',
																c.tag,
															)}
														>
															{tag}
														</span>
													))}
												</div>
											</div>
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
