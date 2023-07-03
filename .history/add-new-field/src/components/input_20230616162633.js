(() => ({
  name: 'Input',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText } = B;
    const { name } = options;

    let amount = 2,
        array = [{"Label": "test1", "Value": ""}],
        obj = {},
        jsonText = "";
    const checkAmount = () => {
        const btn2 = document.getElementById('remove');
        let checkAmountOfId = document.querySelectorAll('[id*="input-container"]')
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
              inputContainer = document.createElement("div");

        input.setAttribute("id", `test${amount}`);
        input.setAttribute("type", "text"),
        input.setAttribute("name", `field${amount}`);
        input.addEventListener('change', (() => {
          addObjectToArray(input)
        }))

        label.appendChild(labelContent)
        label.setAttribute("id", `label${amount}`);

        inputContainer.setAttribute("id", `input-container${amount}`);
        inputContainer.setAttribute("class", `input-container${amount}`);
        
        inputContainer.appendChild(label);
        inputContainer.appendChild(input);

        container.appendChild(inputContainer);

        obj = {};
        obj["Label"] = `test${amount}`;
        obj["Value"] = "";

        array.push(obj);

        amount++

        checkAmount();
      },
      buttonClick1 = (e) => {
        initalizeInput();
        e.preventDefault();
      },
      buttonClick2 = (e) => {
        e.preventDefault();
        const container = document.getElementById(`input-container${amount - 1}`),
              elm = document.getElementById(`test${amount - 1}`),
              foundObject = array.find(o => o.Label === elm.id),
              index = array.indexOf(foundObject),
              json = document.getElementById('json');
        if(index > -1){
          const json = document.getElementById('json');
          array.splice(index, 1)
          jsonText = JSON.stringify(array);
          json.value = jsonText;
        }
        container.remove();
        jsonText = JSON.stringify(array);
        json.value = jsonText;


        amount--
        checkAmount();

      },
      addObjectToArray = (input) => {
        const foundObject = array.find(o => o.Label === input?.id) 
        console.log("Found object: ", foundObject);
        if(foundObject){
          const json = document.getElementById('json');
          foundObject.Value = input.value;
          jsonText = JSON.stringify(array);
          json.value = jsonText;
        }
      }

    
    return <div className="container" id="container" style={{display: 'none'}}><button id='add' onClick={buttonClick1}>Add field</button>
    <button id='remove' onClick={buttonClick2} style={{display: 'none'}}>Remove field</button>
    <input type="hidden" name={name} id="json"/>
    <br id="br1"/>
      <div id='input-container1' className='input-container1'>
        <label id='label1'>Optie 1: </label>
        <input type="text" id="test1" name="field1" onchange={addObjectToArray(this)}/>
      </div>
    </div>;
  })(),
  styles: () => () => ({
    root: {
    },
  }),
}))();
