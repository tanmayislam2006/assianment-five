// themebtn
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", function () {
    const body = document.getElementById("body");
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const randomColor = `rgb(${r},${g},${b})`;
    body.style.backgroundColor = randomColor
})
const completeButtons = document.querySelectorAll(".complete-btn");
for (const completeButton of completeButtons) {
    completeButton.addEventListener("click", function (event) {
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
        const accessParent = event.target.parentNode.parentNode.parentNode;
        const accesSpan = accessParent.childNodes[3].childNodes
        const title = accesSpan[0].innerText
        let now = new Date();
        let timeString = now.toLocaleTimeString();
        const divCreate = document.createElement('div');
        divCreate.innerHTML = `                <div class="my-3 bg-primary-bg p-2 text-gary-600 mx-2">
                    <p class="">You have Complete The Task ${title} at ${timeString}</p>
                </div>`
        historyBody.appendChild(divCreate)
        alert("Board Update Successfully")
        completeButton.setAttribute('disabled', true);
        completeButton.innerText="Completed"
        if (taskCount == 0) {
            alert('Welcome! You complete all the task ')
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
    window.location.href = "/assianment-five/blogs.html"
});
function todayDate() {
    const date = new Date();
    //const days= [0,1,2,3,4,5,6]
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let today = days[date.getDay()];
    // const months=[0,1,2,3,4,5,6,7,8,9,10,11]
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];
    // 01
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let currentDay = `${day} ${month},${year}`
    changeInnerText("day", today);
    changeInnerText("date", currentDay);
}
todayDate();