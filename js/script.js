const inputMoney = document.getElementById('money');
const peopleNumber = document.getElementById('people');
const percentage5 = document.getElementById('percentage5');
const percentage10 = document.getElementById('percentage10');
const percentage15 = document.getElementById('percentage15');
const percentage25 = document.getElementById('percentage25');
const percentage50 = document.getElementById('percentage50');
const tipAmount = document.getElementById('tipAmount');
const customInput = document.getElementById('custom');
const totalAmount = document.getElementById('total');
const resetButton = document.getElementById('reset');


function main(){
    valueMoney = 0;
    valuePeople = 0;
    customValue = 0;
    
    inputMoney.addEventListener('keyup',()=>{
        valueMoney = inputMoney.value;
        console.log(valueMoney);
    });

    peopleNumber.addEventListener('keyup',()=>{
        valuePeople = peopleNumber.value;
        console.log(valuePeople);
    });

    customInput.addEventListener('keyup', (suma)=>{
        customValue = customInput.value;
        console.log(customValue);

        suma = ((valueMoney * customValue) / 100) / valuePeople;
        tipAmount.innerHTML = `$${suma}`;
        totalAmount.innerHTML = `$${suma * valuePeople}`;
    });

//================= PERCENTAGE BUTTONS ====================
    
    percentage5.addEventListener('click', (suma)=>{
        suma = ((valueMoney * 5) / 100) / valuePeople;
        tipAmount.innerHTML =`$${suma}`;
        totalAmount.innerHTML = `$${suma * valuePeople}`;
    });

    percentage10.addEventListener('click', (suma)=>{
        suma = ((valueMoney * 10) / 100) / valuePeople;
        tipAmount.innerHTML =`$${suma}`;
        totalAmount.innerHTML = `$${suma * valuePeople}`;
    });
    percentage15.addEventListener('click', (suma)=>{
        suma = ((valueMoney * 15) / 100) / valuePeople;
        tipAmount.innerHTML =`$${suma}`;
        totalAmount.innerHTML = `$${suma * valuePeople}`;
    });
    percentage25.addEventListener('click', (suma)=>{
        suma = ((valueMoney * 25) / 100) / valuePeople;
        tipAmount.innerHTML =`$${suma}`;
        totalAmount.innerHTML = `$${suma * valuePeople}`;
    });
    percentage50.addEventListener('click', (suma)=>{
        suma = ((valueMoney * 50) / 100) / valuePeople;
        tipAmount.innerHTML =`$${suma}`;
        totalAmount.innerHTML = `$${suma * valuePeople}`;
    });


    resetButton.addEventListener('click', ()=>{
        location.reload();
    });
}

main();