import type { Meta, StoryObj } from "@storybook/react";

import { Title } from ".";

const meta = {
  title: "widgets/Title",
  component: Title,
  argTypes: {
    size: {
      options: ["h1", "h2", "h3"],
      control: {
        type: "radio",
      },
    },
    variant: {
      options: ["regular", "bold"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Title",
  },
};

export const Bold: Story = {
  args: {
    children: "Title",
    variant: "bold",
  },
};

export const H2: Story = {
  args: {
    children: "Title",
    size: "h2",
  },
};

export const H3: Story = {
  args: {
    children: "Title",
    size: "h3",
  },
};
