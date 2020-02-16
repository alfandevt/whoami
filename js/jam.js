const dJam = document.getElementById('jam');

const fJam = () =>{
    let tgl = new Date(),
        jam = tgl.getHours(),
        menit = tgl.getMinutes(),
        detik = tgl.getSeconds();
    dJam.innerHTML = `${jam}<span>:</span>${nol(menit)}<span>:</span>${nol(detik)}`;
    setTimeout(fJam,1000);
}


const nol = (n) =>{
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}

//Run
fJam();