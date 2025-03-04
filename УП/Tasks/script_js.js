const showObject = () =>{
    alert("Объявление Object: тип имя = { свойства }")
    const user = {
        login: "Alexandr",
        password: "1928",
        'comment password': "Корабль"
    }
    console.log(`${user.login} ${user.password} ${user['comment password']}`)
    delete user['comment password']
    console.log(user)
} 

SelectTask();
function SelectTask()
{
    let selectUser = +prompt('Укажите номер задания: ')
    if (selectUser === 1) Z_1();
    else if (selectUser === 2) Z_2();
    else if (selectUser === 3) Z_3();
    else if (selectUser === 4) showObject();
}
function Z_1(){
    alert('Z_1')
    let a = +prompt('Введите значение для a: ')
    let b = +prompt('Введите значение для b: ')
    if (a === b) alert('a = b')
    else if (a > b) alert(`min = ${b}, max = ${a}`)
    else alert(`min = ${a}, max = ${b}`)
}
function Z_2(){
    alert('Z_2')
    const height = +prompt('Введите кол-во строк: ')
    const width = +prompt('Введите кол-во столбцов: ')
    if (height > 0 || height < 10 || width > 0 || width < 10)
    {
        let strArray = '';
        let array = new Array(height) //let array = new Array(height, width)
        for (let i = 0; i < height; i++)
        {
            array[i] = new Array(width)
            for (let j = 0; j < width; j++)
            {
                array[i][j] = Math.floor(Math.random() * 11);
                strArray += array[i][j] + ' ';
            }
            strArray += '\n';
        }
        alert(strArray)
    }
    else alert('Значения введены не некорректно')
}

function Z_3(){
    alert('Z_3')
    const height = +prompt('Введите кол-во строк: ')
    const width = +prompt('Введите кол-во столбцов: ')
    if (height > 0 || height < 10 || width > 0 || width < 10){
        let strArray = '';
            let array = new Array(height)
            for (let i = 0; i < height; i++)
            {
                array[i] = new Array(width)
                for (let j = 0; j < width; j++)
                {
                    array[i][j] = Math.floor(Math.random() * 11);
                    strArray += array[i][j] + ' ';
                }
                strArray += '\n';
            }
            alert(strArray)
            console.log(strArray)
            strArray = '';

            for (let i = 0; i < height; i++){
                for (let j = 0; j < width; j++){
                    if (j % 2 === 0) {
                        strArray += array[i][j] + ' ';
                    }
                }
                strArray += '\n';
            }
            alert(`Четная матрица: \n${strArray}`)
        }
        else alert('Значения введены не некорректно')
            
}
//floor - метод округления числа до целого