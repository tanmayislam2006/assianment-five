// themebtn
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", function () {
    const body = document.getElementById("body");
    const randomNumber = Math.floor(Math.random() * 65535)
    const randomCode = randomNumber.toString(16);
    const randomColor = `#${randomCode}`;
    body.classList.add(`bg-[${randomColor}]`)
})
const completeButtons = document.querySelectorAll(".complete-btn");
for (const completeButton of completeButtons) {
    completeButton.addEventListener("click", function (even) {
        const taskCount = getElementByIdText("task-count");
        const sum = Math.max(0, taskCount - 1);
        changeInnerText("task-count", sum);
        // total pblm
        const point = getElementByIdText("count-point");
        let total = point + 1;
        changeInnerText("count-point", total);
        // added history
        const historyBody = document.getElementById("history-data");
        const cardTittle = document.getElementById("card-tittle-one").innerText;
        let now = new Date();
        let timeString = now.toLocaleTimeString();
        const divCreate = document.createElement('div');
        divCreate.innerHTML = `                <div class="my-3 bg-primary-bg p-2 text-gary-600 mx-2">
                    <p class="">You have Complete The Task ${cardTittle} at ${timeString}</p>
                </div>`
        historyBody.appendChild(divCreate)
        completeButton.setAttribute('disabled',true);
    })
}
const clearHistory=document.getElementById("clear-history");
clearHistory.addEventListener("click",function(event){
    const historyBody=document.getElementById("history-data");
    historyBody.innerHTML=""
})
const headerCard=document.getElementById("header-card");
headerCard.addEventListener("click",function(event){
    window.location.href="../HTML-FILE/index.html"
})
