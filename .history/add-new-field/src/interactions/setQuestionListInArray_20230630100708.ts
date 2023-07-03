function setQuestionListInArray (): boolean{
    const container: HTMLCollection | null = document.getElementsByClassName("MuiCardContent-root") as HTMLCollection,
          dataContainer = container[0],
          questionnaire:  HTMLInputElement | null = document.getElementById('questionnaire') as HTMLInputElement,
          answerArray = [{}];
    console.log('Data: ', dataContainer);

    // arr.map(i => () => {
    //     const answers = i.querySelectorAll('div[data-component="column"]:has(input)'),
    //           tempArray = Array.from(answers);
    //     console.log('Temp array: ', tempArray)

    //     tempArray.map(j => () => {
    //         const questionName = j.querySelector("label"),
    //               answer = j.querySelector("input")
    //         let obj = {
    //                     "Vraag": questionName?.innerHTML,
    //                     "Antwoord": answer?.value
    //                   }
    //         console.log('Object: ', obj);
    //         answerArray.push(obj);
    //     })

    // })

        const answers = dataContainer.querySelectorAll('div[role="none"]'),
              tempArray = Array.from(answers);
        
        for (let i = 0; i < tempArray.length; i++) {
            const questionName = tempArray[i].querySelector("label:not(span)"),
                  answer = tempArray[i].querySelector("input"),
                  dependantNumber = tempArray[i].querySelector('div[data-component="depend_num"]'),
                  dependantQuestion = dependantNumber?.querySelector('fieldset>legend>span'),
                  dependantQuestionAnswer = dependantNumber?.querySelector('input');
            let obj = {
                        "Vraag": questionName?.textContent?.replace(/[*]/g, ""),
                        "Antwoord": answer?.value
                        }
            let dependObj = 
                {
                    "Vraag": dependantQuestion?.textContent?.replace(/[*]/g, ""),
                    "Antwoord": dependantQuestionAnswer?.value
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
        

        // tempArray.map(j => () => {
        //     const questionName = j.querySelector("label"),
        //           answer = j.querySelector("input")
        //     let obj = {
        //                 "Vraag": questionName?.innerHTML,
        //                 "Antwoord": answer?.value
        //               }
        //     console.log('Object: ', obj);
        //     answerArray.push(obj);

        //     return answerArray
        // })
    return true
}