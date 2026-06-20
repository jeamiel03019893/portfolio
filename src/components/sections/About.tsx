import { Layers, Rocket, GitMerge, Code2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/FadeIn';

const CV_URL =
	'https://drive.google.com/file/d/1cHUWV_AyYlzFnjS-BwJyiLP92NxfpdO5/view';

const stats = [
	{
		icon: Code2,
		value: '4+',
		label: 'Years in Production',
		color: 'text-violet-400',
		bg: 'bg-violet-500/10',
	},
	{
		icon: Layers,
		value: '9+',
		label: 'Systems Shipped',
		color: 'text-emerald-400',
		bg: 'bg-emerald-500/10',
	},
	{
		icon: Rocket,
		value: '2',
		label: 'Live Public Products',
		color: 'text-cyan-400',
		bg: 'bg-cyan-500/10',
	},
	{
		icon: GitMerge,
		value: 'A–Z',
		label: 'Full Lifecycle Ownership',
		color: 'text-amber-400',
		bg: 'bg-amber-500/10',
	},
];

export function About() {
	return (
		<section
			id='about'
			className='py-20'
		>
			<div className='container mx-auto px-4'>
				<FadeIn>
					<h2 className='text-3xl md:text-4xl font-black mb-12'>
						About Me
					</h2>
				</FadeIn>

				<div className='grid lg:grid-cols-2 gap-12 items-start max-w-5xl'>
					{/* Left — bio */}
					<div className='space-y-5'>
						<FadeIn delay={100}>
							<p className='text-muted-foreground leading-relaxed'>
								I'm a Full Stack Developer with 4+ years
								building production systems inside the banking
								industry — from regulatory compliance platforms
								and real-time queues to HR management and ATM
								reconciliation tools used by staff every day.
							</p>
						</FadeIn>
						<FadeIn delay={200}>
							<p className='text-muted-foreground leading-relaxed'>
								My stack is Node.js, React, TypeScript, MongoDB,
								and Docker. I handle the full lifecycle:
								requirements, architecture, implementation,
								deployment, and maintenance. I've also shipped
								live public products — a WordPress real estate
								platform and an AI-powered compliance SaaS.
							</p>
						</FadeIn>
						<FadeIn delay={300}>
							<p className='text-muted-foreground leading-relaxed'>
								Currently open to fullstack roles where I can
								build things that matter — clean APIs, reliable
								systems, and UIs that don't frustrate people.
							</p>
						</FadeIn>
						<FadeIn delay={400}>
							<Button
								asChild
								className='bg-violet-500 hover:bg-violet-600 text-white gap-2 transition-transform duration-300 hover:scale-105'
							>
								<a href={CV_URL} target='_blank' rel='noreferrer'>
									<Download className='h-4 w-4' />
									Download CV
								</a>
							</Button>
						</FadeIn>
					</div>

					{/* Right — stat cards */}
					<div className='grid grid-cols-2 gap-4'>
						{stats.map((stat, i) => {
							const Icon = stat.icon;
							return (
								<FadeIn
									key={stat.label}
									delay={i * 100 + 150}
									direction='right'
								>
									<div className='rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 hover:ring-2 hover:ring-violet-500/30 transition-all duration-300'>
										<div
											className={`w-9 h-9 rounded-xl ${stat.bg} flex items-center justify-center`}
										>
											<Icon
												className={`h-5 w-5 ${stat.color}`}
											/>
										</div>
										<div>
											<p
												className={`text-2xl font-black ${stat.color}`}
											>
												{stat.value}
											</p>
											<p className='text-xs text-muted-foreground mt-0.5'>
												{stat.label}
											</p>
										</div>
									</div>
								</FadeIn>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
