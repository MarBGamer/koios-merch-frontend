import { gql } from '@apollo/client/core';

const GET_HOME = gql`
    query {
        home(locale: "en") {
            data {
                attributes {
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
                        description
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
        products(filters: { category: { id: { eq: $id } } }, locale: "en", pagination: { page: $page, pageSize: 9 }) {
            data {
                id
                attributes {
                    name
                    price
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
            meta {
                pagination {
                    page
                    pageCount
                }
            }
        }

    }
`;

export {
    GET_HOME,
    GET_SHOP,
    GET_PRODUCTS,
}