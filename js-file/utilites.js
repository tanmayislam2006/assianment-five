
// text by id
function getElementByIdText(id) {
    const value = document.getElementById(id).innerText;
    const convertValue = parseFloat(value);
    return convertValue;
}
// change inner text by id
function changeInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
// toggle display by id
function displayRemove(id, status) {
    const element = document.getElementById(id);
    element.classList.remove(status);

}
function displayAdd(id, status) {
    const element = document.getElementById(id);
    element.classList.add(status);

}
