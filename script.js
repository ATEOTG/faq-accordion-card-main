const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach((el) => {
  el.addEventListener("click", activeAccordion);
});

function activeAccordion(e) {
  const accordionHeader = e.target.closest(".accordion__header");
  const accordionTitle = accordionHeader.childNodes[1];
  const accordionArrow = accordionHeader.childNodes[3];
  const accordionText = accordionHeader.nextSibling.nextSibling;

  accordionTitle.classList.toggle("is-active");
  accordionArrow.classList.toggle("is-active");
  accordionText.classList.toggle("is-active");
}
