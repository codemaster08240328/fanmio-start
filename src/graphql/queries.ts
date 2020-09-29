// tslint:disable
// this is an auto generated file. This will be overwritten

export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
      id
      userId
      title
      subtitle
      quantity
      price {
        amount
        currency
      }
    }
  }
`;
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        title
        subtitle
        quantity
        price {
          amount
          currency
        }
      }
      nextToken
    }
  }
`;
export const getCustomerInformation = /* GraphQL */ `
  query GetCustomerInformation($id: ID!) {
    getCustomerInformation(id: $id) {
      id
      userID
      email
      isSubscribed
      shippingAddress {
        fname
        lname
        flat
        street
        city
        country
        state
        zipCode
      }
    }
  }
`;
export const listCustomerInformations = /* GraphQL */ `
  query ListCustomerInformations(
    $filter: ModelCustomerInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        email
        isSubscribed
        shippingAddress {
          fname
          lname
          flat
          street
          city
          country
          state
          zipCode
        }
      }
      nextToken
    }
  }
`;
export const getDiscount = /* GraphQL */ `
  query GetDiscount($id: ID!) {
    getDiscount(id: $id) {
      id
      userID
      number
      archived
    }
  }
`;
export const listDiscounts = /* GraphQL */ `
  query ListDiscounts(
    $filter: ModelDiscountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        number
        archived
      }
      nextToken
    }
  }
`;
