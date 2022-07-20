
function action(par1, par2) {
    let sum = par1 + par2;


    if (par1 === 20) {
        return ('true');
    } else if (par2 === 20) {
        return ('true');
    } else if (sum <= 20) {
        return ('true');
    }

}

console.log(action(12, 7));


