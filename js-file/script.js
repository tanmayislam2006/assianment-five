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
        let taskCount = getElementByIdText("task-count");
        taskCount = taskCount > 0 ? taskCount - 1 : taskCount;
        // if (taskCount > 0) {
        //     taskCount--;
        // }
        changeInnerText("task-count", taskCount);
        // total pblm
        const point = getElementByIdText("count-point");
        let total = point + 1;
        changeInnerText("count-point", total);
        // added history
        const historyBody = document.getElementById("history-data");
        const accessParent=even.target.parentNode.parentNode.parentNode;
        const accesSpan=accessParent.childNodes[3].childNodes
        console.log(accesSpan);
        const title=accesSpan[0].innerText
        let now = new Date();
        let timeString = now.toLocaleTimeString();
        const divCreate = document.createElement('div');
        divCreate.innerHTML = `                <div class="my-3 bg-primary-bg p-2 text-gary-600 mx-2">
                    <p class="">You have Complete The Task ${title} at ${timeString}</p>
                </div>`
        historyBody.appendChild(divCreate)
        completeButton.setAttribute('disabled', true);
        if (taskCount == 0) {
            alert('Welcome You complete all the task ')
        }



    })
}
const clearHistory = document.getElementById("clear-history");
clearHistory.addEventListener("click", function (event) {
    const historyBody = document.getElementById("history-data");
    historyBody.innerHTML = ""
})
const headerCard = document.getElementById("header-card");
headerCard.addEventListener("click", function (event) {
    window.location.href = "../HTML-FILE/index.html"
});

