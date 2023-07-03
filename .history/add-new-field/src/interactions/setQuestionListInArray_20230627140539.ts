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
        console.log('Temp array: ', tempArray)

        tempArray.map(j => () => {
            const questionName = j.querySelector("label"),
                  answer = j.querySelector("input")
            let obj = {
                        "Vraag": questionName?.innerHTML,
                        "Antwoord": answer?.value
                      }
            console.log('Object: ', obj);
            answerArray.push(obj);

            return answerArray
        })
    return true
}