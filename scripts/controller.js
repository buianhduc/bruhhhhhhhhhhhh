$('#submitInfoBtn').click(() => {
    // console.log('f u')
    let name = $('#username').val();
    model.playerInfo.name = name;
    model.playerInfo.score = 0;
    // console.log(model.playerInfo);
    view.setActiveScreen('loadingScreen')
})

$('#boardTrigger').click(() => {
    view.setActiveScreen('board');
})