// tslint:disable
// this is an auto generated file. This will be overwritten

export const validateDiscount = /* GraphQL */ `
  mutation ValidateDiscount($discount: String) {
    validateDiscount(discount: $discount)
  }
`;
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
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
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
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
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
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
export const createCustomerInformation = /* GraphQL */ `
  mutation CreateCustomerInformation(
    $input: CreateCustomerInformationInput!
    $condition: ModelCustomerInformationConditionInput
  ) {
    createCustomerInformation(input: $input, condition: $condition) {
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
export const updateCustomerInformation = /* GraphQL */ `
  mutation UpdateCustomerInformation(
    $input: UpdateCustomerInformationInput!
    $condition: ModelCustomerInformationConditionInput
  ) {
    updateCustomerInformation(input: $input, condition: $condition) {
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
export const deleteCustomerInformation = /* GraphQL */ `
  mutation DeleteCustomerInformation(
    $input: DeleteCustomerInformationInput!
    $condition: ModelCustomerInformationConditionInput
  ) {
    deleteCustomerInformation(input: $input, condition: $condition) {
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
export const createDiscount = /* GraphQL */ `
  mutation CreateDiscount(
    $input: CreateDiscountInput!
    $condition: ModelDiscountConditionInput
  ) {
    createDiscount(input: $input, condition: $condition) {
      id
      userID
      number
      archived
    }
  }
`;
export const updateDiscount = /* GraphQL */ `
  mutation UpdateDiscount(
    $input: UpdateDiscountInput!
    $condition: ModelDiscountConditionInput
  ) {
    updateDiscount(input: $input, condition: $condition) {
      id
      userID
      number
      archived
    }
  }
`;
export const deleteDiscount = /* GraphQL */ `
  mutation DeleteDiscount(
    $input: DeleteDiscountInput!
    $condition: ModelDiscountConditionInput
  ) {
    deleteDiscount(input: $input, condition: $condition) {
      id
      userID
      number
      archived
    }
  }
`;
