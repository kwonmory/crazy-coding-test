function solution(genres, plays) {
    let myMap = new Map();
    let result = [];
    let genre = [];
    
    genres.forEach((v, i) => {
        if (myMap.has(v)) {
            myMap.set(v, myMap.get(v) + plays[i]);
        } else {
            myMap.set(v, plays[i]);
        };
    });
    
    for (let a of myMap.entries()) {
        genre.push({name: a[0], amount: a[1]});
    }

    genre.sort((a, b) => {
        return a.amount < b.amount ? 1 : -1
    });

    genre.forEach(v => {
        let tempList = [];
        for (let i = 0; i < genres.length; i++) {
            if (genres[i] === v.name) {
                // 이름과 같을 때,
                tempList.push({index: i, amount: plays[i]});
            }
        }
    
        tempList.sort((a, b) => {
            if (a.amount == b.amount) {
                return a.index > b.index ? 1 : -1;
            } else {
                return a.amount < b.amount ? 1 : -1;
            }
        });
   
        for (let i = 0; i < tempList.length; i++) {
            if (i == 2) break;
            result.push(tempList[i].index);
        }
    });

    return result;
}

let tc = [
    {
        name: 'default',
        param1: ["classic", "pop", "classic", "classic", "pop"],
        param2: [500, 600, 150, 800, 2500],
        result: [4, 1, 3, 0]
    },
    {
        name: 'onlyone',
        param1: ["a"],
        param2: [1],
        result: [0]
    },
    {
        name: 'onegenre',
        param1: ["a", "a", "a"],
        param2: [1, 1, 1],
        result: [0, 1]
    },
    {
        name: 'q1',
        param1: ["classic", "pop", "classic", "pop", "classic", "classic"],
        param2: [400, 600, 150, 2500, 500, 500],
        result: [3, 1, 4, 5]
    },
];

test.each(tc)('베스트앨범', ({param1, param2, result}) => {
    expect(solution(param1, param2)).toEqual(result);
});
