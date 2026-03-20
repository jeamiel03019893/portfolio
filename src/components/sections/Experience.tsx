import { Briefcase } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const experiences = [
	{
		company: 'Mindanao Consolidated Cooperative Bank (MCCB)',
		period: 'February 2021 - December 2025',
		roles: [
			{
				title: 'Sr. Software Developer / Analyst',
				period: 'January 2023 - December 2025',
			},
			{
				title: 'Jr. Software Developer / Analyst',
				period: 'February 2021 - December 2022',
				description:
					'Developing full stack in-house systems to improve bank operations efficiency and compliance. Delivered multiple production-ready applications using NodeJS (Express), React, MongoDB, SQL and Docker, deployed through NGINX/Apache. Conducted requirement analysis and interviews with department heads and end-users for project planning. Collaborated closely with IT infrastructure personnel and core banking specialists. Built and maintained internal systems using JavaScript, PHP, Node.js, Express.js, React, MongoDB, and SQL.',
			},
		],
	},
	{
		company: 'Misamis Oriental Sport Complex (MOISC)',
		period: 'June 2018 - December 2020',
		roles: [
			{
				title: 'IT Staff',
				period: 'June 2018 - December 2020',
				description:
					'Installed, configured and maintained computers, printers and other IT equipment. Supported multimedia setups for presentations, meetings and live events. Managed the local area network (LAN) infrastructure, including troubleshooting connectivity issues.',
			},
		],
	},
];

export function Experience() {
	return (
		<section
			id='experience'
			className='py-20 bg-muted/30'
		>
			<div className='container mx-auto px-4'>
				<FadeIn>
					<h2 className='text-3xl md:text-4xl font-bold mb-12'>
						Experience
					</h2>
				</FadeIn>
				<div className='max-w-3xl space-y-8'>
					{experiences.map((exp, index) => (
						<FadeIn
							key={index}
							delay={index * 150}
						>
							<div className='group relative pl-8 pb-8 border-l-2 border-muted last:pb-0 hover:border-foreground/20 transition-colors duration-300'>
								<div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted group-hover:bg-primary transition-colors duration-300 flex items-center justify-center'>
									<Briefcase className='w-2 h-2 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300' />
								</div>
								<div className='space-y-2'>
									<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1'>
										<p className='text-primary/80 font-medium'>
											{exp.company}
										</p>
										<span className='text-sm text-muted-foreground'>
											{exp.period}
										</span>
									</div>
									<div>
										{exp.roles.map((role, roleIndex) => (
											<div
												key={roleIndex}
												className='space-y-1'
											>
												<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1'>
													<h3 className='text-lg font-semibold'>
														{role.title}
													</h3>
													<span className='text-sm text-muted-foreground'>
														{role.period}
													</span>
												</div>
												{role.description && (
													<p className='text-muted-foreground leading-relaxed'>
														{role.description}
													</p>
												)}
											</div>
										))}
									</div>
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
