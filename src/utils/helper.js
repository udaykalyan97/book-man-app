export const findPrime = (num) => {
    let i,
        primes = [2, 3],
        n=5;
        const isPrime=(num)=>{
            let i = 1,
            p = primes[i],
            limit = Math.ceil(Math.sqrt(n));
            while(p<=limit){
                if(n%p===0) return false;
                i+=1;
                p = primes[i];
            }
            return true;
        }
    for(let i=2;i<=num;i++){
        while(!isPrime(n)){
            n+=2;
        }
        primes.push(n);
        n+=2;
    }
    return primes[num-1];    
}