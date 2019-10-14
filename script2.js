function postColor(colors, id) {
    fetch('https://ci-lights.azurewebsites.net/setcolor', {
            method: 'post',
            body: JSON.stringify({
                id: id,
                color: colors,
                session: 'main',
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => console.log(res));
}


if (kickCount > 0) {
        KickDrum.triggerAttack('C2');
        kickCount = 0;
        canAddKickDrum = false;
        setTimeout(function() {
            canAddKickDrum = true;
        }, 500);
        
        postColor([255, 0, 0])
    }
