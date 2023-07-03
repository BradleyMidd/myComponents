(() => ({
  name: 'Input',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText } = B;
    const { name } = options;

    let amount = 2,
        array = [],
        obj = {},
        jsonText = "";
    const checkAmount = () => {
        const btn2 = document.getElementById('remove');
        let checkAmountOfId = document.querySelectorAll('[id*="test"]')
        if(checkAmountOfId.length == 1){
          btn2.style.display = 'none';
        }
        else{
          btn2.style.display = 'block';
        }
      },
      initalizeInput = () => {
        const input = document.createElement("input"),
              label = document.createElement("label"),
              labelContent = document.createTextNode(`Optie ${amount}: `),
              container = document.getElementById("container"),
              linebreak = document.createElement("br");

        input.setAttribute("id", `test${amount}`);
        input.setAttribute("type", "text"),
        input.setAttribute("name", `field${amount}`);
        input.addEventListener('change', (() => {
          addObjectToArray(input)
        }))

        label.appendChild(labelContent)
        label.setAttribute("id", `label${amount}`);

        linebreak.setAttribute("id", `br${amount}`)

        container.appendChild(linebreak);
        container.appendChild(label);
        container.appendChild(input);

        obj = {};
        obj["Label"] = `test${amount}`;
        obj["Value"] = "";

        array.push(obj);

        amount++

        checkAmount();
      },
      buttonClick1 = (e) => {
        initalizeInput();
        e.preventDefault()

      },
      buttonClick2 = (e) => {
        e.preventDefault();
        const elm = document.getElementById(`test${amount - 1}`),
              label = document.getElementById(`label${amount - 1}`),
              foundObject = array.find(o => o.Label === elm.id),
              index = array.indexOf(foundObject),
              json = document.getElementById('json'),
              linebreak = document.getElementById(`br${amount - 1}`);
        if(index > -1){
          const json = document.getElementById('json');
          array.splice(index, 1)
          jsonText = JSON.stringify(array);
          json.value = jsonText;
        }
        elm.remove();
        label.remove();
        linebreak.remove();
        jsonText = JSON.stringify(array);
        json.value = jsonText;


        amount--
        checkAmount();

      },
      addObjectToArray = (input) => {
        const foundObject = array.find(o => o.Label === input.id) 
        if(foundObject){
          const json = document.getElementById('json');
          foundObject.Value = input.value;
          jsonText = JSON.stringify(array);
          json.value = jsonText;
        }
      };

    
    return <div className="container" id="container" style={{display: 'none'}}><button id='add' onClick={buttonClick1}>Add field</button>
    <button id='remove' onClick={buttonClick2} style={{display: 'none'}}>Remove field</button>
    <input type="hidden" name={name} id="json"/>
    <br id="br1"/>
    <label id='label1'>Optie 1: </label>
    <input type="text" id="test1" name="field1" onChange={addObjectToArray(this)}/>
    </div>;
  })(),
  styles: () => () => ({
    root: {
    },
  }),
}))();
