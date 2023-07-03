function setQuestionListInArray (): boolean{
    const container: HTMLCollection | null = document.getElementsByClassName("MuiCardContent-root") as HTMLCollection,
          arr = Array.from(container),
          answerArray = [{}];

    console.log('Array: ', arr);
    
    arr.filter(item => item.getAttribute("data-component") == "DataList")
    console.log('Filtered array: ', arr);

    arr.map(i => () => {
        const answers = i.querySelectorAll('div[data-component="column"]:has(input)'),
              tempArray = [...answers];
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
        })

    })
    return true
}