

function main(){
    let quotes = `The Scandal of education is that every time 
    you teach something, you deprive a student of the pleasure
    and benefit of discovery.
    (Seymour Papert, born February 29, 1928 died July 31 2016)
    If debugging is the process of removing bugs, then programming
    must be the process of putting them in.
    (Edsger W. Dijkstra)`;



    let pattern = new RegExp('\\s*\\W*\\s');
    let words = quotes.split(pattern);

    console.log('There are ' + words.length + ' words in this text');

    let maxChars = '';
    for (let i = 0; i < words.length; i++){
        if(maxChars.length < words[i].length){
            maxChars = words[i];
        }
    }

    console.log('The Longest word in the text is: ' + maxChars);
}

main();