import type { Meta, StoryObj } from '@storybook/vue3';
import CircularText from './CircularText.vue';

const meta: Meta = {
    title: 'Example/CircularText',
    component: CircularText,
    tags: ['autodocs'],
    args:{
        text: 'Hello World',
        deg: 50
    }
}satisfies Meta<typeof CircularText>;



export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};