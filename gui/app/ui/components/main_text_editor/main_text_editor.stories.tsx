import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MainTextEditor from './main_text_editor';

const meta = {
  component: MainTextEditor,
  parameters: {
  layout: 'fullscreen',
},
} satisfies Meta<typeof MainTextEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};