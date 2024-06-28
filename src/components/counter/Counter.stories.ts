import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Counter from "./Counter";
// import { Button } from "./Button";

const meta = {
  title: "Example/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Размер счетчика",
      name: "Button",
    },
    counterStyle: {
      description: "Стиль счетчика",
    },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 24,
    // quantity: "1",
  },
};
