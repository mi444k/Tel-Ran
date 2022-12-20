const box = document.getElementsByClassName("box")[0];
const wrapper = document
  .getElementsByClassName("wrapper")[0]
  .getBoundingClientRect();
const wrapperBorderWidth = parseInt(
  getComputedStyle(
    document.getElementsByClassName("wrapper")[0],
    null
  ).getPropertyValue("border-width"),
  10
);
const droparea = document.getElementsByClassName("droparea")[0];

document.addEventListener("mousedown", evt => {
  const rect = box.getBoundingClientRect();
  const offsetX = evt.pageX - rect.x;
  const offsetY = evt.pageY - rect.y;
  function mouseMove(evt) {
    const drop = droparea.getBoundingClientRect();
    const newX = evt.pageX - offsetX;
    const newY = evt.pageY - offsetY;
    if (
      newX > wrapper.x &&
      newX < wrapper.x + wrapper.width - rect.width - wrapperBorderWidth * 2 &&
      newY > wrapper.y &&
      newY < wrapper.y + wrapper.height - rect.height - wrapperBorderWidth * 2
    ) {
      box.style.left = `${newX - wrapper.left}px`;
      box.style.top = `${newY - wrapper.top}px`;
    }
    if (
      newX > drop.left &&
      newX < drop.left + drop.width - wrapperBorderWidth &&
      newY > drop.top &&
      newY < drop.top + drop.height - wrapperBorderWidth
    ) {
      droparea.style.background = "rgba(0,0,255,0.2)";
    } else {
      droparea.style.background = "rgba(255,0,0,0.2)";
    }
  }

  function mouseUp() {
    document.body.removeEventListener("mousemove", mouseMove);
    document.body.removeEventListener("mouseup", mouseUp);
  }

  if (
    evt.pageX > rect.x &&
    evt.pageX < rect.x + rect.width &&
    evt.pageY > rect.y &&
    evt.pageY < rect.y + rect.height
  ) {
    document.body.addEventListener("mousemove", mouseMove);
    document.body.addEventListener("mouseup", mouseUp);
  }
});
