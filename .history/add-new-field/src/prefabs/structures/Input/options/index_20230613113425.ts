import { variable } from '@betty-blocks/component-sdk';
import { advanced } from '../../advanced';

export const categories = [
  {
    label: 'Advanced Options',
    expanded: false,
    members: ['dataComponentAttribute'],
  },
];

export const inputOptions = {
  name: variable('Name attribute', {
    value: [''],
    configuration: { as: 'MULTILINE' },
  }),

  ...advanced('Input'),
};
