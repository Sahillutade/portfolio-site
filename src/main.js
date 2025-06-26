function LoadView(url){
    $.ajax({
        method: 'get',
        url: url,
        success: (response) => {
            $("section").html(response);
        }
    });
}

$(() => {
  LoadView('home.html');

  AOS.init();

  $(document).on('click','#clickLinkedin',() => {
    window.open('https://www.linkedin.com/in/sahil-lutade-002413213/');
  })

  $(document).on('click','#clickGithub',() => {
    window.open('https://github.com/Sahillutade/')
  })

  $(document).on('click','#clickInstagram',() => {
    window.open('https://www.instagram.com/sahillutade/')
  })

  $(document).on('click','#p-1',() => {
    window.open ('https://sahillutade.github.io/Electronics-site/');
  })

  $(document).on('click','#p-2',() => {
    window.open('https://sahillutade.github.io/Video-Library/');
  })

  $(document).on('click','#View-p-1',() => {
    LoadView('project-1.html');
  })

  $(document).on('click','#View-p-2',() => {
    LoadView('project-2.html');
  })

  $(document).on('click','#goBack',() => {
    LoadView('home.html');
  })

  $(document).on('click','#sndMsg',() => {
    
    var user = {
      email: $('#email').val(),
      subject: $('#subject').val(),
      msg: $('#msg').val(),
      username: $('#username').val()
    };

    $.ajax({
      method: 'post',
      url: 'https://portfolio-servers-xcx6.onrender.com/message',
      data: user
    });
    alert('Message sent successfully..');

  });
});