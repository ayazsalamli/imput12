let a = alert('Bu oyunda siz latereya oynuyursuz: 1-10 regemleri yazirsiz kimde duzdu o gazandi');
let b = prompt(' 1-10 regem yazin');

let netice;

if (b == 1 || b == 3 || b == 8) {
    netice = 'Sizi tebrik edirem.' + b + "regemi biz secdiyimiz regemdir. " + 'Siz bizden  1000$ gazandiz!';
} else {
    netice = 'Siz uduzduz 1000000$'  + b + "regemi biz istediyimiz regem deil. ";
}




document.getElementById('ayaz').innerHTML = netice;

