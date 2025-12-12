import HLTV from 'hltv'
//console.log("hello");
const fs = require('fs');

let playersIDs = [
    8183,
16555,
17011,
15662,
18510,
7592,
20304,
17956,
10096,
9032,
10994,
6124,
9618,
18790,
7998,
20926,
8918,
21139,
8248,
2476,
21815,
12731,
21972,
21233,
12708,
7264,
18053,
429,
9960,
22383,
10394,
165,
3741,
19677,
12018,
19230,
24177,
17306,
21,
3972,
11617,
20447,
21062,
19164,
7821,
19187,
22047,
20119,
23600,
21983,
19310,
3820,
18072,
20312,
18850,
13666,
18221,
9295,
18987,
9816,
14759,
20127,
22673,
19206,
472,
19235,
13776,
22929,
22471,
22076,
1865,
7716,
21167,
16920,
23685,
19808,
18317,
20423,
2154,
7322,
11893,
16693,
18462,
11816,
9086,
7528,
15165,
17803,
23046,
23414,
9363
]
for (let i = 0; i < playersIDs.length; i++) {

    HLTV.getPlayer({ id: playersIDs[i] as number }).then(res => {
        const json = JSON.stringify(res, null);

        fs.writeFile(`player${res.ign}.json`, json, 'utf8', (err: any)=> {
            if (err) {
                console.error('Error writing file', err);
            } else {
                console.log('File successfully saved!');
            }
        })
    })
}

// let teamsIDs = [7175, 13380, 12878, 11283, 12467, 4494, 4608, 4991, 6667, 5995, 8474, 7020, 6665, 4869, 9565]
// for (let i = 0; i < teamsIDs.length; i++) {
//     HLTV.getTeam({ id: teamsIDs[i] as number}).then(res => {
//         console.log(res)
    
//         const json = JSON.stringify(res, null);
    
//         fs.writeFile(`team${res.name}.json`, json, 'utf8', (err: any)=> {
//             if (err) {
//                 console.error('Error writing file', err);
//             } else {
//                 console.log('File successfully saved!');
//             }
//         }) 
//     })
// }



// HLTV.getTeamRanking({ year: 2022, month: 'december', day: 26}).then(res => {
//     console.log(res)

//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rank.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })

// HLTV.getEvents().then(res => {
//     console.log(res)
// })

// HLTV.getResults({ eventIds: [8042] }).then(res => {
//     console.log(res)
// })


// HLTV.getPastEvents({ startDate: '2019-01-01', endDate: '2019-01-10' }).then(res => {
//     console.log(res)
// })



// var months: string[] = ["january",'february','march',
//     'april','may','june','july', 'august','september',
//     'october','november','december']



// HLTV.getTeamRanking({ year: 2022, month: 'december', day: 26}).then(res => {
//     //console.log(res)
//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankDecember.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })
// HLTV.getTeamRanking({ year: 2022, month: 'november', day: 28}).then(res => {
//     //console.log(res)

//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankNovember.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })
// HLTV.getTeamRanking({ year: 2022, month: 'october', day: 31}).then(res => {
//     //console.log(res)
//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankOctober.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })

// HLTV.getTeamRanking({ year: 2022, month: 'september', day: 26}).then(res => {
//     //console.log(res)

//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankSept.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })

// HLTV.getTeamRanking({ year: 2022, month: 'august', day: 29}).then(res => {
//     //console.log(res)

//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankAug.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })

// HLTV.getTeamRanking({ year: 2022, month: 'july', day: 25}).then(res => {
//     //console.log(res)

//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankJuly.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })

// HLTV.getTeamRanking({ year: 2022, month: 'june', day: 27}).then(res => {
//     //console.log(res)

//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankJune.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })

// HLTV.getTeamRanking({ year: 2022, month: 'may', day: 30}).then(res => {
//     //console.log(res)

//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankMay.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })

// HLTV.getTeamRanking({ year: 2022, month: 'april', day: 25}).then(res => {
//     //console.log(res)

//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankApril.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })

// HLTV.getTeamRanking({ year: 2022, month: 'march', day: 28}).then(res => {
//     //console.log(res)

//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankMarch.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })

// HLTV.getTeamRanking({ year: 2022, month: 'february', day: 28}).then(res => {
//     //console.log(res)

//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankFeb.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })

// HLTV.getTeamRanking({ year: 2022, month: 'january', day: 31}).then(res => {
//     //console.log(res)

//     const json = JSON.stringify(res, null);

//     fs.writeFile(`rankJan.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })



function getMondaysOfYear(year: number): number[] {
    const mondays: number[] = [];
    // On commence au 1er janvier de l'année (Mois 0 = Janvier)
    const date = new Date(year, 0, 1);

    // 1. On avance jusqu'au premier lundi
    // (0 = Dimanche, 1 = Lundi, ..., 6 = Samedi)
    while (date.getDay() !== 1) {
        date.setDate(date.getDate() + 1);
    }

    // 2. Tant qu'on est toujours dans l'année demandée, on ajoute au tableau
    while (date.getFullYear() === year) {
        // IMPORTANT : On crée une copie de la date avec new Date(),
        // sinon on ajouterait toujours la même référence qui change à la fin.
        mondays.push(new Date(date).getDate());

        // On avance d'une semaine (7 jours)
        date.setDate(date.getDate() + 7);
    }

    return mondays;
}

// Utilisation
const lundis2022 = getMondaysOfYear(2022);


type MonthType = "january" | "february" | "march" | "april" | "may" | "june" | "july" | "august" | "september" | "october" | "november" | "december";

const months: MonthType[] = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];

// for (let i in months) {
//     console.log(i);
// }

// const result = Object.values(months).filter(v => typeof v === "string");
// let i = 0;
// for (const val of result) {
//    // console.log(val);
//     HLTV.getTeamRanking({ year: 2022, month: val, day: lundis2022[i] as number}).then(res => {
//     //console.log(res);
//     i++;

//     const json = JSON.stringify(res, null);
//     fs.writeFile(`ranking2022.json`, json, 'utf8', (err: any)=> {
//         if (err) {
//             console.error('Error writing file', err);
//         } else {
//             console.log('File successfully saved!');
//         }
//     }) 
// })
// }