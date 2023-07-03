import { prefab, Icon } from '@betty-blocks/component-sdk';

import { Container } from './structures/Container';

const attributes = {
  category: 'CONTENT',
  icon: Icon.TitleIcon,
  keywords: [''],
};

export default prefab('Container', attributes, undefined, [Container({})]);
