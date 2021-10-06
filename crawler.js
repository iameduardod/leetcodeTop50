let rows = [...document.querySelectorAll('#app > div > div > div > div.table-responsive > table > tbody > tr')];
rows = rows.splice(0, 50);

let top50 = {};

top50['dateCrawled'] = new Date();
top50['problems'] = [];

rows.forEach(row => {
    let number = row.cells[1].childNodes[0].nodeValue;
    let title = row.childNodes[2].childNodes[0].childNodes[0].childNodes[0].nodeValue
    let link = 'https://leetcode.com' + row.cells[2].childNodes[0].childNodes[0].attributes[0].nodeValue;
    let tagsNodes = [...row.cells[3].childNodes[0].childNodes];
    let tags = [];
    let difficulty = row.cells[5].childNodes[0].childNodes[0].nodeValue;
    let frequency = row.cells[6].childNodes[0].childNodes[0].childNodes[0].clientWidth;

    tagsNodes.forEach(node => {
        let tag = node.childNodes[0].nodeValue;
        tags.push(tag);
    })

    top50['problems'].push({
        number,
        title,
        link,
        tags,
        difficulty,
        frequency
    });
});

console.log(top50);
