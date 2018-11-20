# usage
1.
```bash
$ git clone https://github.com/eps1lon/sinon-ie11.git
$ cd sinon-ie11
$ yarn
$ yarn start
```

2. Open http://localhost:8080/ in IE11
3. no errors

## solution
In your webpack config add 
```diff
- mainFields: ["browser", "module", "main"]
+ mainFields: ["browser", "main", "module"]
```

### Explanation
The module entry from `sinon` points to a single rollup bundle that was built with `main` before `browser` entries.
The `main` in `supports-color` however includes `has-flag` which uses ES6 syntax and ES6 language features (`String.prototype.startsWith`).
```bash
$ npm ls has-flag
sinon-ie-11@1.0.0 C:\Development\src\js\sinon-ie-11
`-- sinon@7.1.1
  `-- supports-color@5.5.0
    `-- has-flag@3.0.0
```
