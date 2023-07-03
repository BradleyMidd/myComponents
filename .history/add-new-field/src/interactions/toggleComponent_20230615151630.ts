function toggleComponent(): boolean{
    const container: HTMLElement | null = document.getElementById("container") as HTMLElement,
          typeQuestion: HTMLElement | null = document.getElementById("type_vraag") as HTMLElement,
          jsonInput: HTMLInputElement | null = document.getElementById('json') as HTMLInputElement;
          localStorage.setItem("Old", jsonInput.value);
          if(typeQuestion.innerHTML == "Single choice" || typeQuestion.innerHTML == "Multiple choice"){
              container.style.display = 'block';
              jsonInput.value = localStorage.getItem("Old")!;
              return true
            }
            else{
                container.style.display = 'none';
                jsonInput.value = "";
              return false
          }
}