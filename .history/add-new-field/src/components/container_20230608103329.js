(() => ({
  name: 'Container',
  type: 'BODY_COMPONENT',
  allowedTypes: [
    "INPUT"
  ],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText } = B;
    const { content } = options;
    return <div className={classes.root}>{useText(content)}</div>;
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
