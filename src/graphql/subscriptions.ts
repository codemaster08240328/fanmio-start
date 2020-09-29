// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem {
    onCreateCartItem {
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
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem {
    onUpdateCartItem {
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
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem {
    onDeleteCartItem {
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
export const onCreateCustomerInformation = /* GraphQL */ `
  subscription OnCreateCustomerInformation {
    onCreateCustomerInformation {
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
export const onUpdateCustomerInformation = /* GraphQL */ `
  subscription OnUpdateCustomerInformation {
    onUpdateCustomerInformation {
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
export const onDeleteCustomerInformation = /* GraphQL */ `
  subscription OnDeleteCustomerInformation {
    onDeleteCustomerInformation {
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
export const onCreateDiscount = /* GraphQL */ `
  subscription OnCreateDiscount {
    onCreateDiscount {
      id
      userID
      number
      archived
    }
  }
`;
export const onUpdateDiscount = /* GraphQL */ `
  subscription OnUpdateDiscount {
    onUpdateDiscount {
      id
      userID
      number
      archived
    }
  }
`;
export const onDeleteDiscount = /* GraphQL */ `
  subscription OnDeleteDiscount {
    onDeleteDiscount {
      id
      userID
      number
      archived
    }
  }
`;
