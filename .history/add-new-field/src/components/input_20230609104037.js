(() => ({
  name: 'Input',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText } = B;
    const { content } = options;

    let amount = 1,
        array = [],
        obj = {};
    const checkAmount = () => {
        const btn2 = document.getElementById('remove');
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
              labelContent = document.createTextNode(`Optie ${amount}: `),
              container = document.getElementById("container")
        input.setAttribute("id", `test${amount}`);
        input.setAttribute("type", "text"),
        input.setAttribute("name", `field${amount}`);
        input.setAttribute("onChange", addFieldToJson())
        label.appendChild(labelContent)
        label.setAttribute("id", `label${amount}`);
        container.appendChild(label);
        container.appendChild(input);
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

      },
      addFieldToJson = (e) => {
        obj[`field${amount}`] = e.target.value;
        array.push(obj)
        console.log(json);
      }

    return <div className="container" id="container"><button id='add' onClick={buttonClick1}>Add field</button>
    <button id='remove' onClick={buttonClick2} style={{display: 'none'}}>Remove field</button></div>;
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
