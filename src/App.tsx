import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

function App() {
	return (
		<div className='min-h-screen'>
			<Header />
			<main>
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
