import { gql } from '@apollo/client';

export const GET_HOME_PAGE = gql`
  query GetHomePage {
    home(id: "PGlCCBeQiFSafI6sQQvGx") {
      title
      theme {
        title
        description
        keywords
        image {
          url
        }
        logo {
          url
        }
        menuCollection(limit: 5) {
          items {
            label
            link
          }
        }
        footer {
          subtitle
          contactInfo
          sitemapTitle
          sitemapCollection(limit: 5) {
            items {
              label
              link
            }
          }
        }
        socialNetworksCollection(limit: 5) {
          items {
            label
            link
          }
        }
      }
      banner {
        title
        texts
        image {
          url
        }
      }
      flowchart {
        url
      }
      aboutUs {
        title
        subtitle
        itemsCollection(limit: 3) {
          items {
            title
            description {
              json
            }
            image {
              url
            }
          }
        }
      }
      ourServices {
        title
        subtitle
        itemsCollection(limit: 5) {
          items {
            title
            description {
              json
            }
            image {
              url
            }
          }
        }
      }
      contactUs {
        title
        subtitle
      }
    }
  }
`;
