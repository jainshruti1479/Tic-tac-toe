let cellArray = document.getElementsByClassName('cells');
let resetGame = document.getElementById('reset');
let turn = 'O'
let showTurn = document.getElementById('turn')
showTurn.innerHTML = `Turn For ${turn === 'X' ? 'O' : 'X'}`
let endGame = false
const changeTurn = () =>{
    console.log('called')
    return turn === 'X' ? 'O' : 'X';
}
const checkWin = (array)=>{
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],        
]
wins.forEach((ele)=>{
    if(array[ele[0]].innerHTML !== '' && array[ele[0]].innerHTML === array[ele[1]].innerHTML && array[ele[1]].innerHTML === array[ele[2]].innerHTML){
        console.log('Game End')
        endGame = true;
        ele.forEach((e)=>{
            array[e].style.background = '#ff070780'
            showTurn.innerHTML=`${turn} won!`
            showTurn.style.cssText = 'color:green; font-size:1.85rem'
        })
    }
})
}
const reset = () =>{
    console.log('reset called')
    turn = 'O'
    Array.from(cellArray).forEach((element)=>{
        element.innerHTML = ''
        element.style.background = 'none'
    })
    endGame = false
    showTurn.innerHTML = `Turn For ${turn === 'X' ? 'O' : 'X'}`
    showTurn.style.cssText = 'color:black; font-size:1.75rem'
}
Array.from(cellArray).forEach((element)=>{
    element.addEventListener('click',()=>{
        if(!endGame){
            turn = changeTurn()
            element.innerHTML = turn
            showTurn.innerHTML = `Turn For ${turn === 'X' ? 'O' : 'X'}`
            checkWin(Array.from(cellArray));
        }
    })
})
resetGame.addEventListener('click',()=>{
     reset()   
})