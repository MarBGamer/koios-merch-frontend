import { gql } from '@apollo/client/core';

const GET_HOME = gql`
    query {
        home(locale: "en") {
            data {
                attributes {
                    title
                    navigation {
                        shopLabel
                        galleryLabel
                        aboutLabel
                        searchPlaceholder
                    }
                    footer {
                        contactLabel
                        faqLabel
                        shippingLabel
                        returnsLabel
                        tosLabel
                        privacyLabel
                    }
                    hero {
                        heroSlogan
                        heroHeader
                        heroInformation
                        heroButton
                        slider {
                            data {
                                attributes {
                                    alternativeText
                                    url
                                }
                            }
                        }
                    }
                    catalog {
                        catalogHeader
                        cards {
                            name
                            priceLabel
                            buttonLabel
                            buttonLink
                            image {
                                data {
                                    attributes {
                                        alternativeText
                                        url
                                    }
                                }
                            }
                        }
                    }
                    about {
                        aboutHeader
                        description {
                            text
                        }
                        buttonLabel
                        image {
                            data {
                                attributes {
                                    alternativeText
                                    url
                                }
                            }
                        }
                    }
                }
            }
         }
    }
`;

const GET_SHOP = gql`
    query {
        shop(locale: "en") {
            data {
                attributes {
                    title
                    general {
                        buttonLabel
                    }
                    filters {
                        filtersHeader
                    }
                }
            }
        }

        categories(locale: "en") {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
`;

const GET_PRODUCTS = gql`
    query($id: ID, $page: Int) {
        products(filters: { category: { id: { eq: $id } } }, locale: "en", pagination: { page: $page, pageSize: 6 }) {
            data {
                id
                attributes {
                    name
                    price
                    images {
                        data {
                            attributes {
                                alternativeText
                                url
                            }
                        }
                    }
                }
            }
            meta {
                pagination {
                    page
                    pageCount
                }
            }
        }
    }
`;

const GET_PRODUCT = gql`
    query($id: ID) {
        product(id: $id, locale: "en") {
            data {
                attributes {
                    name
                    price
                    description
                    types {
                        data {
                            attributes {
                                name
                            }
                        }
                    }
                    styles {
                        data {
                            attributes {
                                name
                            }
                        }
                    }
                    sizes {
                        data {
                            attributes {
                                symbol
                            }
                        }
                    }
                    colors {
                        data {
                            attributes {
                                name
                                color
                            }
                        }
                    }
                    images {
                        data {
                            attributes {
                                alternativeText
                                url
                            }
                        }
                    }
                }
            }
        }

        productPage(locale: "en") {
            data {
                attributes {
                    productDetails {
                        typeLabel
                        sizeLabel
                        styleLabel
                        colorLabel
                        buttonLabel
                        descriptionLabel
                        sizeguideLabel
                        sizeguideText
                    }
                    relatedProducts {
                        relatedLabel
                        cards {
                            name
                            priceLabel
                            buttonLabel
                            buttonLink
                            image {
                                data {
                                    attributes {
                                        alternativeText
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const GET_ABOUT = gql`
    query {
        about(locale: "en") {
            data {
                attributes {
                    about {
                        aboutHeader
                        merchHeader
                        merchText {
                            text
                        }
                        worldHeader
                        worldText {
                            text
                        }
                        image {
                            data {
                                attributes {
                                    alternativeText
                                    url
                                }
                            }
                        }
                    }
                    community {
                        communityHeader
                        cards {
                            name
                            buttonLabel
                            buttonLink
                            image {
                                data {
                                    attributes {
                                        alternativeText
                                        url
                                    }
                                }
                            }
                        }
                        socialsHeader
                        twitterLink
                    }
                }
            }
        }
    }
`;

export {
    GET_HOME,
    GET_SHOP,
    GET_PRODUCTS,
    GET_PRODUCT,
    GET_ABOUT,
}