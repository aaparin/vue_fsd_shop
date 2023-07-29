import type { Meta, StoryObj } from '@storybook/vue3';
import BaseButton from './BaseButton.vue';


// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: BaseButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    text: { control: 'text' },
    class: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    to: { control: 'text' },
  
    // onClick: { action: 'clicked' },
  },
  args: { 
    size: 'medium',
    text: 'Button',
    class: 'rounded-full ml-9',
    variant: 'primary',
    to: '/home',
    // onClick: () => { console.log('clicked') }
   }, // default value
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  
};


