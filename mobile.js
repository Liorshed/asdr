function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
  
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1500; // Increase this value to slow down (in milliseconds)
        let startTime = null;
  
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
  
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }
  
        function ease(t, b, c, d) {
          // Custom easing function for smoother scrolling
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        }
  
        requestAnimationFrame(animation);
      }
    });
  });

  window.onload = function () {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
    }
  };