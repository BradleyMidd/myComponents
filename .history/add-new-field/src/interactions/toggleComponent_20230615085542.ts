function toggleComponent(): boolean{
    const container: HTMLElement | null = document.getElementById("container") as HTMLElement,
          typeQuestion: HTMLElement | null = document.getElementById("type_vraag") as HTMLElement;
          if(typeQuestion.innerHTML == "Single choice" || typeQuestion.innerHTML == "Multiple choice"){
              container.style.display = 'block';
              return true
          }
          else{
              container.style.display = 'none';
              return false
          }
}