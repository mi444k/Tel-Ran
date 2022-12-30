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

const allBlocks = document.getElementsByClassName("block");
const droparea = document.getElementsByClassName("droparea")[0];

let blockInsideDropareaCounter = 0;
function isBlockInside(block, target) {
  const blockRect = block.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  const x2 = blockRect.x;
  const y2 = blockRect.y;
  const width2 = blockRect.width;
  const height2 = blockRect.height;

  const x1 = targetRect.x;
  const y1 = targetRect.y;
  const width1 = targetRect.width;
  const height1 = targetRect.height;

  return (
    x2 + width2 > x1 &&
    x2 < x1 + width1 &&
    y2 + height2 > y1 &&
    y2 < y1 + height1
  );
}
function onMouseDown(evt) {
  const block = evt.target;
  if (!block.classList.contains("block")) {
    return;
  }
  const rect = block.getBoundingClientRect();
  const offsetX = evt.pageX - rect.x;
  const offsetY = evt.pageY - rect.y;
  let startInsideDroparea = isBlockInside(block, droparea);
  function mouseMove(evt) {
    const oldTop = parseInt(block.style.top, 10);
    const oldLeft = parseInt(block.style.left, 10);
    const x = evt.pageX - offsetX;
    const y = evt.pageY - offsetY;
    block.style.top = `${y}px`;
    block.style.left = `${x}px`;
    for (let i = 0; i < allBlocks.length; i++) {
      if (block === allBlocks[i]) {
        continue;
      }
      const isInside = isBlockInside(block, allBlocks[i]);
      if (isInside) {
        const trainRect = allBlocks[i].getBoundingClientRect();
        const trainX = trainRect.x;
        const trainY = trainRect.y;
        const dX = x - oldLeft;
        const dY = y - oldTop;
        allBlocks[i].style.top = `${trainY + dY}px`;
        allBlocks[i].style.left = `${trainX + dX}px`;
      }
    }
  }
  function mouseUp() {
    let finishInsideDroparea = isBlockInside(block, droparea);

    if (startInsideDroparea && !finishInsideDroparea) {
      blockInsideDropareaCounter--;
    }
    if (!startInsideDroparea && finishInsideDroparea) {
      blockInsideDropareaCounter++;
    }

    if (blockInsideDropareaCounter > 0) {
      droparea.style.backgroundColor = "rgba(0, 0, 255, 0.2)";
    } else {
      droparea.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    }

    document.body.removeEventListener("mousemove", mouseMove);
    document.body.removeEventListener("mouseup", mouseUp);
  }
  document.body.addEventListener("mousemove", mouseMove);
  document.body.addEventListener("mouseup", mouseUp);
}

document.body.addEventListener("mousedown", onMouseDown);
