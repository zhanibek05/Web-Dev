let addButton = document.getElementById('addButton');
let tasksList = document.getElementById('tasksList');
let input = document.getElementById('input');

addButton.addEventListener('click', function(){
    //create newTask div
    if(input.value == "")
        alert("Empty task!");
    else{
        var newTask = document.createElement('div');
        newTask.classList.add('tasks'); // add style tasks in css
        tasksList.appendChild(newTask);
        //create newPar paragraph into new task div
        var newPar = document.createElement('p');
        newPar.innerText = input.value;
        newTask.appendChild(newPar);
        
        // create deleting image into new task div
        var delImg = document.createElement('img');
        delImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQid1CTulGtyIQO0OWXbxfwACywGYP-boE8K6kdv3JhcEh8jT_eHQido9lE4D4GoKDb1dI&usqp=CAU';
        delImg.classList.add('delImg');
        newTask.appendChild(delImg);
        // create undone image into div
        var undoneImg = document.createElement('img');
        undoneImg.src = 'https://cdn-icons-png.flaticon.com/128/649/649730.png';
        undoneImg.classList.add('undoneImg');
        newTask.appendChild(undoneImg);

        input.value = "";

        // remove the task if click on delete image
        delImg.addEventListener('click', function(){
            tasksList.removeChild(newTask);
        })

        undoneImg.addEventListener('click', function(){
            newTask.classList.add('done')
            newTask.removeChild(undoneImg);
            var doneImg = document.createElement('img');
            doneImg.src = 'https://cdn-icons-png.flaticon.com/128/9222/9222555.png';
            doneImg.classList.add('doneImg');
            newTask.appendChild(doneImg);
    })
    }
  
})

