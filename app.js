
function checkClicksInKeyBoard() {
    window.addEventListener('keydown', (key) => {
        console.log(key)
        writeInDisplay(key.key);  
        switch (key.key) {
            case 'Enter':
                calc()
                break;

            case ',':
                break;

            case 'Backspace':
                back();
                break;

            case ',':
                checkAndAddKey('.');
            default:
                break;
        }

    })
}

function writeInDisplay(key) {
    const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '-', '+', '.', '/', '%'];

    if (keys.includes(key)) {
        checkAndAddKey(key)

    }
}

function checkClicksDisplay() {
    const keys = document.querySelectorAll('.key');
    addEventInKey(keys);
}

function addEventInKey(arrayOfKeys) {
    arrayOfKeys.forEach((spanElement) => {
        spanElement.addEventListener('click', () => {
            checkAndAddKey(spanElement.textContent);
        });
    });
}

function checkAndAddKey(key) {
    if (key == 'C') {
        clean();

    } else if (key == '<') {
        back();

    } else if (key == '=') {
        calc();

    } else {
        insert(key);
    };
}

function insert(num){
    document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + num;
}

function clean(){
    document.getElementById("input").innerHTML = ""
}

function back(){
    let res = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = res.substring(0, res.length -1)
}

function calc(){
    let res = document.getElementById("input").innerHTML;
    if (res){
        document.getElementById("input").innerHTML = eval(res)
    }
}

function init() {
    checkClicksDisplay();
    checkClicksInKeyBoard();
}

init();
