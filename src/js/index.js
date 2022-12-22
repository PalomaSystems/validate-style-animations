export const validateStyle = (element, addOrRemove = true) => {
  if (addOrRemove) {
    element.style.borderColor = "red";
    element.style.backgroundColor = "pink";
  } else {
    element.style.border = "";
    element.style.backgroundColor = "";
  }
};
window.validateStyle = function (element, addOrRemove = true) {
  if (addOrRemove) {
    element.style.borderColor = "red";
    element.style.backgroundColor = "pink";
  } else {
    element.style.border = "";
    element.style.backgroundColor = "";
  }
};
