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
        phoneNumber
        email
        address
        sitemapTitle
        copyright
        sitemapCollection(limit: 5) {
          items {
            label
            link
          }
        }
        logo {
          url
        }
      }
      socialNetworksCollection(limit: 5) {
        items {
          label
          link
        }
      }
      whatsappContact {
        phoneNumber
        message
      }
    }
    banner {
      title
      texts
      isTextBlack
      image {
        url
      }
      video {
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
      itemsCollection(limit: 12) {
        items {
          title
          description
          image {
            url
          }
          icon
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
