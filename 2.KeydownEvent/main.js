// Coordinates
let x = 0, y = 0;

// Event
addEventListener('keydown', e => {
    // Ball
    const ball = document.getElementById('ball');


    // Function for move the ball
    let move = direction => {
        // Get Direction
        switch(direction){
            case 'up':
                y--;
                break;

            case 'down':
                y++;
                break;

            case 'left':
                x--;
                break;

            case 'right':
                x++;
                break;
        }

        ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
    }

    // Validation
    switch(e.key){
        case 'ArrowUp':
            move('up');
            break;

        case 'ArrowDown':
            move('down');
            break;

        case 'ArrowRight':
            move('right');
            break;

        case 'ArrowLeft':
            move('left');
            break;
    }
})