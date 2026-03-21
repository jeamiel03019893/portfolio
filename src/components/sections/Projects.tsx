import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/FadeIn';

const projects = [
	{
		title: 'ATM Reconciliation System',
		role: 'Solo Developer',
		description:
			'A system used for reconciliation of ATM transactions, categorizing transactions by branch and transaction types for accurate financial tracking.',
		tags: ['Node.js', 'Express', 'React', 'SQL'],
	},
	{
		title: 'BOHECO I Electric Payment Portal',
		role: 'Solo Developer',
		description:
			'Portal electric bill payment system which facilitates seamless transactions for electric billing based on posted billing information from BOHECO I Electric Cooperative.',
		tags: ['Node.js', 'React', 'MongoDB', 'Docker'],
	},
	{
		title: 'Regulatory Report System',
		role: 'Solo Developer',
		description:
			'Used to generate and output validated reports for submission to regulatory organizations, ensuring compliance with financial regulations.',
		tags: ['Node.js', 'Express', 'SQL', 'React'],
	},
	{
		title: 'CIC Report Generation',
		role: 'Solo Developer',
		description:
			'System for generating and outputting ZIP file reports for submission to the Credit Information Corporation (CIC).',
		tags: ['Node.js', 'Express', 'MongoDB'],
	},
	{
		title: 'SMS Notification System',
		role: 'Solo Developer',
		description:
			'Used for alert monitoring and client SMS notifications, keeping customers informed about their banking activities.',
		tags: ['Node.js', 'Express', 'MongoDB'],
	},
	{
		title: 'Organization File Repository',
		role: 'Solo Developer',
		description:
			'Centralization of updated forms, templates and dissemination of memorandum across the organization.',
		tags: ['React', 'Node.js', 'MongoDB'],
	},
	{
		title: 'IT Equipment Management System',
		role: 'Solo Developer',
		description:
			'Digital record system for all IT assets of the company including condition tracking and check/repair history.',
		tags: ['React', 'Node.js', 'MongoDB'],
	},
	{
		title: 'REPSShield',
		role: 'Fullstack Developer',
		description:
			'A comprehensive time tracking platform for real estate professionals to maintain IRS REPS compliance. REPSShield helps real estate professionals track and document their time to meet IRS Real Estate Professional Status (REPS) requirements. The platform integrates with Gmail, Google Calendar, and Microsoft Outlook to automatically capture and categorize work activities using AI-powered analysis, ensuring accurate compliance documentation.',
		tags: ['React', 'Typescript', 'Tailwind CSS'],
	},
];

export function Projects() {
	return (
		<section
			id='projects'
			className='py-20 bg-muted/30'
		>
			<div className='container mx-auto px-4'>
				<FadeIn>
					<h2 className='text-3xl md:text-4xl font-bold mb-12'>
						Featured Projects
					</h2>
				</FadeIn>
				<div className='grid md:grid-cols-2 gap-6 max-w-5xl'>
					{projects.map((project, index) => (
						<FadeIn
							key={project.title}
							delay={index * 100}
						>
							<article className='group h-full p-6 rounded-2xl bg-background border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg'>
								<div className='flex flex-col h-full'>
									<h3 className='text-lg font-semibold mb-2'>
										{project.title}
									</h3>
									<p className='text-muted-foreground text-sm leading-relaxed mb-4 flex-grow'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-2'>
										{project.tags.map((tag) => (
											<Badge
												key={tag}
												variant='secondary'
												className='text-xs transition-colors duration-300'
											>
												{tag}
											</Badge>
										))}
									</div>
								</div>
							</article>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
