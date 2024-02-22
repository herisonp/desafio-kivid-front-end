import { Header } from '@/components/header';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Container } from '@/components/ui/container/container';
import { FormSection } from '@/components/form/form-section';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Header />
			<ProgressBar progress={35} />
			<main>
				<Container className='flex flex-col-reverse gap-8 md:flex-row'>
					<FormSection />
					<section className='md:w-2/3'>
						<picture>
							<source
								srcSet='/campanha-default-xsmall.png'
								media='(max-width: 768px)'
							/>
							<Image
								src='/campanha-default-large.png'
								alt='Fotografia com texto publicitário: plano Kivid por R$ 9,90 por mês'
								width={1000}
								height={1000}
								priority
								className='w-full h-auto'
							/>
						</picture>
					</section>
				</Container>
			</main>
		</>
	);
}

