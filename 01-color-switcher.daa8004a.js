const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",void(interval=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))),e.addEventListener("click",void clearInterval(interval));
//# sourceMappingURL=01-color-switcher.daa8004a.js.map
