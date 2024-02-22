'use client';
import { Button } from '../ui/button/button';
import { Input } from '../ui/input/input';
import { mask } from '@utils-fns/mask';
import { useFomAddress } from './use-form-address';

export default function FormAddress() {
	const { address, cep, error, isLoading, setCep } = useFomAddress();

	return (
		<form className='mt-4 flex flex-col gap-4'>
			<Input
				type='text'
				name='cep'
				id='cep'
				label='CEP:'
				placeholder='00000-000'
				value={cep}
				onChange={(evt) => setCep(mask.cep({ value: evt.target.value }).value)}
				disabled={isLoading}
				errorMessage={error}
				required
			/>
			<fieldset className='flex gap-4 flex-col md:flex-row justify-between'>
				<Input
					type='text'
					name='street'
					id='street'
					label='Rua:'
					placeholder='Sua rua'
					defaultValue={address?.street}
					disabled
					required
				/>
				<Input
					type='number'
					name='number'
					id='number'
					label='Número:'
					placeholder='00'
					required
				/>
			</fieldset>
			<Input
				type='text'
				name='complement'
				id='complement'
				label='Complemento:'
				placeholder='Complemento'
			/>
			<Input
				type='text'
				name='neighborhood'
				id='neighborhood'
				label='Bairro:'
				placeholder='Seu bairro'
				defaultValue={address?.neighborhood}
				disabled
				required
			/>
			<fieldset className='flex flex-col md:flex-row gap-4 justify-between'>
				<Input
					type='text'
					name='city'
					id='city'
					label='Cidade:'
					placeholder='Sua cidade'
					defaultValue={address?.city}
					disabled
					required
				/>
				<Input
					type='text'
					name='state'
					id='state'
					label='UF:'
					placeholder='UF'
					defaultValue={address?.state}
					disabled
					required
				/>
			</fieldset>
			<Button type='submit'>Finalizar cadastrado</Button>
		</form>
	);
}
