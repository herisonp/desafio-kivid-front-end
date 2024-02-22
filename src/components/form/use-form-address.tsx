'use client';
import { getAddressPerCep } from '@/functions/get-address-per-cep';
import { FormEvent, useEffect, useState } from 'react';

interface AddressProps {
	cep: string;
	state: string;
	city: string;
	neighborhood: string;
	street: string;
}

export function useFomAddress() {
	const [address, setAddress] = useState<AddressProps | null>(null);
	const [cep, setCep] = useState<string>('');
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	useEffect(() => {
		async function getAddress() {
			setError(null);
			const isValid = cep.length >= 9;
			if (!isValid) {
				setAddress(null);
				return;
			}
			try {
				setIsLoading(true);
				const { error, address: addressData } = await getAddressPerCep(cep);
				if (error) throw error;
				setAddress(addressData);
			} catch (error) {
				setError(String(error));
			} finally {
				setIsLoading(false);
			}
		}

		getAddress();
	}, [cep]);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsLoading(true);

		// const formData = new FormData(event.currentTarget);
		// const data = {
		// 	...address,
		// 	number: formData.get('number')?.toString(),
		// 	complement: formData.get('complement')?.toString()
		// };

		event.currentTarget.reset();
		setCep('');
		setSuccess(true);
		setIsLoading(false);
	}

	return {
		address,
		cep,
		setCep,
		error,
		isLoading,
		handleSubmit,
		success
	};
}
