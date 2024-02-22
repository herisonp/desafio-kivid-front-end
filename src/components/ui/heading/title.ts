'use client';
import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 1.25rem;
	color: #4b565b;
	font-weight: 500;
	position: relative;
	padding-top: 10px;

	&::before {
		content: '';
		width: 24px;
		height: 4px;
		background-color: #ea2797;
		border-radius: 999px;
		position: absolute;
		top: 0;
		left: 0;
	}
`;
