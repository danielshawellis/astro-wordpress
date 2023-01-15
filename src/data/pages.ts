import { client } from "./wordpress-graphql-base";
import { gql } from '../__generated__/gql';

export const getPosts = () => client.query({
    query: gql(`query GetPosts {
      pages {
        edges {
          node {
            id
            author {
              node {
                email
                firstName
                lastName
              }
            }
            content(format: RENDERED)
          }
        }
      }
    }`)
  });