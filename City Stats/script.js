const btn=document.querySelector('button');
btn.addEventListener('click',displayStats);
function displayStats(){
    console.log('clicked')
    const input=document.getElementById('input')
    let city=input.options[input.selectedIndex].value;
    let pop=0;liR=0;lang='';
    
    switch(city){
        case 'Bengaluru':
            pop=877674
            liR=76.8
            lang='Kannadam'
            break
        case 'Chennai':
            pop=964573
            liR=87.6
            lang='Tamil'
            break
        case 'Mumbai':
            pop=999999
            liR=67
            lang='Hindi'
            break
        case 'Hyderabad':
            pop=567890
            liR=90.9
            lang='Telugu'
            break
        
    }
    let msg=`The Indian city of ${city} has a population of ${pop}, the language spoken is ${lang} and the litracy rate is ${liR}%`;
    let op=document.getElementById('result');
    op.innerHTML=msg

}