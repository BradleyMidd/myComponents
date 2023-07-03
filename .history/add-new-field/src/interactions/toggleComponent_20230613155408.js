function toggleComponent(){
    container = document.getElementById("container");
    typeQuestion = document.getElementById("type_vraag")
    if(typeQuestion.innerHTML == "Single choice" || typeQuestion.innerHTML == "Multiple choice"){
        container.style.display = 'block';
    }
    else{
        container.style.display = 'none';
    }
}