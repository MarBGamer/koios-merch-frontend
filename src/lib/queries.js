import { gql } from '@apollo/client/core';

const GET_HOME = gql`
    query {
        home(locale: "en") {
            data {
                attributes {
                    searchPlaceholder
                    shopLabel
                    galleryLabel
                    aboutLabel
                    heroSlogan
                    heroHeader
                    heroInformation
                    heroButton
                    contactLabel
                    faqLabel
                    shippingLabel
                    returnsLabel
                    tosLabel
                    privacyLabel
                    slider {
                        data {
                            attributes {
                                alternativeText
                                caption
                                url
                            }
                        }
                    }
                    products {
                        data {
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
                    }
                }
            }
        }
    }
`;

export {
    GET_HOME,
}