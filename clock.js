const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']

const clock = () => {
    const date = new Date(),
    hours = addZero(date.getHours()),
    minutes = addZero(date.getMinutes()),
    seconds = addZero(date.getSeconds()),
    day = addZero(date.getDate()),
    month = months[date.getMonth()],
    dayNum = days[date.getDay()],
    image = document.querySelector('#image')
    document.querySelector('#time').innerHTML = hours + ':' + minutes + ':' + seconds
    document.querySelector('#date').innerHTML = day + ' ' + month + ', ' + dayNum
    if (hours >= 0 && hours < 6) {
        image.src = 'media/01.jpg'
    } else if (hours >= 6 && hours < 12) {
        image.src = 'media/02.jpg'
    } else if (hours >= 12 && hours < 18) {
        image.src = 'media/03.jpg'
    } else {
        image.src = 'media/04.jpg'
    } 
}

const addZero = (num) => {
    if (num < 10) return '0' + num
    return num
}
setInterval(clock, 1000);
clock();