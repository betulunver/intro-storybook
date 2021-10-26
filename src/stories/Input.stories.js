import React from 'react';

import { Input } from './Input';

export default {
    title: 'Example/Input',
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: "text",
    placeholder: 'Default input'
};

export const Password = Template.bind({});
Password.args = {
    type: "password",
    placeholder: 'Password input'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    type: "text",
    placeholder: 'Input with Label',
    label:'Input with Label'
};