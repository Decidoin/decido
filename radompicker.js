

function findRadom() {
  let title = document.getElementsByName('title')[0].value
  let values = document.getElementsByName('options')[0].value.split(",");

  if(title.length == 0 || (values.length == 1 && values[0] == "")){
    toggleModal();
    return;
  }
  
  let index = Math.floor(Math.random() * (values.length))

  if(values.length > 0 && values[index] != ""){
    document.cookie = "Selected="+values[index]+";";
    document.getElementById("transition").click();
  }

  if(values[index] == "" && values.length > 1){
    for(let i=0; i<values.length ; i++){
      if(values[i] != ""){
        findRadom();
        break;
      }
    }
  }
}


function toggleModal(){
  document.getElementById('modal').classList.toggle('active');
}
