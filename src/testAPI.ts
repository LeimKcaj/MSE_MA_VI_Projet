import HLTV from 'hltv'
//console.log("hello");
HLTV.getPlayer({ id: 19187, }).then(res => {
    const json = JSON.stringify(res, null);

    fs.writeFile(`player${res.ign}.json`, json, 'utf8', (err: any)=> {
        if (err) {
            console.error('Error writing file', err);
        } else {
            console.log('File successfully saved!');
        }
    }) 
})

HLTV.getTeam({ id: 7175 }).then(res => {
    //console.log(res)

    const json = JSON.stringify(res, null);

    fs.writeFile(`team${res.name}.json`, json, 'utf8', (err: any)=> {
        if (err) {
            console.error('Error writing file', err);
        } else {
            console.log('File successfully saved!');
        }
    }) 
})

const fs = require('fs');

HLTV.getTeamRanking({ year: 2022, month: 'december', day: 26}).then(res => {
    //console.log(res)

    const json = JSON.stringify(res, null);

    fs.writeFile(`rank.json`, json, 'utf8', (err: any)=> {
        if (err) {
            console.error('Error writing file', err);
        } else {
            console.log('File successfully saved!');
        }
    }) 
})