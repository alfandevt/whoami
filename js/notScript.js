const overlay = document.getElementById('overlay'),
      aboutMe = document.getElementById('about'),
      portfolio = document.getElementById('portfolio'),
      card = document.getElementById('card'),
      tutup = document.getElementById('tutup'),
      yesBtn = document.getElementById('yes'),
      notNowBtn = document.getElementById('notNow'),
      form = document.getElementById('form'),
      emailField = document.getElementById('emailMe'),
      emailMeHead = document.getElementById('emailMeHead'),
      thankYou = document.getElementById('thx'),
      btn = document.getElementById('button'),
      reloadAnim = document.getElementById('reload'),
      should = document.getElementById('should');

let body = document.getElementById('body'),
    subject = document.getElementById('subject');


const openOv = ()=>{
    overlay.style.display = 'block';
}

const tutupOv = ()=>{
    overlay.style.display = 'none';
}

const redGone = ()=>{
    notNowBtn.style.display = 'none';
    should.innerHTML = 'no, you should!!'
}

const mailMe = (e) =>{
    let subjectVal = subject.value,
        bodyVal = body.value;
    window.location.href = `mailto:fandevtian@gmail.com?subject=${encodeURI(subjectVal)}&body=${encodeURI(bodyVal)}`;
    body.value = '';
    subject.value = '';
    emailField.style.display = 'none';
    btn.style.display = 'none';
    emailMeHead.innerHTML = 'Thank You! =)';
    reloadAnim.style.display = 'block';
    should.style.display = 'none';
    setInterval('location.reload(true)',e);
}

const openForm = ()=>{
    form.style.display = 'block';
    notNowBtn.style.display = 'none'
    should.innerHTML = 'thank you'
}