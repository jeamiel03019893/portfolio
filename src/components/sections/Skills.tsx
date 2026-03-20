import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/FadeIn';

const skillCategories = [
	{
		title: 'Frontend',
		skills: ['React', 'JavaScript', 'HTML/CSS'],
	},
	{
		title: 'Backend',
		skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs'],
	},
	{
		title: 'Databases',
		skills: ['MySQL', 'MSSQL', 'MongoDB'],
	},
	{
		title: 'Infrastructure & DevOps',
		skills: ['Docker', 'NGINX', 'Apache', 'Linux'],
	},
	{
		title: 'Tools',
		skills: ['VS Code', 'Postman', 'Git'],
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
					<h2 className='text-3xl md:text-4xl font-bold mb-12'>
						Skills & Technologies
					</h2>
				</FadeIn>
				<div className='space-y-8 max-w-4xl'>
					{skillCategories.map((category, index) => (
						<FadeIn
							key={category.title}
							delay={index * 150}
						>
							<div>
								<h3 className='text-lg font-medium mb-4 text-muted-foreground'>
									{category.title}
								</h3>
								<div className='flex flex-wrap gap-2'>
									{category.skills.map((skill) => (
										<Badge
											key={skill}
											variant='secondary'
											className='px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground cursor-default'
										>
											{skill}
										</Badge>
									))}
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
