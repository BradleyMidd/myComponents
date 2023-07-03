(() => ({
  name: 'Input',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText } = B;
    const { content } = options;
    return <input type='text' className={classes.root} />;
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
