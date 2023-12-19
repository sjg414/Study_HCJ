function winner(numPerson) {
    let winnerPerson = Math.floor(Math.random() * numPerson + 1);  //응모자 수안에서 랜덤으로 당첨자 뽑기

    document.querySelector('#num').innerHTML = numPerson;
    document.querySelector('#winnerPerson').innerHTML = winnerPerson;

}
