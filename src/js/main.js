const modal = document.getElementById("hireModal");
  const hireBtn = document.getElementById("hireBtn");


  // 

  document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorGlow = document.querySelector('.cursor-glow');

    // Update cursor position
    const updateCursor = (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
    };

    // Check if hovering over clickable elements
    const updateCursorState = (e) => {
        const target = e.target;
        const isClickable = 
            window.getComputedStyle(target).cursor === 'pointer' ||
            target.tagName.toLowerCase() === 'button' ||
            target.tagName.toLowerCase() === 'a';

        cursorDot.classList.toggle('expanded', isClickable);
    };

    // Event listeners
    document.addEventListener('mousemove', (e) => {
        updateCursor(e);
        updateCursorState(e);
    });

    // Handle cursor visibility when leaving/entering window
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorGlow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorGlow.style.opacity = '0';
    });
});