/**
 * @author Pastetu <dinhquanganhxl@gmail.com>
 * Library classification : Button
 * Please do not copy in any form. Thankyou!
 */

const arrBtn = [".btn-neon1", ".btn-neon2", ".btn-trans1"];
arrBtn.forEach((e) => {
  let button = document.querySelectorAll(e);

  let select = (selector, name, classify, text) => {
    selector.addEventListener("click", (e) => {
      e.preventDefault();
    });
    if (classify == "neon") {
      let create = `<a href="" id=${name}><span></span><span></span><span></span><span></span>${text}</a>`;
      selector.innerHTML = create;
    }

    if (classify == "trans") {
      let create = `<a href=""><span>${text}</span><span>${text}</span></a>`;
      selector.innerHTML = create;
    }
  };

  button.forEach((more) => {
    let text = more.textContent;
    let choose;
    if (e == ".btn-neon1") {
      choose = "neon1";
      select(more, choose, "neon", text);
    } else if (e == ".btn-neon2") {
      choose = "neon2";
      select(more, choose, "neon", text);
    } else if (e == ".btn-trans1") {
      choose = "trans1";
      select(more, choose, "trans", text);
    }
  });
});
