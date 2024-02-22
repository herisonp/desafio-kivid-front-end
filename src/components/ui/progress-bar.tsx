'use client';
import { useState } from 'react';

interface ProgressBarProps {
	progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
	const [totalProgress] = useState(`${progress}%`);
	return (
		<div className='w-full h-1 bg-[#E3E5E6] relative'>
			<div
				className={`bg-[#EA2797] absolute left-0 top-0 h-full transition-all`}
				style={{
					width: totalProgress
				}}
			/>
		</div>
	);
}
