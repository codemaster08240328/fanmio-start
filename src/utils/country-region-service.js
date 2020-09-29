import countries from '../mock/countries.json';
import states from '../mock/states.json';

const optional = (object, key) => {
  if (typeof object == 'object' || object.hasOwnProperty(key)) {
    return object[key];
  }
  return null;
};

export const convertCodeToCountryName = code => {
  return optional(
    countries.find(item => item.code === code),
    'name'
  );
};

export const convertCountryNameToCode = country => {
  return optional(
    countries.find(item => item.name === country),
    'code'
  );
};

export const statesListFromCountry = code => {
  return optional(
    states.find(item => item.code === code),
    'states'
  );
};

export const convertCodeToStateName = (country, code) => {
  const statesOfCountry = optional(
    states.find(item => item.code === country),
    'states'
  );

  return optional(
    statesOfCountry.find(item => item.code === code),
    'name'
  );
};

export const convertNameToStateCode = (country, name) => {
  const statesOfCountry = optional(
    states.find(item => item.code === convertCountryNameToCode(country)),
    'states'
  );

  return optional(
    statesOfCountry.find(item => item.name === name),
    'code'
  );
};
