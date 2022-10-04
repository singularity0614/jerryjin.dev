const distanceBar = document.querySelector('.distance-bar');

window.addEventListener('scroll', () => {
  const distance = window.scrollY;
  const maxDistance = document.body.offsetHeight - window.innerHeight;
  const percentage = (distance / maxDistance) * 100;
  distanceBar.style.width = `${percentage}%`;
});

window.onload = () => {
    const distance = window.scrollY;
    const maxDistance = document.body.offsetHeight - window.innerHeight;
    const percentage = (distance / maxDistance) * 100;
    distanceBar.style.width = `${percentage}%`;
}

const targets = document.querySelectorAll(".show-on-scroll");

const observer = new IntersectionObserver(callback);

// Loop through each of the target
targets.forEach(function(target) {
  // Hide the element
  target.classList.add("opacity-0");

  // Add the element to the watcher
  observer.observe(target);
});

// Callback for IntersectionObserver
const callback = function(entries) {
  entries.forEach(entry => {

    // Is the element in the viewport?
    if (entry.isIntersecting) {

      // Add the fadeIn class:
      entry.target.classList.add("animate-fade-in-from-bottom");
    } else {

      // Otherwise remove the fadein class
      entry.target.classList.remove("animate-fade-in-from-bottom");
    }
  });
};