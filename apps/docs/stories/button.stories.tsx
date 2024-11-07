import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@acme/ui/components/Button"; 
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
    colour: {
      control: "color", 
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        alert("Hello from Turborepo!"); // Alert for demo
      }}
    >
      {props.children}
    </Button>
  ),
  name: "Primary Button",
  args: {
    type: "button",
    label: "hello",
    colour: "blue", // You can change this color from Storybook's controls
  },
};
