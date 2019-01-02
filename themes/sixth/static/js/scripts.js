$('.mobile-menu-toggle').on('click', function(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log('hi there')
    $('.mobile-menu').show()
})

$('body').on('click', function() {
    $('.mobile-menu').hide()
})