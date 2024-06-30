import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import ButtonContainer from "../container/Container";
import { useEffect, useState } from "react";
import Container from "../container/Container";

const meta: Meta<typeof ButtonContainer> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<
  | typeof Button
  | {
      label?: string;
      quantity?: string;
      counter?: boolean;
      containerHeight?: number;
      containerWidth?: number;
    }
>;

const Template = ({ ...args }) => {
  const [state, setState] = useState(args.state);

  useEffect(() => {
    setState(args.state);
  }, [args.state]);

  return (
    <Button {...args} state={state} onClick={() => setState("loading")}>
      <Button.Label>{args.label}</Button.Label>
      {args.counter && <Button.Counter>{args.quantity}</Button.Counter>}
    </Button>
  );
};

export const ForEdit: Story = {
  args: {
    label: "Что сделать",
    counter: true,
    quantity: "1",
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const InContainer: Story = {
  args: {
    size: 56,
    buttonStyle: "primary",
    state: "enabled",
    label: "Lorem ipsum, dolor sit amet consectetur",
    quantity: "1",
    containerWidth: 250,
    containerHeight: 150,
    counter: true,
  },
  render: ({ ...args }) => {
    const [state, setState] = useState(args.state);

    useEffect(() => {
      setState(args.state);
    }, [args.state]);

    return (
      <Container width={args.containerWidth} height={args.containerHeight}>
        <Button {...args} state={state} onClick={() => setState("loading")}>
          <Button.Label>{args.label}</Button.Label>
          {args.counter && <Button.Counter>{args.quantity}</Button.Counter>}
        </Button>
      </Container>
    );
  },
};

export const Primary56: Story = {
  args: {
    size: 56,
    buttonStyle: "primary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Primary36: Story = {
  args: {
    size: 36,
    buttonStyle: "primary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};
export const Primary28: Story = {
  args: {
    size: 28,
    buttonStyle: "primary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Secondary56: Story = {
  args: {
    size: 56,
    buttonStyle: "secondary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Secondary36: Story = {
  args: {
    size: 36,
    buttonStyle: "secondary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};
export const Secondary28: Story = {
  args: {
    size: 28,
    buttonStyle: "secondary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Primary56Counter: Story = {
  args: {
    size: 56,
    buttonStyle: "primary",
    state: "enabled",
    label: "Что сделать",
    quantity: "1",
    counter: true,
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Primary36Counter: Story = {
  args: {
    size: 36,
    buttonStyle: "primary",
    state: "enabled",
    label: "Что сделать",
    quantity: "1",
    counter: true,
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Primary28Counter: Story = {
  args: {
    size: 28,
    buttonStyle: "primary",
    state: "enabled",
    label: "Что сделать",
    quantity: "1",
    counter: true,
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Secondary56Counter: Story = {
  args: {
    size: 56,
    buttonStyle: "secondary",
    state: "enabled",
    label: "Что сделать",
    quantity: "1",
    counter: true,
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Secondary36Counter: Story = {
  args: {
    size: 36,
    buttonStyle: "secondary",
    state: "enabled",
    label: "Что сделать",
    quantity: "1",
    counter: true,
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Secondary28Counter: Story = {
  args: {
    size: 28,
    buttonStyle: "secondary",
    state: "enabled",
    label: "Что сделать",
    quantity: "1",
    counter: true,
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Primary56Disabled: Story = {
  args: {
    state: "disabled",
    size: 56,
    buttonStyle: "primary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Primary36Disabled: Story = {
  args: {
    state: "disabled",
    size: 36,
    buttonStyle: "primary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};
export const Primary28Disabled: Story = {
  args: {
    state: "disabled",
    size: 28,
    buttonStyle: "primary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Secondary56Disabled: Story = {
  args: {
    state: "disabled",
    size: 56,
    buttonStyle: "secondary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};

export const Secondary36Disabled: Story = {
  args: {
    state: "disabled",
    size: 36,
    buttonStyle: "secondary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};
export const Secondary28Disabled: Story = {
  args: {
    state: "disabled",
    size: 28,
    buttonStyle: "secondary",
    label: "Что сделать",
  },
  render: ({ ...args }) => <Template {...args} />,
};
