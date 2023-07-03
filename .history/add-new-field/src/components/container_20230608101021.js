(() => ({
    name: 'Container',
    type: 'BODY_COMPONENT',
    allowedTypes: [
      "INPUT",
    ],
    orientation: "HORIZONTAL",
    styles: () => () => ({}),
    jsx: <div>Hello World</div>
  }))();