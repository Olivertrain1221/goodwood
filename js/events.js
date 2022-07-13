function events() {
    console.log("got to top");
    let cards = document.getElementsByClassName('card');
    console.log(cards);
    let currentImage = cards[0];
    console.log(currentImage);
    console.log(cards);
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let i = 0;
    let totalCards = cards.length;
    prev.addEventListener('click', prevCard);
    next.addEventListener('click', nextCard);

    function nextCard() {
        if (i < (totalCards-1)) {
            i++;
        } else {
            i = 0;
        }
        let nextImage = cards[i];
        currentImage.style.display = 'none';
        nextImage.style.display = 'block';
        currentImage = cards[i];
        setImageBackground();   
    }

    function prevCard() {
        if (i > 0) {
            i--;
        } else {
            i = (cards.length - 1);
        }
        let nextImage = cards[i];
        currentImage.style.display = 'none';
        nextImage.style.display = 'block';
        currentImage = cards[i];
        setImageBackground();   
    }


    function setImageBackground() {
        let container = document.getElementsByClassName('container')[0];
        let breakpoint = 800;
        let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        
        
        if (viewportWidth < breakpoint) {
            if (container.style.backgroundImage != 'none') {
                container.style.backgroundImage = 'none';
            }
        }
        if (viewportWidth >= breakpoint) {
            image = currentImage.firstElementChild.getAttribute('src');
            console.log("loading the image src url");
            console.log(image);
            container.style.backgroundImage = `url('${image}')`;
            console.log(image);
        }
        window.addEventListener('resize', () => {
            let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            if (viewportWidth < breakpoint) {
                container.style.backgroundImage = 'none';
            } else if (viewportWidth >= breakpoint) {
                image = currentImage.firstElementChild.getAttribute('src');
                console.log(image);
                container.style.backgroundImage = `url('${image}')`;
            }
        });
    }
    setImageBackground();
}

// Using this due to tempermental internet
setTimeout(
    events, 6000
);

