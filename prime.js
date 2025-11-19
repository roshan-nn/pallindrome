class Solution {
    isPrime(n) {
        // code here
        if(n<2)
        return  `${n}is not prime`
        for(let i=2;i<n;i++)
        {
            if(n%i===0){
                return`${n} is not prime`
            }
        }
        
        return`${n}  is prime`
        
    }
    
  
}
