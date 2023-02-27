import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Example/TextArea',
  component: Field.TextArea,
  subcomponents: { Field, label: Field.Label },
} as Meta;

export const Template: Story = (...args) => {
  return (
    <Field>
      <Field.Label>Text Area</Field.Label>
      <Field.TextArea placeholder={'placeholder'} {...args} />
    </Field>
  );
};

export const Default = Template.bind({});

Default.args = {
  isResizable: true,
};
