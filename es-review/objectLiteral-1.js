function addressMaker(adress){
    const{city,state}=adress;
const newAddress= {
    city,
state,
country:'us'
}
console.log(`${newAddress.city},${newAddress.state},${newAddress.country}`)
}
addressMaker(city:'San',)