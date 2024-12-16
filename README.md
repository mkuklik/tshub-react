
## Available Scripts

In the project directory, you can run:

### `start:wb`
Run workbook for development

### `yarn start`

### scripts for testing evaluator
- "test:debug"
- "test:eval:debug"
- "test:parser:debug"
- "test:ts:debug"
- "test:evaluate:debug"
- "test:graphfunc:debug"
- "test:basicfunc:debug"
- "test:advfunc:debug"
- "test:utils:debug"

### general info

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

### generate FRED client
```
openapi-generator generate -g javascript -i fred-schema.yaml -o .

openapi-generator generate -g typescript -i fred/fred-schema.yaml -o ./src/fred_ts_client
```

### ChronosDB client

In the ChronosDB git folder, https://github.com/mkuklik/chronosdb, run

```
openapi-generator generate -g typescript -i openapi/openapi.yaml -o ../tshub-react/src/chronos_ts_client/ --generate-alias-as-model
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

ag-grid-react -> removed for now and focusing on ag-grid-community
