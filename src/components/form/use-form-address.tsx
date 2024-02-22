'use client';
import { getAddressPerCep } from '@/functions/get-address-per-cep';
import { useEffect, useState } from 'react';

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

	return {
		address,
		cep,
		setCep,
		error,
		isLoading
	};
}
