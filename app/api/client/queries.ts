export const GET_HOME_PAGE = `
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
          description
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
          description
          image {
            url
          }
        }
      }
    }
    someCases {
      title
      subtitle
      itemsCollection(limit: 5) {
        items {
          title
          description
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
    posts {
      title
      subtitle
    }
`;
