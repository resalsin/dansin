/**
 * Popover component
 */
const popoverTriggers = document.querySelectorAll(".ha-popover-trigger");

popoverTriggers.forEach((trigger) => {
  const popover = trigger.nextElementSibling;
  popover["isClicked"] = false;

  trigger.addEventListener("mouseover", () => {
    if (!popover.isClicked) {
      popover.classList.add("active");
    }
  });

  trigger.addEventListener("mouseout", () => {
    if (!popover.isClicked) {
      popover.classList.remove("active");
    }
  });

  trigger.addEventListener("click", () => {
    popover.isClicked = !popover.isClicked;
    popover.classList.toggle("active", popover.isClicked);
  });

  popover.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click event from bubbling up
  });
});

document.addEventListener("click", (event) => {
  popoverTriggers.forEach((trigger) => {
    const popover = trigger.nextElementSibling;
    if (!trigger.contains(event.target) && !popover.contains(event.target)) {
      popover.classList.remove("active");
      popover.isClicked = false;
    }
  });
});

/**
 * Pronunciation component
 */
const pros = document.querySelectorAll(
  ".ha-pronunciation-wrapper .ha-pronunciation > span"
);

for (pro of pros) {
  let rgx = /َ|ِ|ُ|ْ|ّ/g;

  pro.innerHTML = pro.innerHTML.replace(rgx, '<span class="ha-erab">$&</span>');
}
