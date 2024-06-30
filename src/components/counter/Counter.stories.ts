import type { Meta, StoryObj } from "@storybook/react";
import Counter from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary8: Story = {
  args: {
    size: 8,
    children: "1",
    counterStyle: "primary",
  },
};

export const Primary12: Story = {
  args: {
    size: 12,
    children: "2",
    counterStyle: "primary",
  },
};

export const Primary16: Story = {
  args: {
    size: 16,
    children: "3",
    counterStyle: "primary",
  },
};

export const Primary20: Story = {
  args: {
    size: 20,
    children: "4",
    counterStyle: "primary",
  },
};

export const Primary24: Story = {
  args: {
    size: 24,
    children: "5",
    counterStyle: "primary",
  },
};

export const Primary8WithPulse: Story = {
  args: {
    size: 8,
    children: "1",
    counterStyle: "primary",
    pulse: true,
  },
};

export const Primary12WithPulse: Story = {
  args: {
    size: 12,
    children: "2",
    counterStyle: "primary",
    pulse: true,
  },
};

export const Secondary8: Story = {
  args: {
    size: 8,
    children: "1",
    counterStyle: "secondary",
  },
};

export const Secondary12: Story = {
  args: {
    size: 12,
    children: "2",
    counterStyle: "secondary",
  },
};

export const Secondary16: Story = {
  args: {
    size: 16,
    children: "3",
    counterStyle: "secondary",
  },
};

export const Secondary20: Story = {
  args: {
    size: 20,
    children: "4",
    counterStyle: "secondary",
  },
};

export const Secondary24: Story = {
  args: {
    size: 24,
    children: "5",
    counterStyle: "secondary",
  },
};

export const Secondary8WithPulse: Story = {
  args: {
    size: 8,
    children: "1",
    counterStyle: "secondary",
    pulse: true,
  },
};

export const Secondary12WithPulse: Story = {
  args: {
    size: 12,
    children: "2",
    counterStyle: "secondary",
    pulse: true,
  },
};
export const Primary16Truncate: Story = {
  args: {
    size: 16,
    children: "333",
    counterStyle: "primary",
  },
};

export const Secondary16Truncate: Story = {
  args: {
    size: 16,
    children: "333",
    counterStyle: "secondary",
  },
};
