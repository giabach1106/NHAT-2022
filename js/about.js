const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

const nav = document.getElementById("nav");

for(const link of nav.getElementsByTagName("a")) {  
  link.onmousemove = e => {
    const rect = link.getBoundingClientRect(),    
          img = link.querySelector("img");
    
    img.style.left = `${e.clientX - rect.left}px`;
    img.style.top = `${e.clientY - rect.top}px`;
  }
}

window.onmousemove = e => {
  const percent = e.clientY / window.innerHeight;
  
  nav.animate({
    transform: `translateY(${percent * nav.offsetHeight * -1}px)`
  }, {
    fill: "forwards",
    duration: 4000
  })
}