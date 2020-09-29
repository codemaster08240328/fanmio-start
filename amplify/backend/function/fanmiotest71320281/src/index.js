/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiFanmioTestEndpointGraphQLAPIIdOutput = process.env.API_FANMIOTESTENDPOINT_GRAPHQLAPIIDOUTPUT
var apiFanmioTestEndpointGraphQLAPIEndpointOutput = process.env.API_FANMIOTESTENDPOINT_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
  console.log('successfully invoked', event['arguments']['discount']);

  const discount = event['arguments']['discount'];

  let response = '';
  if (discount === 'FANMIO2020') {
    response = 'The discount number is validated';
  } else {
    response = 'The discount number is invalidated';
  }

  return response;
};
