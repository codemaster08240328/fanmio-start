/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCartItemInput = {
  id?: string | null,
  userId: string,
  title: string,
  subtitle?: string | null,
  quantity?: number | null,
  price: PriceInput,
};

export type PriceInput = {
  amount: number,
  currency: string,
};

export type ModelCartItemConditionInput = {
  userId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelCartItemConditionInput | null > | null,
  or?: Array< ModelCartItemConditionInput | null > | null,
  not?: ModelCartItemConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCartItemInput = {
  id: string,
  userId?: string | null,
  title?: string | null,
  subtitle?: string | null,
  quantity?: number | null,
  price?: PriceInput | null,
};

export type DeleteCartItemInput = {
  id?: string | null,
};

export type CreateCustomerInformationInput = {
  id?: string | null,
  userID: string,
  email: string,
  isSubscribed: boolean,
  shippingAddress: ShippingAddressInput,
};

export type ShippingAddressInput = {
  fname: string,
  lname: string,
  flat: string,
  street: string,
  city: string,
  country: string,
  state: string,
  zipCode: string,
};

export type ModelCustomerInformationConditionInput = {
  userID?: ModelStringInput | null,
  email?: ModelStringInput | null,
  isSubscribed?: ModelBooleanInput | null,
  and?: Array< ModelCustomerInformationConditionInput | null > | null,
  or?: Array< ModelCustomerInformationConditionInput | null > | null,
  not?: ModelCustomerInformationConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCustomerInformationInput = {
  id: string,
  userID?: string | null,
  email?: string | null,
  isSubscribed?: boolean | null,
  shippingAddress?: ShippingAddressInput | null,
};

export type DeleteCustomerInformationInput = {
  id?: string | null,
};

export type CreateDiscountInput = {
  id?: string | null,
  userID: string,
  number: string,
  archived: boolean,
};

export type ModelDiscountConditionInput = {
  userID?: ModelStringInput | null,
  number?: ModelStringInput | null,
  archived?: ModelBooleanInput | null,
  and?: Array< ModelDiscountConditionInput | null > | null,
  or?: Array< ModelDiscountConditionInput | null > | null,
  not?: ModelDiscountConditionInput | null,
};

export type UpdateDiscountInput = {
  id: string,
  userID?: string | null,
  number?: string | null,
  archived?: boolean | null,
};

export type DeleteDiscountInput = {
  id?: string | null,
};

export type ModelCartItemFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelCartItemFilterInput | null > | null,
  or?: Array< ModelCartItemFilterInput | null > | null,
  not?: ModelCartItemFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCustomerInformationFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelStringInput | null,
  email?: ModelStringInput | null,
  isSubscribed?: ModelBooleanInput | null,
  and?: Array< ModelCustomerInformationFilterInput | null > | null,
  or?: Array< ModelCustomerInformationFilterInput | null > | null,
  not?: ModelCustomerInformationFilterInput | null,
};

export type ModelDiscountFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelStringInput | null,
  number?: ModelStringInput | null,
  archived?: ModelBooleanInput | null,
  and?: Array< ModelDiscountFilterInput | null > | null,
  or?: Array< ModelDiscountFilterInput | null > | null,
  not?: ModelDiscountFilterInput | null,
};

export type ValidateDiscountMutationVariables = {
  discount?: string | null,
};

export type ValidateDiscountMutation = {
  validateDiscount: string | null,
};

export type CreateCartItemMutationVariables = {
  input: CreateCartItemInput,
  condition?: ModelCartItemConditionInput | null,
};

export type CreateCartItemMutation = {
  createCartItem:  {
    __typename: "CartItem",
    id: string,
    userId: string,
    title: string,
    subtitle: string | null,
    quantity: number | null,
    price:  {
      __typename: "Price",
      amount: number,
      currency: string,
    },
  } | null,
};

export type UpdateCartItemMutationVariables = {
  input: UpdateCartItemInput,
  condition?: ModelCartItemConditionInput | null,
};

export type UpdateCartItemMutation = {
  updateCartItem:  {
    __typename: "CartItem",
    id: string,
    userId: string,
    title: string,
    subtitle: string | null,
    quantity: number | null,
    price:  {
      __typename: "Price",
      amount: number,
      currency: string,
    },
  } | null,
};

export type DeleteCartItemMutationVariables = {
  input: DeleteCartItemInput,
  condition?: ModelCartItemConditionInput | null,
};

export type DeleteCartItemMutation = {
  deleteCartItem:  {
    __typename: "CartItem",
    id: string,
    userId: string,
    title: string,
    subtitle: string | null,
    quantity: number | null,
    price:  {
      __typename: "Price",
      amount: number,
      currency: string,
    },
  } | null,
};

export type CreateCustomerInformationMutationVariables = {
  input: CreateCustomerInformationInput,
  condition?: ModelCustomerInformationConditionInput | null,
};

export type CreateCustomerInformationMutation = {
  createCustomerInformation:  {
    __typename: "CustomerInformation",
    id: string,
    userID: string,
    email: string,
    isSubscribed: boolean,
    shippingAddress:  {
      __typename: "ShippingAddress",
      fname: string,
      lname: string,
      flat: string,
      street: string,
      city: string,
      country: string,
      state: string,
      zipCode: string,
    },
  } | null,
};

export type UpdateCustomerInformationMutationVariables = {
  input: UpdateCustomerInformationInput,
  condition?: ModelCustomerInformationConditionInput | null,
};

export type UpdateCustomerInformationMutation = {
  updateCustomerInformation:  {
    __typename: "CustomerInformation",
    id: string,
    userID: string,
    email: string,
    isSubscribed: boolean,
    shippingAddress:  {
      __typename: "ShippingAddress",
      fname: string,
      lname: string,
      flat: string,
      street: string,
      city: string,
      country: string,
      state: string,
      zipCode: string,
    },
  } | null,
};

export type DeleteCustomerInformationMutationVariables = {
  input: DeleteCustomerInformationInput,
  condition?: ModelCustomerInformationConditionInput | null,
};

export type DeleteCustomerInformationMutation = {
  deleteCustomerInformation:  {
    __typename: "CustomerInformation",
    id: string,
    userID: string,
    email: string,
    isSubscribed: boolean,
    shippingAddress:  {
      __typename: "ShippingAddress",
      fname: string,
      lname: string,
      flat: string,
      street: string,
      city: string,
      country: string,
      state: string,
      zipCode: string,
    },
  } | null,
};

export type CreateDiscountMutationVariables = {
  input: CreateDiscountInput,
  condition?: ModelDiscountConditionInput | null,
};

export type CreateDiscountMutation = {
  createDiscount:  {
    __typename: "Discount",
    id: string,
    userID: string,
    number: string,
    archived: boolean,
  } | null,
};

export type UpdateDiscountMutationVariables = {
  input: UpdateDiscountInput,
  condition?: ModelDiscountConditionInput | null,
};

export type UpdateDiscountMutation = {
  updateDiscount:  {
    __typename: "Discount",
    id: string,
    userID: string,
    number: string,
    archived: boolean,
  } | null,
};

export type DeleteDiscountMutationVariables = {
  input: DeleteDiscountInput,
  condition?: ModelDiscountConditionInput | null,
};

export type DeleteDiscountMutation = {
  deleteDiscount:  {
    __typename: "Discount",
    id: string,
    userID: string,
    number: string,
    archived: boolean,
  } | null,
};

export type GetCartItemQueryVariables = {
  id: string,
};

export type GetCartItemQuery = {
  getCartItem:  {
    __typename: "CartItem",
    id: string,
    userId: string,
    title: string,
    subtitle: string | null,
    quantity: number | null,
    price:  {
      __typename: "Price",
      amount: number,
      currency: string,
    },
  } | null,
};

export type ListCartItemsQueryVariables = {
  filter?: ModelCartItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartItemsQuery = {
  listCartItems:  {
    __typename: "ModelCartItemConnection",
    items:  Array< {
      __typename: "CartItem",
      id: string,
      userId: string,
      title: string,
      subtitle: string | null,
      quantity: number | null,
      price:  {
        __typename: "Price",
        amount: number,
        currency: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCustomerInformationQueryVariables = {
  id: string,
};

export type GetCustomerInformationQuery = {
  getCustomerInformation:  {
    __typename: "CustomerInformation",
    id: string,
    userID: string,
    email: string,
    isSubscribed: boolean,
    shippingAddress:  {
      __typename: "ShippingAddress",
      fname: string,
      lname: string,
      flat: string,
      street: string,
      city: string,
      country: string,
      state: string,
      zipCode: string,
    },
  } | null,
};

export type ListCustomerInformationsQueryVariables = {
  filter?: ModelCustomerInformationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomerInformationsQuery = {
  listCustomerInformations:  {
    __typename: "ModelCustomerInformationConnection",
    items:  Array< {
      __typename: "CustomerInformation",
      id: string,
      userID: string,
      email: string,
      isSubscribed: boolean,
      shippingAddress:  {
        __typename: "ShippingAddress",
        fname: string,
        lname: string,
        flat: string,
        street: string,
        city: string,
        country: string,
        state: string,
        zipCode: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetDiscountQueryVariables = {
  id: string,
};

export type GetDiscountQuery = {
  getDiscount:  {
    __typename: "Discount",
    id: string,
    userID: string,
    number: string,
    archived: boolean,
  } | null,
};

export type ListDiscountsQueryVariables = {
  filter?: ModelDiscountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiscountsQuery = {
  listDiscounts:  {
    __typename: "ModelDiscountConnection",
    items:  Array< {
      __typename: "Discount",
      id: string,
      userID: string,
      number: string,
      archived: boolean,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCartItemSubscription = {
  onCreateCartItem:  {
    __typename: "CartItem",
    id: string,
    userId: string,
    title: string,
    subtitle: string | null,
    quantity: number | null,
    price:  {
      __typename: "Price",
      amount: number,
      currency: string,
    },
  } | null,
};

export type OnUpdateCartItemSubscription = {
  onUpdateCartItem:  {
    __typename: "CartItem",
    id: string,
    userId: string,
    title: string,
    subtitle: string | null,
    quantity: number | null,
    price:  {
      __typename: "Price",
      amount: number,
      currency: string,
    },
  } | null,
};

export type OnDeleteCartItemSubscription = {
  onDeleteCartItem:  {
    __typename: "CartItem",
    id: string,
    userId: string,
    title: string,
    subtitle: string | null,
    quantity: number | null,
    price:  {
      __typename: "Price",
      amount: number,
      currency: string,
    },
  } | null,
};

export type OnCreateCustomerInformationSubscription = {
  onCreateCustomerInformation:  {
    __typename: "CustomerInformation",
    id: string,
    userID: string,
    email: string,
    isSubscribed: boolean,
    shippingAddress:  {
      __typename: "ShippingAddress",
      fname: string,
      lname: string,
      flat: string,
      street: string,
      city: string,
      country: string,
      state: string,
      zipCode: string,
    },
  } | null,
};

export type OnUpdateCustomerInformationSubscription = {
  onUpdateCustomerInformation:  {
    __typename: "CustomerInformation",
    id: string,
    userID: string,
    email: string,
    isSubscribed: boolean,
    shippingAddress:  {
      __typename: "ShippingAddress",
      fname: string,
      lname: string,
      flat: string,
      street: string,
      city: string,
      country: string,
      state: string,
      zipCode: string,
    },
  } | null,
};

export type OnDeleteCustomerInformationSubscription = {
  onDeleteCustomerInformation:  {
    __typename: "CustomerInformation",
    id: string,
    userID: string,
    email: string,
    isSubscribed: boolean,
    shippingAddress:  {
      __typename: "ShippingAddress",
      fname: string,
      lname: string,
      flat: string,
      street: string,
      city: string,
      country: string,
      state: string,
      zipCode: string,
    },
  } | null,
};

export type OnCreateDiscountSubscription = {
  onCreateDiscount:  {
    __typename: "Discount",
    id: string,
    userID: string,
    number: string,
    archived: boolean,
  } | null,
};

export type OnUpdateDiscountSubscription = {
  onUpdateDiscount:  {
    __typename: "Discount",
    id: string,
    userID: string,
    number: string,
    archived: boolean,
  } | null,
};

export type OnDeleteDiscountSubscription = {
  onDeleteDiscount:  {
    __typename: "Discount",
    id: string,
    userID: string,
    number: string,
    archived: boolean,
  } | null,
};
