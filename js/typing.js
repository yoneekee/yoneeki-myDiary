/********************************* */

const lastLeft = " ";
const typing_normal = function (textArray, className) {
  const $text = document.querySelector(className);
  const letters = textArray;
  const speed = 100;
  let i = 0;
  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  const typing = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
      await wait(speed);
      $text.innerHTML += letter.shift();
    }

    await wait(150);

    remove();
  };

  const remove = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
      await wait(speed);
      letter.pop();
      $text.innerHTML = letter.join("");
    }

    i = !letters[i + 1] ? 0 : i + 1;
    typing();
  };

  setTimeout(typing, 800);
};

typing_normal(["Lorem ipsum lorem", "ipsum lorem ipsum"], ".text_0");
