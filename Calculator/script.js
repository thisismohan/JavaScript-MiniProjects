let outScreen = document.getElementById('inp')

function display(num) {
    outScreen.value += num
}

function equals() {
    try {
        outScreen.value = eval(outScreen.value)
    }
    catch (err) {
        alert('Invalid entry')
    }
}

let cl=document.getElementById('clr')
cl.addEventListener('click', function(event){
    outScreen.value = '';
})

function del(){
    outScreen.value=outScreen.value.slice(0,-1)
}