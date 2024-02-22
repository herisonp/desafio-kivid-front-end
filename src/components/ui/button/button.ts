'use client';
import styled from 'styled-components';

export const Button = styled.button`
	color: #ffffff;
	background-color: #37d67a;
	border-radius: 16px;
	cursor: pointer;

	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1rem;
	font-weight: 500;

	transition: all 0.2s ease-out;

	&:hover {
		background-color: #15a451;
	}

	&:disabled {
		background-color: #c0c0c0;
		cursor: default;
	}
`;
