# fanmio-test

## How to run the project in local

1. create `aws-exports.js` inside **src**

```
const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_appsync_graphqlEndpoint": "https://bbbmxbgctbfnzh5h453lieub2u.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-mzs3tay67fcrtka3pg7tvciwiu"
};


export default awsmobile;
```

2. Run the following commands

```
$ yarn install
$ yarn serve
```

## Tech stack used

1. Amplify Appsync Graphql server, Lambda function.
2. Vue2.x, typescript.
3. buefy + tailWind css framework, scss.

## Which are completed?

1. 2 mutations and 1 query in graqphql server. ( You can see in **Amplify/backend**).

2. Shipping page design from the scratch including mobile responsiveness.

3. All inputs validation.

4. Created postman workspace for graphql endpoint management.

## Which are not completed.

1. Tried to make pixel perfect design as perfect as possible, but not enough time, and couldn't complete as I expected.

2. Only one endpoint integration success to show the endpoint integration performance, not enough time to complete all integrations.

3. Didn't get a chance to work on writing meaning unit test, e2e test. It requires significant time.

## Anything I wanted to add.

1. Handling currency.
   Just added json structure for currency handling so we can show the exact currency sign according to it's type, didn't implement it - time issue.

2. Handling country/state.
   Just added json structure for 3 countries (US, AU, CA) and their states. I think I can use third party endpoints to get all country names and it's states.

3. Discount validation mutation.
   I invoked lambda function by graphql mutation. Inside lambda function, validated the discount number but used static value. Actually, I can hit graphql query to get the correct discount number and validate payload using it. (Not enough time. )
