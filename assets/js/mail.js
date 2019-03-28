
$(document).ready(()=>{   
    $('#sendMail').attr('disabled', true);
})


$(document).on('change', '#name, #email, #message', ()=>{
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    if(name != '' && email != '' && message != ''){
        $('#sendMail').attr('disabled', false);
        console.log('enabled');
        console.log(name, email, message);
    }else{
        $('#sendMail').attr('disabled', true);
        console.log('disabled');
        console.log(name, email, message);
    }
})


$(document).on('submit', '#mailForm', (e)=>{
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    console.table(name, email, message);

    if(!name && !email && !messsage){
        $('#sendMail').css('disabled', true)
        return false;
    }

    var link = 'mailto:vivekkanoje1989@gmail.com?subject=Message from '+email+'&body='+message;
    window.location.href = link;

})