import { MapPin, Mail, MessageCircle } from 'lucide-react';
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
									href='https://github.com/jeamiel03019893'
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-violet-500 transition-colors duration-300'
								>
									<svg className='h-5 w-5' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
										<path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
									</svg>
								</a>
								<a
									href='https://www.linkedin.com/in/emiel-azucena-a97527349/'
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-violet-500 transition-colors duration-300'
								>
									<svg className='h-5 w-5' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
										<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
									</svg>
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
