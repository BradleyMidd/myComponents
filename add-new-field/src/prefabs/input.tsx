import { prefab, Icon } from '@betty-blocks/component-sdk';

import { Input } from './structures/Input';

const attributes = {
  category: 'FORM',
  icon: Icon.TextInputIcon,
  keywords: [''],
};

export default prefab('Input', attributes, undefined, [Input({})]);
