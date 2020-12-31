// Coordinates
let x = 0, y = 0;

// Event
addEventListener('keydown', e => {
    // Ball
    const ball = document.getElementById('ball');


    // Function for move the ball
    let move = () => {
        ball.style.transform = `translate(${x*5}px, ${y*5}px)`;
    }

    // Actions
    const up = () => {
        y--;
        move();
    }

    const down = () => {
        y++;
        move();
    }

    const left = () => {
        x--;
        move();
    }

    const right = () => {
        x++;
        move();
    }

    // Validation
    switch(e.key){
        case 'ArrowUp':
            up();
            break;

        case 'ArrowDown':
            down();
            break;

        case 'ArrowRight':
            right();
            break;

        case 'ArrowLeft':
            left();
            break;
    }
})