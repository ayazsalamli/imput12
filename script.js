let b = document.getElementById('num1');
let netice;

function topla() {
    if (b.value == 1 || b.value == 3 || b.value == 8) {
        netice = 'Sizi tebrik edirem. ' + b.value + " regemi biz secdiyimiz regemdir. " + 'Siz bizden  1000$ gazandiz!';
    } else {
        netice = 'Siz uduzduz 1000000$ '  + b.value + " regemi biz istediyimiz regem deil. ";
    }
    
    document.getElementById('morro').innerHTML = netice;
}