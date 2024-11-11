
//accordian

const accordianItemHeaders = document.querySelectorAll(
  ".accordian-item-header"
);

accordianItemHeaders.forEach(accordianItemHeader => {
  accordianItemHeader.addEventListener("click", () => {
    const current = document.querySelector(".accordian-item-header.active");

    if (current && current !== accordianItemHeader) {
      current.classList.toggle("active");
      current.nextElementSibling.style.maxHeight = 0;
    }
    accordianItemHeader.classList.toggle("active");

    const accordianItemBody = accordianItemHeader.nextElementSibling;

    if (accordianItemHeader.classList.contains("active")) {
      accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
    } else {
      accordianItemBody.style.maxHeight = 0;
    }
  });
});


//checkbox tick
document.querySelectorAll('.accordian-item-header').forEach(header => {
  header.addEventListener('click', function() {
    const checkbox = this.querySelector('.chk');
    checkbox.checked = !checkbox.checked; // Toggle the checkbox state
  });
});



//active accordian
document.addEventListener("DOMContentLoaded", () => {
  // Find the active accordion header and open it
  const activeHeader = document.querySelector(".accordian-item-header.active");
  if (activeHeader) {
    const accordianItemBody = activeHeader.nextElementSibling;
    accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
  }
});