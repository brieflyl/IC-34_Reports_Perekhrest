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
        <p>Посилання на живу сторінку <b>завдань лабораторної 7</b><br><br>
            <a href="https://brieflyl.github.io/IC-34_Reports_Perekhrest/lab7/lab7.html" target="_blank">
                https://brieflyl.github.io/IC-34_Reports_Perekhrest/lab7/lab7.html
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій завдань лабораторної 7</b> <br><br>
            <a href="https://github.com/brieflyl/IC-34_Reports_Perekhrest" target="_blank">
                https://github.com/brieflyl/IC-34_Reports_Perekhrest
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

function task2() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 2</h3><br>
        <img src="./images/task2_task.png" alt="">
        
        <h3>Виконання</h3>
        <div style="background-color: #82C384; padding: 5px; width: 40%;">
            <h3>ЗАВДАННЯ 2</h3>

            <div style="display: flex; gap: 20px; align-items: center;">
                <button id="swapButton">SWAP ME</button>
                <input id="input1" type="text" value="!!!">
                <input id="input2" type="text" value="???">
            </div>
        </div>

        <h3>Програмний код</h3><br>
        <img src="./images/task2_prog.png" alt="">

        <h3>Результати виконання</h3><br>
        <img src="./images/task2_results1.png" alt="">
        <img src="./images/task2_results2.png" alt="">
    `;

    const swapButton = document.getElementById('swapButton');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');

    swapButton.addEventListener('click', () => {
        const temp = input1.value;
        input1.value = input2.value;
        input2.value = temp;
    });
}

function task4() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 4</h3><br>
        <img src="./images/task4_task.png" alt="">

        <h3>Виконання</h3>
        <div style="background-color: #82C384; padding: 5px; align-items: center;">
            <h3>ЗАВДАННЯ 4</h3>

            <div id="square" style="width: 100px; height: 100px; margin: 10px;
            border-style: dashed; border-color: red;"></div>

            <button id="decreaseButton">Зменшити</button>
            <button id="increaseButton">Збільшити</button>
        </div>

        <h3>Програмний код</h3><br>
        <img src="./images/task4_prog.png" alt="">

        <h3>Результати виконання</h3><br>
        <img src="./images/task4_results1.png" alt="">
        <img src="./images/task4_results2.png" alt="">
    `;

    const square = document.getElementById('square');
    const decreaseButton = document.getElementById('decreaseButton');
    const increaseButton = document.getElementById('increaseButton');

    decreaseButton.addEventListener('click', () => {
        const currentWidth = square.offsetWidth;
        const currentHeight = square.offsetHeight;
        if (currentWidth > 15 && currentHeight > 15) {
            square.style.width = `${currentWidth - 15}px`;
            square.style.height = `${currentHeight - 15}px`;
        }
    });

    increaseButton.addEventListener('click', () => {
        const currentWidth = square.offsetWidth;
        const currentHeight = square.offsetHeight;
        square.style.width = `${currentWidth + 15}px`;
        square.style.height = `${currentHeight + 15}px`;
    });
}

function task6() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 6</h3><br>
        <img src="./images/task6_task.png" alt="">

        <h3>Виконання</h3>
        <div style="background-color: #82C384; padding: 5px;">
            <h3>ЗАВДАННЯ 6</h3>

            <ul id="numberList" style="padding: 5px;">
                <li>1</li>
                <li>4</li>
                <li>8</li>
                <li>16</li>
                <li>20</li>
                <li>30</li>
            </ul><br>

            <button id="doubleButton">Подвоїти</button>
        </div>

        <h3>Програмний код</h3><br>
        <img src="./images/task6_prog.png" alt="">

        <h3>Результати виконання</h3><br>
        <img src="./images/task6_results1.png" alt="">
        <img src="./images/task6_results2.png" alt="">
        <img src="./images/task6_results3.png" alt="">
    `;

    const doubleButton = document.getElementById('doubleButton');
    const listItems = document.querySelectorAll('#numberList li');

    doubleButton.addEventListener('click', () => {
        listItems.forEach(item => {
            const currentValue = parseInt(item.textContent, 10);
            item.textContent = currentValue ** 2;
        });
    });
}

function task7() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 7</h3><br>
        <img src="./images/task7_task.png" alt="">

        <h3>Виконання</h3>
        <div style="background-color: #82C384; padding: 20px;">
            <ul id="categories">
                <li class="item">
                    <h2>Animals</h2>
                    <ul>
                        <li>Cat</li>
                        <li>Hamster</li>
                        <li>Horse</li>
                        <li>Parrot</li>
                    </ul>
                </li>
                <li class="item">
                    <h2>Products</h2>
                    <ul>
                        <li>Bread</li>
                        <li>Prasley</li>
                        <li>Cheese</li>
                    </ul>
                </li>
                <li class="item">
                    <h2>Technologies</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </li>
            </ul>
        </div>

        <h3>Програмний код</h3><br>
        <img src="./images/task7_prog.png" alt="">

        <h3>Результати виконання</h3><br>
        <img src="./images/task7_results.png" alt="">
    `;

    const categories = document.querySelectorAll('#categories .item');

    console.log(`Number of categories: ${categories.length}`);

    categories.forEach(category => {
        const categoryName = category.querySelector('h2').textContent;
        const elementsCount = category.querySelectorAll('ul li').length;
        console.log(`Category: ${categoryName}`);
        console.log(`Elements: ${elementsCount}`);
    });
}

function task8() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 8</h3><br>
        <img src="./images/task8_task.png" alt="">

        <h3>Виконання</h3>
        <div style="background-color: #82C384; padding: 10px;">
            <form class="login-form">
                <label>
                    Email
                    <input type="email" name="email" />
                </label>
                <label>
                    Password
                    <input type="password" name="password" />
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>

        <h3>Програмний код</h3><br>
        <img src="./images/task8_prog.png" alt="">

        <h3>Результати виконання</h3><br>
        <img src="./images/task8_results.png" alt="">
    `;

    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Запобігає перезавантаженню сторінки

        const email = loginForm.elements.email.value.trim();
        const password = loginForm.elements.password.value.trim();

        if (!email || !password) {
            alert('All form fields must be filled in');
            return;
        }

        const formData = {
            email,
            password
        };

        console.log(formData);
        loginForm.reset();
    });
}

function task9() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 9</h3><br>
        <img src="./images/task9_task.png" alt="">

        <h3>Виконання</h3>
        <div class="widget">
          <p>Background color: <span class="color">-</span></p>
          <button type="button" class="change-color">Change color</button>
        </div>

        <h3>Програмний код</h3><br>
        <img src="./images/task9_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task9_results.png" alt="">
    `;

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
    }

    const button = document.querySelector('.change-color');
    const colorSpan = document.querySelector('.color');

    button.addEventListener('click', () => {
        const newColor = getRandomHexColor();
        document.body.style.backgroundColor = newColor;
        colorSpan.textContent = newColor;
    });
}

function task10() {
    document.body.style.backgroundColor = 'white';
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 10</h3><br>
        <img src="./images/task10_task1.png" alt="">
        <img src="./images/task10_task2.png" alt="">

        <h3>Виконання</h3>
        <div id="controls">
          <input type="number" min="1" max="100" step="1" placeholder="Enter amount" />
          <button type="button" data-create>Create</button>
          <button type="button" data-destroy>Destroy</button>
        </div>

        <div id="boxes"></div>

        <h3>Програмний код</h3><br>
        <img src="./images/task10_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task10_results.png" alt="">
    `;

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }

    function createBoxes(amount) {
        const boxesContainer = document.getElementById('boxes');
        boxesContainer.innerHTML = '';
        let size = 30;

        for (let i = 0; i < amount; i++) {
            const box = document.createElement('div');
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            box.style.margin = '5px';
            boxesContainer.appendChild(box);
            size += 10;
        }
    }

    function destroyBoxes() {
        const boxesContainer = document.getElementById('boxes');
        boxesContainer.innerHTML = '';
    }

    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const input = document.querySelector('#controls input');

    createButton.addEventListener('click', () => {
        const amount = parseInt(input.value, 10);

        if (amount >= 1 && amount <= 100) {
            createBoxes(amount);
            input.value = '';
        } else {
            alert('Please enter a number between 1 and 100.');
        }
    });

    destroyButton.addEventListener('click', destroyBoxes);
}

function conclusion() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Висновки</h3>
        <p>
            На цій лабораторній роботі я придбала практичні навички роботи з об'єктами та методами об'єктів JS, <br>
            познайомилась з Callback-функціями, стрілочними функціями та стрілочними функціями як колбеками. <br>
            Зокрема, реалізувала 7 завдань для відпрацювання навичок засобами мови JavaScript.
        </p>
    `;
}