import { Subtitle } from '../ui/heading/subtitle';
import { Title } from '../ui/heading/title';
import FormAddress from './form-address';

export function FormSection() {
	return (
		<section className='pt-8 pb-32'>
			<Title>Cadastre seu endereço</Title>
			<Subtitle>Complete seu cadastro com seu endereço</Subtitle>

			<FormAddress />
		</section>
	);
}
