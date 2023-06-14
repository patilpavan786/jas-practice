var EventEmitter = require('events');

const bookingEE = new EventEmitter();

bookingEE.on('booked', (book) => { console.log(book) })

let obj = {
    id: '12',
    name: 'Shoaib'
}

bookingEE.emit('booked', obj)