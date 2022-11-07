# Typescript Code Generation from GQL Schema

Connects to GQL endpoint to retrieve schema and generates respective typescript types


## Install
```
npm install
```

## Setup endpoint
```
   export AEM_HOST='https://author-p12345-e67890.adobeaemcloud.com/'
   export BEARER_TOKEN='your.token.here'
```

## Generate code
```
npm run codegen
```


## Output
```
npm run codegen

> ts-gql-codegen@1.0.0 codegen
> graphql-codegen --config codegen.ts

✔ Parse Configuration
❯ Generate outputs
  ❯ Generate to src/generated/graphql.ts
✔ Parse Configuration
✔ Generate outputs
```