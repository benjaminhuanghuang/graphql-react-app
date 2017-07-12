const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [{
        id: '23',
        firstName: 'Bill',
        age: 20
    },
    {
        id: '47',
        firstName: 'Sam',
        age: 21
    },
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { // query arguments
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                // return the actual data
                var student = _.find(users, {
                    id: args.id
                });

                
                return student;
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,

})