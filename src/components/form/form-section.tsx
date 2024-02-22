import { Subtitle } from '../ui/heading/subtitle';
import { Title } from '../ui/heading/title';
import FormAddress from './form-address';

export function FormSection() {
	return (
		<section className='pt-8 pb-32 flex flex-col gap-4'>
			<div>
				<Title>Cadastre seu endereço</Title>
				<Subtitle>Complete seu cadastro com seu endereço</Subtitle>
			</div>

			<FormAddress />
		</section>
	);
}
