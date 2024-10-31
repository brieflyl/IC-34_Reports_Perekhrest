document.querySelectorAll('.btns-menu').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btns-menu').forEach(btn => btn.classList.remove('clicked'));
        document.querySelectorAll('.html-btn').forEach(btn => btn.classList.remove('clicked1'));
        
        button.classList.add('clicked');
    });
});

document.querySelectorAll('.html-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btns-menu').forEach(btn => btn.classList.remove('clicked'));
        document.querySelectorAll('.html-btn').forEach(btn => btn.classList.remove('clicked1'));
        
        button.classList.add('clicked1');
    });
});

function topic() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/theme.png" alt="">
        <br><br> 
        <p>Посилання на живу сторінку <b>завдань лабораторної 5</b><br><br>
            <a href="https://brieflyl.github.io/IC-34_Web_Perekhrest_Lab5/" target="_blank">
                https://brieflyl.github.io/IC-34_Web_Perekhrest_Lab5/
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій завдань лабораторної 5</b> <br><br>
            <a href="https://github.com/brieflyl/IC-34_Web_Perekhrest_Lab5" target="_blank">
                https://github.com/brieflyl/IC-34_Web_Perekhrest_Lab5
            </a><br><br>
        </p>
        <p>Посилання на живу сторінку <b>звітів</b> <br><br>
            <a href="https://brieflyl.github.io/IC-34_Reports_Perekhrest/" target="_blank">
                https://brieflyl.github.io/IC-34_Reports_Perekhrest/
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій звітів</b> <br><br>
            <a href="https://github.com/brieflyl/IC-34_Reports_Perekhrest" target="_blank">
                https://github.com/brieflyl/IC-34_Reports_Perekhrest
            </a><br><br>
        </p>
    `;
}

function task1() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 1</h3><br>
        <img src="./images/task1_task.png" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task1_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task1_results.png" alt="">
    `;
}

function task2() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 2</h3><br>
        <img src="./images/task2_task.png" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task2_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task2_results.png" alt="">
    `;
}

function task3() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 3</h3><br>
        <img src="./images/task3_task.png" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task3_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task3_results.png" alt="">
    `;
}

function task4() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 4</h3><br>
        <img src="./images/task4_task.png" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task4_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task4_results.png" alt="">
    `;
}

function task5() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 5</h3><br>
        <img src="./images/task5_task.png" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task5_prog1.png" alt=""><br>
        <img src="./images/task5_prog2.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task5_results1.png" alt=""><br>
        <img src="./images/task5_results2.png" alt="">
    `;
}

function conclusion() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Висновки</h3>
        <p>
            На цій лабораторній роботі я придбала практичні навички роботи з конструкціями мови JS, <br>
            масивами та функціями в js-сценаріях. <br>
            Зокрема, реалізувала 5 завдань для відпрацювання навичок.
        </p>
    `;
}