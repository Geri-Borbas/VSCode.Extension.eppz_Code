* 0.2.0 (Grammar_stable)

    + Implemented every extension needed for theming
        + `attribute-section`    
        + `using-directive`
        + `using-statement`
        + `namespace-declaration`
    + New scope `regions` introduced
        + `regions.attribute`
        + `regions.using.directive`
        + `regions.using.statement`        
        + `regions.namespace`
        + `regions.namespace.declaration`
        + Inside regions still the official C# grammar is (re)applied

* 0.1.0

    + Extension reference chain (injections to the top of the rules)
        + Declare `C# (official)`
            + The official grammar from `https://github.com/dotnet/csharp-tmLanguage`
            + Scope renamed to preserve rules (instead overwriting)
        + Declare `C# (extensions)`
            + Extension rule definitions
                + Fallback to `official` counterpart at the end of each rule
        + Declare `C# (extended)`
            + A patched version of `C# (official)`
                + Extended rules referened from `C# (extensions)`
        + Declare `C#`
            + An alias that handles `cs` files directly

* 0.0.4

    + Added some scope to theme
    + Factored out injections

* 0.0.2 - 0.0.3

    + Worked around including original C# grammar
        + Introduced a fake language only to be able to include rules from it
        + From `https://github.com/dotnet/csharp-tmLanguage`

* 0.0.1

    + Initial commit
    + Have something usable regarding reusing of official C# grammar rules
    + Combined pack of theme and grammar extensions
