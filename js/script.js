let button = document.querySelectorAll(".box_size")
let result = document.querySelector(".result")
let turn = false
let ganeOver = false


const checkNum = [
    [0 , 1 , 2 , 3 , 4], //row start
    [5 , 6 , 7 , 8 , 9],
    [10 , 11 , 12 , 13 , 14],
    [15 , 16 , 17 , 18 , 19],
    [20 , 21 , 22 , 23 , 24], //row end
    [0 , 5 , 10 , 15 , 20], //coloum start
    [1 , 6 , 11 , 16 , 21],
    [2 , 7 , 12 , 17 , 22],
    [3 , 8 , 13 , 18 , 23],
    [4 , 9 , 14 , 19 , 24],//coloum end
    [0 , 6 , 12 , 18 , 24],
    [4 , 8 , 12 , 16 , 20] //angel
]

button.forEach((item) =>{
    item.addEventListener('click' , ()=>{
        if(turn){
            item.innerHTML = "O"
            turn = false
        }else{
            item.innerHTML = "X"
            turn = true
        }
        item.disabled = true
        winnerCheck()
    })
})

const winnerCheck = ()=>{
    for(let check of checkNum){
        const check1 = button[check[0]].innerHTML
        const check2 = button[check[1]].innerHTML
        const check3 = button[check[2]].innerHTML
        const check4 = button[check[3]].innerHTML
        const check5 = button[check[4]].innerHTML
        if(check1 != '' && check2 !='' && check3 !='' && check4 !='' && check5 !=''){
            if(check1 === check2 && check2 === check3 && check3 === check4 && check4 === check5){
                // alert(`${check1} winner`)
                result.innerHTML = (`Player ${check1} is the Winner`)
                ganeOver = true;
                disableAllButtons();
                return;
            }
        }
        if ([...button].every(btn => btn.innerHTML !== "")) {
            result.innerHTML = "It's a draw!";
            ganeOver = true;
        }
    }
}

const disableAllButtons = () => {
    button.forEach(btn => btn.disabled = true);
};

const resetGame = () => {
    button.forEach(btn => {
        btn.innerHTML = "";
        btn.disabled = false;
    });
    result.innerHTML = "";
    turn = false;
    ganeOver = false;
};