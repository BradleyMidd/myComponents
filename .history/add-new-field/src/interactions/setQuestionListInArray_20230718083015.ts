function setQuestionListInArray (): boolean{
    const container: HTMLCollection | null = document.getElementsByClassName("MuiCardContent-root") as HTMLCollection,
          dataContainer = container[0],
          questionnaire:  HTMLInputElement | null = document.getElementById('questionnaire') as HTMLInputElement,
          answerArray = [{}];
    console.log('Data: ', dataContainer);
        const answers = dataContainer.querySelectorAll('div[role="none"]'),
              tempArray = Array.from(answers);
        
        for (let i = 0; i < tempArray.length; i++) {
            const questionName = tempArray[i].querySelector("label:not(span)"),
                  answer = tempArray[i].querySelector("div[class='MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input']"),
                  yesOrNoAnswer = tempArray[i].querySelector("input[class='jss23']") as HTMLInputElement,
                  dependantNumber = tempArray[i].querySelector('div[data-component="depend_num"]'),
                  dependantQuestion = dependantNumber?.querySelector('fieldset>legend>span'),
                  dependantQuestionAnswer = dependantNumber?.querySelector("div[class='MuiOutlinedInput-input']");
            let obj = {
                        "Vraag": questionName?.textContent?.replace(/[*]/g, ""),
                        "Antwoord": answer?.textContent ? answer?.textContent : yesOrNoAnswer?.value
                        }
            let dependObj = 
                {
                    "Vraag": dependantQuestion?.textContent?.replace(/[*]/g, ""),
                    "Antwoord": dependantQuestionAnswer?.textContent
                }
            if(obj.Vraag != undefined){
                answerArray.push(obj); 
            }
            if(dependObj.Vraag != undefined){
                answerArray.push(dependObj);  
            } 
        }
        questionnaire.value = JSON.stringify(answerArray);
        console.log(answerArray);
        
    return true
}