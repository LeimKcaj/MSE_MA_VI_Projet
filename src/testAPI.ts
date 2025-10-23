import HLTV from 'hltv'
console.log("hello");
HLTV.getPlayer({ id: 7322 }).then(res => {
    console.log(res);
})
