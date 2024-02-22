'use client';
import styled from 'styled-components';

export const InputElement = styled.input<{ $withLabel?: boolean }>`
	outline: none;
	border: 1px solid #e7e8e9;
	color: #777f83;
	padding: 1rem;
	padding-top: ${({ $withLabel }) => ($withLabel ? '2.75rem' : '1rem')};
	font-size: 1.25rem;
	width: 100%;
	border-radius: 16px;
	background-color: #ffffff;

	transition: all 0.2s ease-in;

	&::placeholder {
		color: #c9cdce;
	}

	&:focus {
		border-color: #776de6;
	}

	&:disabled {
		cursor: default;
	}
`;
