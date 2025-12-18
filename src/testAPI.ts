import HLTV from 'hltv'
const fs = require('fs');

let playersIDs = [
    8183,
    21983,
    22956,
    21335,
    22482,
    24970,
    244,
    5794,
    14929,
    19284,
    22884,
    20122,
    19899,
    21468,
    8801,
    7716,
    21167,
    16920,
    23685,
    19808,
    18317,
    20423,
    2154,
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
    18506,
    21667,
    11840,
    21348,
    20357,
    14161,
    15835,
    8575,
    21250,
    23274,
    21023,
    22360,
    21387,
    12553,
    15631,
    2023,
    24144,
    13915,
    24267,
    18891,
    16814,
    16816,
    18894,
    17133,
    11213,
    11944,
    8520,
    21763,
    9436,
    16820,
    8738,
    5440,
    19235,
    13776,
    22929,
    22471,
    22076,
    1865,
    22039,
    12004,
    19882,
    19673,
    20709,
    153,
    20101,
    12732,
    16947,
    24952,
    23637,
    21439,
    7528,
    15165,
    17803,
    23046,
    23414,
    9363
]


let teamsIDs = [13380,
12394,
11616,
9976,
6651,
8589,
6619,
6033,
7081,
6112,
7175,
10333,
12502,
11251,
11102,
10278,
10733,
9539,
12878,
4608,
6667,
11283,
5973,
5310,
5988,
5008,
4494,
4803,
5722,
5273,
5063,
4692,
10371,
10105,
10235,
10225,
4688,
9722,
4978,
6576,
9246,
6745,
6410,
12467,
7101,
7905,
4869,
10606,
10766,
7739,
5639,
7649,
6889,
6683,
4991,
6665,
8971,
10150,
8481,
6669,
8474,
5995,
6134,
5962,
5569,
4732,
9518,
6668,
8773,
9788,
6855,
7557,
5996,
6794,
6686,
5454,
6425,
5378,
11595,
7898,
8135,
7489,
7340,
11645,
12372,
11501,
9949,
11376,
11120,
6368,
9924,
9022,
7376,
11518,
7532,
12819,
12527,
10697,
11092,
10488,
7425,
8297,
9565,
7020,
5752,
8120,
5005]

let eventsIds = [1]

let matchIds = [2306295]

function getPlayers(playersIDs: number[]) {
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
}

function getTeams(teamsIDs: number[]) {
    for (let i = 0; i < teamsIDs.length; i++) {
        HLTV.getTeam({ id: teamsIDs[i] as number}).then(res => {
            console.log(res)
        
            const json = JSON.stringify(res, null);
        
            fs.writeFile(`./teams/team${res.name}.json`, json, 'utf8', (err: any)=> {
                if (err) {
                    console.error('Error writing file', err);
                } else {
                    console.log('File successfully saved!');
                }
            }) 
        })
    }
}


function getEvents(eventsIds: number[]) {
    for (let i = 0; i < eventsIds.length; i++) {
        HLTV.getEvent({id: eventsIds[i] as number}).then(res => {
            console.log(res)

            const json = JSON.stringify(res, null);

            fs.writeFile(`./events/envent${res.name}.json`, json, 'utf8', (err: any)=> {
                if (err) {
                    console.error('Error writing file', err);
                } else {
                    console.log('File successfully saved!');
                }
            }) 
        })
    }
}

function getMatches(matchIds: number[]) {
    for (let i = 0; i < matchIds.length; i++) {
        HLTV.getMatch({ id: matchIds[i] as number }).then(res => {
            console.log(res)
            // const match2 = {
            //     id: res.id,
            //     statsId: res.statsId,
            //     significance: res.significance,
            //     team1: res.team1,
            //     team2: res.team2,
            //     winnerTeam: res.winnerTeam,
            //     date: res.date,
            //     format: res.format,
            //     event: res.event,
            //     maps: res.maps,
            //     players: res.players,
            //     status: res.status,
            //     title: res.title,
            //     hasScorebot: res.hasScorebot,
            //     highlightedPlayers: res.highlightedPlayers,
            //     playerOfTheMatch: res.playerOfTheMatch
            // }
        
            const json = JSON.stringify(res, null);
        
            fs.writeFile(`./matches/match${res.id}.json`, json, 'utf8', (err: any)=> {
                if (err) {
                    console.error('Error writing file', err);
                } else {
                    console.log('File successfully saved!');
                }
            })
        })
    }
}

// getMatches(matchIds)

let eventIds = [
    3389
]

// HLTV.getMatches({eventIds: eventIds}).then(res => {
//             console.log(res)
        
//             const json = JSON.stringify(res, null);
        
//             fs.writeFile(`./matches/allmatches.json`, json, 'utf8', (err: any)=> {
//                 if (err) {
//                     console.error('Error writing file', err);
//                 } else {
//                     console.log('File successfully saved!');
//                 }
//             })
//         })


HLTV.getMatchesStats({ startDate: '2025-12-10', endDate: '2025-12-18' }).then((res) => {
    console.log(res)
    
    const json = JSON.stringify(res, null);
    
    fs.writeFile(`./matches/allmatches.json`, json, 'utf8', (err: any)=> {
        if (err) {
            console.error('Error writing file', err);
        } else {
            console.log('File successfully saved!');
        }
    })
})

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

getPlayers(playersIDs);