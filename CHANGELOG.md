* 0.9.0

    + Added rules for Unity classes

* 0.8.0

    + XML Doc design / implementation

* 0.7.8

    + Theme settings swatches (base colors, highlights)

* 0.7.5 - 0.7.51

    + Added new swatches to theme files

* 0.7.0

    + Removed theme variations
    + Refined colors

* 0.6.0

    + Implemented theme definitions
        + Implemented regions (with extended region scopes)
        + Finetuned design
    + Grammar tweaks
        + Don't extend `using-statement`

* 0.4.0

    + Implemented color design
        + Actually a color space focused towards important parts of the code

* 0.3.0

    + `type` extensions
        + Added some `UnityEngine` types to `support` scope domain (only for testing yet)

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
