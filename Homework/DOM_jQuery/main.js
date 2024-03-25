$( document ).ready(function() {

$('.plus').on('click',  function (){
    const $this = $(this);
    let $innerText =+$this.next('.text').text()
    $this.next('.text').text(++$innerText)
    
});
$('.minus').on('click',  function (){
    const $this = $(this);
    let $innerText =+$this.prev('.text').text()
    if ($innerText > 0) {
        return $this.prev('.text').text(--$innerText)

    }
});

$('.cubeColors').on('click', function () {
    $(this).css('background-color', function (i, val) {
        

        if((val === 'rgb(255, 255, 255)')||(val === 'rgb(255, 255, 0)')) {
            return val ='rgb(0, 0, 255)'

        } else if (val === 'rgb(0, 0, 255)') {
            return val ='rgb(0, 255, 0)'
        } else if (val === 'rgb(0, 255, 0)') {
            return val ='rgb(255, 255, 0)'
        }
    })
    $('.wrapper').append($(this))
})
})
