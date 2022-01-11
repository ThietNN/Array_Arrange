let x = [-3,5,1,3,2,10];
let f = 0;
let l = x.length - 1;

while (f<l){
    y = x[f];
    x[f] = x[l];
    x[l] = y;
    f++;
    l--;
}
document.write(x)