function add(...nums){
    let total=nums.reduce(function(x,y){
        return x+y;
    })
    console.log('ow:',total)
}
add(4,5,6,7)

//using arrow function
const addt=(...nums)=>{
    let total=nums.reduce((x,y)=>x+y)
    console.log('AF',total)
}
addt(4,5,6,7)
