* Official language issues (contribute or report)
    + Dots in using-directive don't get caugth (see namespaces)

* Language extensions
    + Local variables
        + Variables prefixed / suffixed with `m`, `_` or `__` can be downtoned
    + Early returns
        + `regions.early-return`
        + Could be 50% opacity

* Publish
	+ Install Visual Studio Code Extensions, TypeScript and packages
		+ `npm install -g vsce`
		+ `npm install -g typescript`
		+ `npm install`
	+ Check typescript errors
		+ `npm run compile`
	+ Package extension
		+ Bump version number in `package.json`
		+ `vsce package`
	+ Login with publisher
		+ Get Personal Access Token
			+ Sign in into Microsoft Account
			+ (Re)create Personal Access Token at https://eppz.visualstudio.com/_usersSettings/tokens
				+ Organization to "All accessible organization"
				+ Scope to "Marketplace/Manage"
		+ `vsce login eppz`
	+ Publish
		+ `vsce publish`
	+ Wait 3 minutes
	+ 🎉

