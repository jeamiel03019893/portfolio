import { Github, Linkedin, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/FadeIn';
import profileImg from '@/assets/img/profile.jpg';

export function Hero() {
	return (
		<section className='min-h-screen flex items-center pt-16'>
			<div className='container mx-auto px-4'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<div className='order-2 lg:order-1'>
						<FadeIn delay={0}>
							<p className='text-muted-foreground mb-2'>
								Hi, I'm
							</p>
						</FadeIn>
						<FadeIn delay={100}>
							<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight'>
								Emiel Azucena
							</h1>
						</FadeIn>
						<FadeIn delay={200}>
							<h2 className='text-xl md:text-2xl text-muted-foreground mb-6'>
								Full Stack Developer
							</h2>
						</FadeIn>
						<FadeIn delay={300}>
							<p className='text-muted-foreground mb-6 max-w-lg leading-relaxed'>
								Full stack developer with 4+ years of hands-on
								experience in software development within the
								banking industry. Building and optimizing
								internal systems that streamline operations and
								ensure compliance with financial regulations.
							</p>
						</FadeIn>

						<FadeIn delay={400}>
							<div className='flex items-center gap-2 text-sm text-muted-foreground mb-6'>
								<MapPin className='h-4 w-4' />
								<span>Initao, Misamis Oriental, Philippines</span>
							</div>
						</FadeIn>

						<FadeIn delay={500}>
							<div className='flex items-center gap-4 mb-8'>
								<a
									href='https://github.com/emielazucena'
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-foreground transition-colors duration-300'
								>
									<Github className='h-5 w-5' />
								</a>
								<a
									href='https://www.linkedin.com/in/emiel-azucena-a97527349/'
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-foreground transition-colors duration-300'
								>
									<Linkedin className='h-5 w-5' />
								</a>
								<a
									href='mailto:emiel.azucena@gmail.com'
									className='text-muted-foreground hover:text-foreground transition-colors duration-300'
								>
									<Mail className='h-5 w-5' />
								</a>
							</div>
						</FadeIn>

						<FadeIn delay={600}>
							<div className='flex flex-wrap gap-4'>
								<Button
									size='lg'
									asChild
									className='transition-transform duration-300 hover:scale-105'
								>
									<a href='#projects'>View My Work</a>
								</Button>
								<Button
									size='lg'
									variant='outline'
									asChild
									className='transition-transform duration-300 hover:scale-105'
								>
									<a href='#contact'>Get in Touch</a>
								</Button>
							</div>
						</FadeIn>
					</div>

					<FadeIn
						direction='right'
						delay={300}
						className='order-1 lg:order-2 flex justify-center lg:justify-end'
					>
						<div className='relative'>
							<div className='w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-105'>
								<img
									src={profileImg}
									alt='Emiel Azucena'
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='absolute inset-0 rounded-full border-2 border-primary/20 -m-2'></div>
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
