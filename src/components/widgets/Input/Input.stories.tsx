import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

const meta: Meta = {
  title: "Widgets/Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    variant: {
      options: ["regular", "compact"],
      control: { type: "radio" },
      description: "Choose between regular and compact variants",
    },
    searchable: {
      control: "boolean",
      description: "Enable/disable search functionality",
    },
    disabled: {
      control: "boolean",
      description: "Disable the input",
    },
    error: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
  },
};
