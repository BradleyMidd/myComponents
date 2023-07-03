function toggleComponent(): boolean{
    const container: HTMLElement | null = document.getElementById("container") as HTMLElement,
          options = document.getElementsByClassName("input-container"),
          json: HTMLElement | null = document.getElementById('json') as HTMLElement,
          typeQuestion: HTMLElement | null = document.getElementById("type_vraag") as HTMLElement;
          if(typeQuestion.innerHTML == "Single choice" || typeQuestion.innerHTML == "Multiple choice"){
              container.style.display = 'block';
              return true
            }
            else{
                container.style.display = 'none';
                if (options.length > 1){
                  for (let i = 1; i < options.length; i++) {
                      options[i].remove();
                      
                  }
                }
              return false
          }
}