# Cannot find module '@okta/okta-auth-js'

When running `npm test` ...

```bash
npm test

> jest-cannot-find-module@ test E:\repos\jest-cannot-find-module
> jest

 FAIL  src/index.test.ts
  ● Test suite failed to run

    Cannot find module '@okta/okta-auth-js' from 'src/index.ts'

    Require stack:
      src/index.ts
      src/index.test.ts

    > 1 | import { OktaAuth } from "@okta/okta-auth-js";
        | ^
      2 |
      3 | export function main() {
      4 |   const oktaAuth = new OktaAuth({

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:491:11)
      at Object.<anonymous> (src/index.ts:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.61 s, estimated 3 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```

This can be fixed by adding a module name mapper for that module in `jest.config.js` like this...

```diff
diff --git a/jest.config.js b/jest.config.js
index ef9f480..ebac620 100644
--- a/jest.config.js
+++ b/jest.config.js
@@ -1,4 +1,8 @@
 module.exports = {
   testEnvironment: "jsdom",
   preset: "ts-jest",
+  moduleNameMapper: {
+    "@okta/okta-auth-js":
+      "<rootDir>/node_modules/@okta/okta-auth-js/dist/okta-auth-js.umd.js",
+  },
 };
```

Ideally this should be resolved properly by Jest.
