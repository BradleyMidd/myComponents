"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const Input_1 = require("./structures/Input");
const attributes = {
    category: 'FORM',
    icon: component_sdk_1.Icon.TextInputIcon,
    keywords: [''],
};
exports.default = component_sdk_1.prefab('Input', attributes, undefined, [Input_1.Input({})]);
