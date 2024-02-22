import { InputHTMLAttributes } from 'react';
import { InputWrapper } from './input-wrapper';
import { InputElement } from './input-element';
import { InputLabel } from './input-label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMessage?: string | null;
	className?: string;
	name?: string;
	id?: string;
}

export function Input({
	label,
	errorMessage,
	className,
	name,
	id,
	...props
}: InputProps) {
	return (
		<>
			<InputWrapper className={className}>
				<InputLabel htmlFor={id}>{label}</InputLabel>
				<InputElement $withLabel={!!label} id={id} name={name} {...props} />
			</InputWrapper>
			{errorMessage && (
				<span className='text-red-500 text-sm'>{errorMessage}</span>
			)}
		</>
	);
}
