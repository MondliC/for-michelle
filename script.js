'use strict';
const button = document.getElementById('little-surprise');
const message = document.getElementById('surprise-message');
button.addEventListener('click', () => {
  message.hidden = false;
  button.textContent = 'Always, a little more ♡';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (let i=0; i<16; i++) {
    const heart=document.createElement('span');
    heart.textContent=['♡','♥','✧'][i%3];
    heart.setAttribute('aria-hidden','true');
    heart.style.cssText='position:fixed;bottom:-35px;left:'+Math.random()*100+'%;color:#f1c2d0;font-size:'+(16+Math.random()*20)+'px;pointer-events:none;z-index:100;transition:transform 3s ease-out,opacity 3s';
    document.body.appendChild(heart);
    requestAnimationFrame(()=>{heart.style.transform='translateY(-110vh)';heart.style.opacity='0';});
    setTimeout(()=>heart.remove(),3100);
  }
});