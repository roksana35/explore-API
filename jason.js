const shop={
    name:'walton',
    address:{srteet:'gaipur chowrastha'},
    city:'Gazipur',
    products:['freez','blander','water pewrifire'],
    revenue:500000,
    isOpen:true,
    isNEW:false
}
console.log(shop);
const string = JSON.stringify(shop);
console.log(string);

const pakage= JSON.parse(string);
console.log(pakage);