import { Container } from './ui/container/container';
import { Logo } from './ui/logo/logo';

export function Header() {
	return (
		<header className='bg-white w-full py-6'>
			<Container>
				<Logo />
			</Container>
		</header>
	);
}
