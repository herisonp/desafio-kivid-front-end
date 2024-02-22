import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.././components/ui/input/input';

const meta = {
	title: 'Form/Input',
	component: Input,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: {
		placeholder: 'Placeholder',
		label: 'Label'
	},
	argTypes: {
		className: {
			if: { arg: 'className', exists: true }
		},
		errorMessage: {
			if: { arg: 'errorMessage', exists: true }
		},
		name: {
			if: { arg: 'name', exists: true }
		},
		id: {
			if: { arg: 'id', exists: true }
		},
		type: {
			defaultValue: 'text',
			control: 'select',
			options: ['text', 'email', 'password', 'url']
		},
		label: {
			type: 'string'
		}
	}
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const WithoutLabel: Story = {
	args: {
		label: ''
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		defaultValue: 'Exemple'
	}
};

export const WithErrorMessage: Story = {
	args: {
		errorMessage: 'Exemple error'
	}
};
