var numeros = [13, 15, 17, 5, 18, 7, 8, 19, 9, 11, 21, 23, 10, 29, 25, 2, 31, 33, 37, 4, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 6, 61, 63, 67, 71, 73, 77, 79, 81, 83, 86, 89, 92, 94, 97, 99, 101, 103, 107, 109, 113, 115, 119, 122, 127, 131, 137, 139, 143, 146, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]

let tamnumeros = numeros.length;
let i = 0;

while(i > tamnumeros){
    numeros
    resultado == 0
}

for (let index = 0; index < tamnumeros.length; index++) {
    const element = array[index];
    
}

function validarPrimo(num){
    if(num === 2){
        return false;
    }else{
        let c = 0;
        let i = 2;
        while(i<num){
            if(num % i === 0){
                return false;
            }
            i = i + 1;
        }
        return true;
    }
} 