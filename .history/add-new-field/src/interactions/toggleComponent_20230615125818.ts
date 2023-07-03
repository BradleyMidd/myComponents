function toggleComponent(): boolean{
    const container: HTMLElement | null = document.getElementById("container") as HTMLElement,
          typeQuestion: HTMLElement | null = document.getElementById("type_vraag") as HTMLElement;
          if(typeQuestion.innerHTML == "Single choice" || typeQuestion.innerHTML == "Multiple choice"){
              container.style.display = 'block';
              return true
            }
            else{
                const options = document.querySelectorAll("[id*=input-container]"),
                      json = document.getElementById('json'),
                      removeBtn = document.getElementById('remove')
                container.style.display = 'none';
                
                if (options.length > 1){
                  for (let i = 1; i < options.length; i++) {
                      options[i].remove();
                  }
                  if (removeBtn) removeBtn.style.display = 'none'
                }
              return false
          }
}