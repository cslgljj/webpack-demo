let $ = require('jquery')

//引入css模块
require('../css/common.css')

//引入less模块
require('../less/login.less')

$(function () {
    $('li:odd').css('background', 'blue')
    $('li:even').css('background', 'yellow')
})

var fn = () => {
    console.log('呵呵')
}
fn()