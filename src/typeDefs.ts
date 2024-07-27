export const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        publishedYear: Int
        author: Author
    }

    type Author {
        id: ID!
        name: String!
        books: [Book]
    }

    type Query {
        books: [Book]
        authors: [Author]
    }

    type Mutation {
        addBook(
            title: String!
            publishedYear: Int
            authorId: ID!
        ): Book!
    }
`;
