const body = document.querySelector("body");

// morning bg = 1~2.jpg, day bg = 3~6.jpg, evening bg = 7~9.jpg, night bg = 10~11jpg
const morningStart = 1,
      morningEnd = 2,
      dayStart = 3,
      dayEnd = 6,
      eveningStart = 7,
      eveningEnd = 9,
      nightStart = 10,
      nightEnd = 11;



function setBg(){
    const image = new Image();
    const date = new Date();
    const hour = date.getHours();
    
    
    if((hour >= 4) && (hour < 12)){
        const randNum = Math.floor(Math.random() * (morningEnd - morningStart + 1)) + morningStart;
        image.src = `bgImg/${randNum}.jpg`;
        image.classList.add("bgImg");
        body.prepend(image);  
    }
    else if ((hour >= 12) && ( hour < 16 )){
        const randNum = Math.floor(Math.random() * (dayEnd - dayStart + 1)) + dayStart;
        image.src = `bgImg/${randNum}.jpg`;
        image.classList.add("bgImg");
        body.prepend(image);  
    }
    else if ((hour >= 16) && ( hour < 20)){
        const randNum = Math.floor(Math.random() * (eveningEnd - eveningStart + 1)) + eveningStart;
        image.src = `bgImg/${randNum}.jpg`;
        image.classList.add("bgImg");
        body.prepend(image);
    }
    else {
        const randNum = Math.floor(Math.random() * (nightEnd - nightStart + 1)) + nightStart;
        image.src = `bgImg/${randNum}.jpg`;
        image.classList.add("bgImg");
        body.classList.add("night");
        body.prepend(image);
    }
}


function init(){
    setBg();
    setInterval(setBg, 1000);
}

init();