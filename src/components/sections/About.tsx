import { Briefcase, Calendar } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import profileImg from '@/assets/img/profile.jpg';

export function About() {
	return (
		<section
			id='about'
			className='py-20'
		>
			<div className='container mx-auto px-4'>
				<FadeIn>
					<h2 className='text-3xl md:text-4xl font-bold mb-12'>
						About Me
					</h2>
				</FadeIn>
				<div className='grid lg:grid-cols-2 gap-12 items-start max-w-6xl'>
					<div className='space-y-6'>
						<FadeIn delay={100}>
							<p className='text-muted-foreground leading-relaxed'>
								Hello! I'm Emiel Azucena, a Full Stack Developer
								with 4+ years of hands-on experience in software
								development within the banking industry. I
								specialize in building, maintaining, and
								optimizing internal systems that streamline
								operations and ensure compliance with
								regulations.
							</p>
						</FadeIn>
						<FadeIn delay={200}>
							<p className='text-muted-foreground leading-relaxed'>
								I have a proven track record in delivering
								reliable APIs and production-ready applications
								using NodeJS (Express), React, MongoDB, SQL, and
								Docker. Conduct requirement analysis and
								collaborating with stakeholders to deliver
								solutions that truly meet business needs.
							</p>
						</FadeIn>
						<FadeIn delay={300}>
							<p className='text-muted-foreground leading-relaxed'>
								My experience spans from IT infrastructure
								support to full-stack development, giving me a
								comprehensive understanding of the entire
								technology stack and deployment pipeline.
							</p>
						</FadeIn>

						<div className='pt-6 space-y-4'>
							<FadeIn delay={400}>
								<div className='flex items-start gap-4 group'>
									<div className='p-2 rounded-lg bg-muted transition-colors duration-300 group-hover:bg-primary/10'>
										<Briefcase className='h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary' />
									</div>
									<div>
										<p className='font-medium'>
											Previous Role
										</p>
										<p className='text-sm text-muted-foreground'>
											Sr. Software Developer / Analyst at
											MCCB
										</p>
									</div>
								</div>
							</FadeIn>
							<FadeIn delay={500}>
								<div className='flex items-start gap-4 group'>
									<div className='p-2 rounded-lg bg-muted transition-colors duration-300 group-hover:bg-primary/10'>
										<Calendar className='h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary' />
									</div>
									<div>
										<p className='font-medium'>
											Experience
										</p>
										<p className='text-sm text-muted-foreground'>
											4+ Years in Software Development
										</p>
									</div>
								</div>
							</FadeIn>
						</div>
					</div>

					<FadeIn
						direction='right'
						delay={200}
					>
						<div className='flex justify-center lg:justify-end'>
							<div className='w-full max-w-md aspect-square bg-muted rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-[1.02]'>
								<img
									src={profileImg}
									alt='Emiel Azucena'
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
