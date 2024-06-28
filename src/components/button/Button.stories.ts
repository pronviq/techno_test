import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Размер кнопки",
      name: "Button",
    },
    label: {
      description: "Текст внутри кнопки",
    },
    buttonStyle: {
      description: "Стиль кнопки",
    },
    state: {
      description: "Состояние кнопки (без pressed, зажатие контролируется псевдоклассом :active)",
    },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 56,
    label: "Что сделать",
    buttonStyle: "primary",
  },
};

export const Small: Story = {
  args: {
    size: 28,
    label: "Что сделать",
    buttonStyle: "secondary",
  },
};

export const LoadingButton: Story = {
  args: {
    state: "loading",
    size: 36,
    label: "Что сделать",
    buttonStyle: "primary",
  },
};
