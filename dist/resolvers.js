const data = {
    authors: [
        { id: "1", name: "Chirag Goel", bookIds: ["101", "102"] },
        { id: "2", name: "Akshay Saini", bookIds: ["103"] },
        {
            id: "3",
            name: "Rahul Kumar",
            bookIds: ["101", "104", "105"],
        },
    ],
    books: [
        {
            id: "101",
            title: "Namaste Frontend System Design",
            publishedYear: 2000,
            authorId: "1",
        },
        { id: "102", title: "Book 2", publishedYear: 2010, authorId: "1" },
        { id: "103", title: "Book 3", publishedYear: 2020, authorId: "2" },
        { id: "104", title: "Book 4", publishedYear: 2015,
            authorId: "3" },
    ],
};
export const resolvers = {
    Query: {
        books: (parent, args, context, info) => {
            return data.books;
        },
        authors: (parent, args, context, info) => {
            return data.authors;
        },
    },
    Book: {
        author: (parent, args, context, info) => {
            const authorId = parent.authorId;
            const author = data.authors.find((author) => author.id === authorId);
            return author;
        },
    },
    Author: {
        books: (parent, args, context, info) => {
            const authorId = parent.id;
            const author = data.authors.find((author) => author.id === authorId);
            return data.books.filter((book) => author.bookIds.includes(book.id));
        },
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            const newBook = { ...args, id: data.books.length + 1 };
            data.books.push(newBook);
            return newBook;
        },
    },
};
