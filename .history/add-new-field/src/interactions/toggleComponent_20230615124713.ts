function toggleComponent(): boolean{
    const container: HTMLElement | null = document.getElementById("container") as HTMLElement,
          json: HTMLElement | null = document.getElementById('json') as HTMLElement,
          typeQuestion: HTMLElement | null = document.getElementById("type_vraag") as HTMLElement;
          if(typeQuestion.innerHTML == "Single choice" || typeQuestion.innerHTML == "Multiple choice"){
              container.style.display = 'block';
              return true
            }
            else{
                const options = document.querySelectorAll("[id*=input-container]");
                container.style.display = 'none';
                console.log(options)
                if (options.length > 1){
                    console.log(options.length)
                  for (let i = 1; i < options.length; i++) {
                      options[i].remove();
                      
                  }
                }
              return false
          }
}