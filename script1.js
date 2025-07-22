// Yêu cầu 1
function changeText() {
    document.getElementById('greeting').textContent = 'Chào mừng bạn đến với bài tập DOM!';
}

// Yêu cầu 2
document.getElementById('colorButton').addEventListener('click', function () {
    document.getElementById('box').style.backgroundColor = 'orange';
});

// Yêu cầu 3
document.getElementById('addTodo').addEventListener('click', function () {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();

    if (text !== '') {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;

        const btn = document.createElement('button');
        btn.textContent = 'Xóa';
        btn.onclick = function () {
            removeTodo(btn);
        };

        li.appendChild(span);
        li.appendChild(btn);
        document.getElementById('todoList').appendChild(li);

        input.value = ''; // clear input
    }
});

function removeTodo(buttonElement) {
    const li = buttonElement.parentElement;
    li.remove();
}

// Yêu cầu 4
function changeImage() {
    document.getElementById('myImage').src = 'https://www.svgrepo.com/show/452030/avatar-default.svg';
}

// Yêu cầu 5
function toggleHighlight() {
    document.getElementById('toggleClassText').classList.toggle('highlight');
}