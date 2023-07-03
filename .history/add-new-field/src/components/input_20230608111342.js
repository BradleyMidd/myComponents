(() => ({
  name: 'Input',
  type: 'INPUT',
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
