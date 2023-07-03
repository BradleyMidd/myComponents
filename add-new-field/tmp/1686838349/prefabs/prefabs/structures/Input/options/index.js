"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.inputOptions = {
    name: component_sdk_1.variable('Name attribute', {
        value: [''],
        configuration: { as: 'MULTILINE' },
    }),
    ...advanced_1.advanced('Input'),
};
