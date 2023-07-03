(() => ({
  name: 'Container',
  type: 'CONTAINER_COMPONENT ',
  allowedTypes: [
    "INPUT",
    "CONTENT_COMPONENT"
  ],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText } = B;
    const { content } = options;
    return <div className={classes.root}>{useText(content)}</div>;
  })(),
  styles: () => () => ({
    root: {
      height: "250px"
    },
  }),
}))();
