# Typescript
### Typescript is a javascript superset, which allow us use typed javascript
>Typed codes has some advantages, like typed error preventing, intellisense supporting us to code, like autocomplete, better error messages, and others qualities improvement...

>Installing ts (as dev dependence)
    npm install/yarn add typescript

>Installing ts-node (as dev dependence)
    npm install/yarn add ts-node
        OR
    npm install/yarn add ts-node-dev
        (to continuous run and restart after every file modification)


## Using code-runner to fast compile/run our ts files (Optional)

>Installing extension code-runner (to fast compile our scrips inside vscode)
    To compile in browsers, we need to use webpack or bundles

>Creating a .vscode folder and create settings.json file:
```json
{
    "code-runner.executorMap": {
        "javascript": "node",
        "typescript": "npx ts-node --files --transpile-only",
    }
}
```

>   Ps: Some of settings (mostly global) will only be executed, if you open only the target project in workspace

>in code-runner settings, set typescript config to:
    npx ts-node --files --transpile-only
>   Ps: transpile-only will remove some compile errors and log


>View help infos
    npx ts-node --help


## Optional
>Install eslint for typescript
    yarn add:
    eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D


    npx tsc --init
    yarn tsc --init

>Compile typescript files into js files
    npx tsc
    yarn tsc


>Editorconfig extension to generate a editor config! (Patterns of editor/indentation)
    Right click on 'explorer' sidebar, and 'generate .editorconfig'
