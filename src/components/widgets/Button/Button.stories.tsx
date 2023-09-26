import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./";

const meta = {
  title: "widgets/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "radio",
      },
    },
    variant: {
      options: ["primary", "secondary", "link"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    variant: "link",
  },
};
