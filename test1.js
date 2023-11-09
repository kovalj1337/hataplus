function random(min,max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}
let game = confirm("Здорово, будеш грати?");
try {
    if (game) {
        alert("Ай да молодець!");
    } else {
        alert("Потеряйся, мелюзга");
        throw "Користувач потерявся";
    }
} catch(err){
    alert(err);
}
if(game){ //Перевірка чи хоче користувач грати
    let lengthFlot = random(1, 4),//Генерує довжину кораблів
        battlefield = 5,//Po3miP поля
        maxSheepPosition = battlefield - lengthFlot + 1, //Максимальне значення куди можна поставити першу палубу
        startRow,
        startCol,
        step,
        boatOrientation = random(1, 2); //1 Горизонтально 2 вертикально
        console.log(lengthFlot,boatOrientation);
        if(boatOrientation == 1){
            startCol = random(1,maxSheepPosition)
            startRow = random(1,battlefield)
            step = 1
        } else {
            startRow = random(1,maxSheepPosition)
            startCol = random(1,battlefield)
            step = 10
        }
        level = prompt("Обирай рівень складності 1:Лєгусенький 2:Нормальний 3:Вще пепец.");
        console.log(level)
    alert("Розпочати гру!");
    
    let vrag1 = +("" + startCol + startRow), //Палуби ворога
        vrag2 = (lengthFlot > 1) ? vrag1 + step : undefined, 
        vrag3 = (lengthFlot > 2) ? vrag2 + step : undefined,
        vrag4 = (lengthFlot > 3) ? vrag3 + step : undefined;

        console.log(lengthFlot,vrag1,vrag2,vrag3,vrag4);
    alert("Вражина вибрала де його судно!!!!!!!!1!!!111!!!1!!!!");
    
    alert("УВАГА Ваше судно може стояти від 11 до 55!!!!");
    
    alert("ok");

    let playerScore = 0,
        enemyScore = 0,
        hit = 0,
        enemyhit = 0,
        shot,
        shotvraga,
        fau,
        enemyfau,
        hardshot,
        ya1,
        ya2,
        ya3,
        ya4,
        myLengthflot,
        myStartCol,
        myStartRow,
        myBoatOrientacion,
        mystep

    if (level == 1){
        fau = 8
        enemyfau = 5 
    }else if (level == 2){
        fau = 5
        enemyfau = 5
    }else if (level == 3){
        fau = lengthFlot
        enemyfau = 7
    }
    if(myBoatOrientacion == 1) mystep = 1
    if(myBoatOrientacion == 2) mystep = 10
    do {
        myLengthflot = +prompt('Вибери кількість палуб від 1 до 4')
        myStartRow = +prompt('Вибери розташування по рядку 1 до 5')
        myStartCol = +prompt('Вибери розташування по колонці 1 до 5')
        myBoatOrientacion = +prompt('Вибери 1-Горизонтально 2-вертикально')

        try {
            if (myLengthflot < 1 || myLengthflot > 4) {
                alert("Ну це не серйозно від 1 до 4 довжина");
                throw "Користувач не вміє читати";
            }
            if (myStartRow < 1 || myStartRow > 5 || myStartCol < 1 || myStartCol > 5){
                alert("Ну це не серйозно від 1 до 5 по рядку чи по колонці");
                throw "Користувач не вміє читати";
            }
            if(myBoatOrientacion < 1 || myBoatOrientacion > 2){
                alert("Ну це не серйозно від 1 до 2");
                throw "Користувач не вміє читати";
            }
            if(isNaN(myLengthflot) || isNaN(myBoatOrientacion) || isNaN(myStartCol) || isNaN(myStartRow)){
                alert("Ну це не серйозно число введи");
                throw "Користувач не вміє читати";
            }
        } catch (error) {
            alert(error)
            continue
        }
    } while(myLengthflot < 1 || myLengthflot > 4 && myStartRow < 1 || myStartRow > 5 || myStartCol < 1 || myStartCol > 5 && myBoatOrientacion < 1 || myBoatOrientacion > 2)

    ya1 = +("" + myStartCol + myStartRow)
    ya2 = (myLengthflot > 1) ? ya1 + mystep : undefined
    ya3 = (myLengthflot > 2) ? ya2 + mystep : undefined
    ya4 = (myLengthflot > 3) ? ya3 + mystep : undefined

    while (playerScore < lengthFlot && enemyScore < lengthFlot && hit < fau && enemyhit < enemyfau) {
        shot = +prompt('Ну вибирай куда будеш стріляти,від 11 до 55');
        hit++
        try {
            if(isNaN(shot)){
                alert("Нормально введи число а не буковки від 11 до 55")
                throw "Користувач не вміє читати";
            }
            if(shot <= 10 || shot > 56){
                alert("Нормально введи число від 11 до 55")
                throw "Користувач не вміє читати";
            }
        } catch (error) {
            alert(error)
            continue
        }
        switch(shot){
           case vrag1:
           case vrag2:
           case vrag3:
           case vrag4:
            playerScore++
            alert("PAPADANIE!!!!!!11!!")
            if(playerScore === lengthFlot){
                alert("YPA PABEDA")
                break
            }
            switch(shot){
                case vrag1: 
                    vrag1 = undefined
                    break
                case vrag2: 
                    vrag2 = undefined
                    break
                case vrag3: 
                    vrag3 = undefined
                    break
                case vrag3: 
                    vrag3 = undefined
                    break
            }
            break
        default: alert ("Promazav((((((((((((((((((((9")
        }
        console.log(hit + "postril")
        // if (shot === vrag1 || shot === vrag2 || shot === vrag3 || shot === vrag4){
        //     alert("Пападаніє!");
        //     if(shot === vrag1) vrag1 = undefined
        //     if(shot === vrag2) vrag2 = undefined
        //     if(shot === vrag3) vrag3 = undefined
        //     if(shot === vrag4) vrag4 = undefined
        //     playerScore++;
        //     console.log(playerScore + "popadinya");
        //     break;
        // } else {
        //     alert("Мімо");
        // }

        
        let hitvraga = true;
        while(hitvraga){
            shotvraga = random(1, battlefield);
            console.log(shotvraga);             
            if(level == 3){
                hardshot = shotvraga++
                console.log(hardshot + "+2");
                enemyhit++
                if (shotvraga === ya1 || shotvraga === ya2 || shotvraga === ya3 || shotvraga === ya4 || hardshot === ya1 || hardshot === ya2 || hardshot === ya3 || hardshot === ya4){
                    alert("ПО вам попали!!11!!!");
                    if(shotvraga === ya1 || hardshot === ya1) ya1 = undefined
                    if(shotvraga === ya2 || hardshot === ya2) ya2 = undefined
                    if(shotvraga === ya3 || hardshot === ya3) ya3 = undefined
                    if(shotvraga === ya4 || hardshot === ya4) ya4 = undefined
                    enemyScore++;
                    continue;
                }else{
                    alert("Вражина промазала")
                    hitvraga = false;
                }
            }else {
                if (shotvraga === ya1 || shotvraga === ya2 || shotvraga === ya3 || shotvraga === ya4){
                    alert("ПО вам попали!!11!!!");
                    if(shotvraga === ya1) ya1 = undefined
                    if(shotvraga === ya2) ya2 = undefined
                    if(shotvraga === ya3) ya3 = undefined
                    if(shotvraga === ya4) ya4 = undefined
                    enemyScore++;
                    continue;
                }else{
                    alert("Вражина промазала")
                    hitvraga = false;
                }
            }
            
        
        }
    } 

    let tochnist = playerScore / hit * 100,
    tochnistenemy = enemyScore / enemyhit * 100;
    
    if (playerScore === lengthFlot) {
        alert("Ой!Який ти молодець! Ваша точність" + tochnist + "%!!!!!11!!!!1 А у ворожини" + tochnistenemy + "%");
    } else if (hit == fau){
        alert("Ракети закінчились(" + tochnistenemy + "% У ворожини Ваша точність" + tochnist + "%!!!!!11!!!!1")
    } else if (enemyhit == enemyfau) {
        alert("А чо а де ракети,а нема, ви пабєділі")
    } else {
        alert("Вас срозчерепашили Но у вас" + tochnist + "% і " + tochnistenemy + "% У ворожини");
    }
}
