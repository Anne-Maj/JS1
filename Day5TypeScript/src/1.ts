interface IBook {
title: string;
readonly author: string;
published?: Date;
pages?: number;

}

const book:IBook = {
    title: "Holy Bible",
    author: "God",
    published: new Date(0),
    pages: 8000,
}

//b)???

//c) Duck Typing: Hvis det ligner og lyder som en and, så er det en and.
console.log(book);

//d)+e) er lavet i linje 3,4 og 5

//f)

class Book implements IBook{
    title: string;
    author: string;
    published?: Date;
    pages?: number;
    constructor(title:string,author:string) {
        this.title = title;
        this.author = author;
    }

}
