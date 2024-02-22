'use server';
export async function getAddressPerCep(cep: string) {
	try {
		const req = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`, {
			next: {
				revalidate: 60 * 60 * 24 // 1 day in seconds
			}
		});
		const address = await req.json();
		if (address.errors) {
			throw address.errors;
		}
		return { address };
	} catch (error) {
		return { error: 'Insira um CEP válido.' };
	}
}
