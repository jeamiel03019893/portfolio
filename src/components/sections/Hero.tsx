import { Github, Linkedin, MapPin, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/FadeIn';
import profileImg from '@/assets/img/profile.jpg';

export function Hero() {
	return (
		<section className='min-h-screen flex items-center pt-16'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center'>
					{/* Left — text content */}
					<div className='order-2 lg:order-1 flex flex-col justify-center'>
						<FadeIn delay={100}>
							<h1
								className='font-black text-5xl md:text-7xl tracking-tight mb-4 text-white'
								style={{
									textShadow:
										'0 0 60px oklch(0.606 0.25 292 / 0.55)',
								}}
							>
								Emiel Azucena
							</h1>
						</FadeIn>

						<FadeIn delay={200}>
							<p className='font-mono text-lg text-violet-400 mb-4 flex items-center gap-2'>
								<span className='opacity-50 select-none'>
									{'>'}
								</span>
								<span>Fullstack Developer</span>
								<span className='inline-block w-0.5 h-5 bg-violet-400 animate-pulse' />
							</p>
						</FadeIn>

						<FadeIn delay={300}>
							<p className='text-muted-foreground mb-4 max-w-lg leading-relaxed'>
								Full stack developer with 4+ years shipping
								production systems in banking — real-time
								queues, regulatory compliance platforms, HR
								tools, and more. I take ownership from
								architecture to deployment.
							</p>
						</FadeIn>

						<FadeIn delay={380}>
							<div className='flex items-center gap-1.5 text-sm text-muted-foreground mb-6'>
								<MapPin className='h-4 w-4 shrink-0' />
								<span>
									Initao, Misamis Oriental, Philippines
								</span>
							</div>
						</FadeIn>

						<FadeIn delay={450}>
							<div className='flex flex-wrap gap-4 mb-6'>
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

						<FadeIn delay={550}>
							<div className='flex items-center gap-4'>
								<a
									href='https://github.com/emielazucena'
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-violet-500 transition-colors duration-300'
								>
									<Github className='h-5 w-5' />
								</a>
								<a
									href='https://www.linkedin.com/in/emiel-azucena-a97527349/'
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-violet-500 transition-colors duration-300'
								>
									<Linkedin className='h-5 w-5' />
								</a>
								<a
									href='mailto:emiel.azucena@gmail.com'
									className='text-muted-foreground hover:text-violet-500 transition-colors duration-300'
								>
									<Mail className='h-5 w-5' />
								</a>
								<a
									href='https://wa.me/639658839558'
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-violet-500 transition-colors duration-300'
								>
									<MessageCircle className='h-5 w-5' />
								</a>
							</div>
						</FadeIn>
					</div>

					{/* Right — photo */}
					<FadeIn
						direction='right'
						delay={300}
						className='order-1 lg:order-2 flex justify-center'
					>
						<div className='relative flex items-center justify-center'>
							{/* Violet blob */}
							<div className='absolute rounded-full bg-violet-500/20 blur-3xl w-72 h-72 -top-8 -right-8 -z-10' />
							{/* Cyan blob */}
							<div className='absolute rounded-full bg-cyan-500/15 blur-3xl w-56 h-56 -bottom-4 -left-4 -z-10' />

							{/* Profile photo */}
							<div className='rounded-3xl p-[3px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 hover:scale-105 transition-transform duration-500'>
								<img
									src={profileImg}
									alt='Emiel Azucena'
									className='rounded-[calc(1.5rem-3px)] object-cover w-full max-w-sm block'
								/>
							</div>

							{/* Open to Work badge */}
							<span className='absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 text-white text-xs font-semibold px-3 py-1 whitespace-nowrap'>
								✦ Open to Work
							</span>
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
