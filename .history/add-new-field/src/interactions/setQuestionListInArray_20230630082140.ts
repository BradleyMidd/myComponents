function setQuestionListInArray (): boolean{
    const container: HTMLCollection | null = document.getElementsByClassName("MuiCardContent-root") as HTMLCollection,
          dataContainer = container[0],
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
                        "Vraag": questionName?.textContent,
                        "Antwoord": answer?.value
                        }
            let dependObj = 
                {
                    "Vraag": dependantQuestion?.textContent,
                    "Antwoord": dependantQuestionAnswer?.value
                }
            console.log('Object: ', obj);
            console.log('Depend Object: ', dependObj)
            answerArray.push(obj); 
            if(dependObj){
                answerArray.push(dependObj);  
            } 
        }

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