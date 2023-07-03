import { prefab, Icon } from '@betty-blocks/component-sdk';

import { Container } from './structures/Container';

const attributes = {
  category: 'TEST',
  icon: Icon.ContainerIcon,
  keywords: [''],
};

export default prefab('Container', attributes, undefined, [Container({})]);
