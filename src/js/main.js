const modal = document.getElementById("hireModal");
  const hireBtn = document.getElementById("hireBtn");


  // 
  const wrapper = document.querySelector('.cursor-wrapper');

  // Mouse move update (same as before)
  document.addEventListener('mousemove', e => {
    wrapper.style.left = `${e.clientX}px`;
    wrapper.style.top = `${e.clientY}px`;
  });
  
  // Hover effect: when cursor enters a button or link
  document.querySelectorAll('button, a').forEach(el => {
    el.addEventListener('mouseenter', () => {
      wrapper.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
      wrapper.classList.remove('hovering');
    });
  });
  