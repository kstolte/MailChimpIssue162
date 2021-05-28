Simplified repo for github issue https://github.com/mailchimp/mailchimp-client-lib-codegen/issues/162

# Steps to reproduce

1. Create your .env file with appropriate values. Reference example.env
2. Run the following npm scripts in order.

```bash
npm i

npm run dev
```

## Results

`npm i` will complete successfully.
`npm run dev` will throw a TypeError of Cannot read property 'setConfig' of undefined. Since there is a TypeError it ends up causing the app to not run due to detected crash.

```log
mailchimp162/src/mailchimpPing.js:3
mailchimp.setConfig({
          ^
TypeError: Cannot read property 'setConfig' of undefined
```
