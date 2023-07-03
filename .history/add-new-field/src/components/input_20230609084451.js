(() => ({
  name: 'Input',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText } = B;
    const { content } = options;

    let amount = 1;
    const btn = document.getElementById('1'),
          btn2 = document.getElementById('2'),
          checkAmount = () => {
            let checkAmountOfId = document.querySelectorAll('[id*="test"]')
            if(checkAmountOfId.length == 0){
              btn2.style.display = 'none';
            }
            else{
              btn2.style.display = 'block';
            }
          },
          buttonClick1 = () => {
            const input = document.createElement("input"),
                  label = document.createElement("label"),
                  labelContent = document.createTextNode(`Optie ${amount}: `)
            input.setAttribute("id", `test${amount}`);
            input.setAttribute("type", "text");
            label.appendChild(labelContent)
            label.setAttribute("id", `label${amount}`);
            document.body.appendChild(label);
            document.body.appendChild(input);
            amount++
            checkAmount();

          },
          buttonClick2 = () => {
            const elm = document.getElementById(`test${amount - 1}`),
                  label = document.getElementById(`label${amount - 1}`)
            elm.remove();
            label.remove();
            amount--
            checkAmount();

          }

        checkAmount();

    return <div><button id='1' onClick={buttonClick1}>Add field</button>
    <button id='2' onClick={buttonClick2}>Remove field</button></div>;
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
