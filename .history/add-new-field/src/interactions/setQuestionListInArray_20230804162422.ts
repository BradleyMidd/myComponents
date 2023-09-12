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
                  singleChoiceAnswer = tempArray[i].querySelector("div[class='MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input']"),
                  multipleChoiceAnswer = tempArray[i].querySelectorAll('div[class="MuiChip-root MuiAutocomplete-tag MuiChip-deletable"]>span'),
                  openAnswer = tempArray[i].querySelector('textarea'),
                  yesOrNoAnswer = tempArray[i].querySelector("input[class='jss23']") as HTMLInputElement,
                  dependantNumber = tempArray[i].querySelector('div[data-component="depend_num"]'),
                  dependantText = tempArray[i].querySelector('div[data-component="depend_text"]'),
                  dependantQuestionNum = dependantNumber?.querySelector('fieldset>legend>span'),
                  dependantQuestionText = dependantText?.querySelector('fieldset>legend>span'),
                  dependantQuestion = dependantQuestionNum?.textContent != undefined ? dependantQuestionNum?.textContent?.replace(/[*]/g, "") : dependantQuestionText?.textContent != undefined ? dependantQuestionText?.textContent?.replace(/[*]/g, "") : "",
                  dependantQuestionAnswerNum = dependantNumber?.querySelector("input") as HTMLInputElement,
                  dependantQuestionAnswerText = dependantText?.textContent,
                  dependantAnswer = dependantQuestionAnswerNum?.value != undefined ? dependantQuestionAnswerNum?.value : dependantQuestionAnswerText != undefined ? dependantQuestionAnswerText : "",
                  multipleChoiceArray = Array.from(multipleChoiceAnswer),
                  answer = singleChoiceAnswer?.textContent != undefined ? singleChoiceAnswer?.textContent : 
                  (multipleChoiceArray.length > 0 ? multipleChoiceArray.map(item => item.innerHTML).join(', ').toString() : 
                  (openAnswer?.textContent != undefined ? openAnswer?.textContent : 
                  (yesOrNoAnswer?.value != undefined ? yesOrNoAnswer?.value : "")));
            console.log(multipleChoiceArray.map(item => item.innerHTML));
                  
            let obj = {
                        "Vraag": questionName?.textContent?.replace(/[*]/g, ""),
                        "Antwoord": answer
                        }
            let dependObj = 
                {
                    "Vraag": dependantQuestion,
                    "Antwoord": dependantAnswer
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