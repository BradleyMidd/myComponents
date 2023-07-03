(() => ({
    name: 'Container',
    type: 'BODY_COMPONENT',
    allowedTypes: [
      "INPUT",
    ],
    orientation: "HORIZONTAL",
    styles: B => theme => {
        const style = new B.Styling(theme);
        return {
            root: {
                color: '#E9004C'
            }
        }
    },
    jsx: <div className={classes.root}>Hello World</div>
  }))();