function toggleComponent({name}: {name: string}): string{
    const container = document.getElementById("container"),
          typeQuestion = document.getElementById("type_vraag");
    return name
    // if(typeQuestion.innerHTML == "Single choice" || typeQuestion.innerHTML == "Multiple choice"){
    //     container.style.display = 'block';
    // }
    // else{
    //     container.style.display = 'none';
    // }
}