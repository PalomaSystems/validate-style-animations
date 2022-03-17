export const validateStyle = (element, addOrRemove = true) => {
  if (addOrRemove) {
    element.style.borderColor = "red";
    element.style.backgroundColor = "pink";
  } else {
    element.style.border = "1px solid #ced4da";
    element.style.backgroundColor = "transparent";
  }
};
window.validateStyle = function (element, addOrRemove = true) {
  if (addOrRemove) {
    element.style.borderColor = "red";
    element.style.backgroundColor = "pink";
  } else {
    element.style.border = "1px solid #ced4da";
    element.style.backgroundColor = "transparent";
  }
};
