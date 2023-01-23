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

const GET_PRODUCTS = gql`
    query {
        products(locale: "en", pagination: { pageSize: 9 }) {
            data {
                attributes {
                    name
                    price
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
    GET_PRODUCTS,
}