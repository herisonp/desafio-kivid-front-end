import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.././components/ui/button/button';

const meta: Meta<typeof Button> = {
	title: 'Form/Button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: {
		children: 'Button'
	},
	argTypes: {
		children: {
			name: 'Label'
		}
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Disabled: Story = {
	args: {
		disabled: true
	}
};

