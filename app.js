document.querySelector('.bu button').addEventListener('click', addTask);

function addTask() {
    const taskValue = document.getElementById('tasks').value;
    const timeValue = document.getElementById('time').value;
    const dateValue = document.getElementById('date').value;
    
    if (taskValue === "" || timeValue === "" || dateValue === "") {
        alert("Please fill in all fields");
        return;
    }

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task');

    const taskInfo = document.createElement('p');
    taskInfo.textContent = `${taskValue} - ${timeValue} - ${dateValue}`;
    taskContainer.appendChild(taskInfo);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Remove";
    deleteButton.style.position = "relative";
    deleteButton.style.top = "12px";
    deleteButton.style.left = "7px";

    deleteButton.addEventListener('click', () => {
        taskContainer.remove();
    });
    taskContainer.appendChild(deleteButton);

    document.querySelector('.output').appendChild(taskContainer);

    document.getElementById('tasks').value = '';
    document.getElementById('time').value = '';
    document.getElementById('date').value = '';
}

// Add this line to log a message when the button is clicked
document.querySelector('.bu button').addEventListener('click', () => {

});
