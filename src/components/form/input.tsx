import { InputHTMLAttributes } from 'react';
import { InputWrapper } from '../ui/input/input-wrapper';
import { InputElement } from '../ui/input/input-element';
import { InputLabel } from '../ui/input/input-label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	className?: string;
	name?: string;
	id?: string;
}

export function Input({ label, className, name, id, ...props }: InputProps) {
	return (
		<InputWrapper className={className}>
			<InputLabel htmlFor={id}>{label}</InputLabel>
			<InputElement $withLabel={!!label} id={id} name={name} {...props} />
		</InputWrapper>
	);
}
