// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // args: { onClick: fn() },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    size: 28,
    buttonStyle: "primary",
  },
  render: (args) => (
    <Button counter={true} {...args}>
      <Button.Label>Загрузка</Button.Label>
    </Button>
  ),
};
