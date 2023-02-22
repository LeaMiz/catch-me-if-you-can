// class for creating top button with "click to start" bootstrap

function createStartToStartElement() {
    let clickToStartRow = document.createElement('div');
    clickToStartRow.className = 'row'
    clickToStartRow.id = 'click-to-start';
    document.getElementById('container').append(clickToStartRow)

    let ClickToStartColLeft = document.createElement('div')
    ClickToStartColLeft.className = 'col'

    let ClickToStartColMiddle = document.createElement('div')
    ClickToStartColMiddle.className = 'col-6 text-center btn btn-primary btn-lg btn-block'
    ClickToStartColMiddle.id = 'click-to-start-middle-column'
    ClickToStartColMiddle.innerHTML = 'CLICK TO START'

    let ClickToStartColRight = document.createElement('div')
    ClickToStartColRight.className = 'col'

    document.getElementById('click-to-start').append(ClickToStartColLeft)
    document.getElementById('click-to-start').append(ClickToStartColMiddle)
    document.getElementById('click-to-start').append(ClickToStartColRight)

    let spaceAfterClickToStartButton = document.createElement('hr');
    document.getElementById('click-to-start').append(spaceAfterClickToStartButton)
    console.log('btn');
}

createStartToStartElement()