# **eppz!** (C# theme for Unity)
## **Change log**

* **1.2.42** - *2020-07-22* (Html_support)
    + `.html` coloring (basic)
        + Tag name and tag attribute coloring

* **1.2.41** - *2017-07-20*

    + Remove awesome animated `.svg` icon
        + It got unsupported in the meanwhile
    + Meta
        + Less review popup message

* **1.2.22** - *2017-05-01*

    + Awesome animated `.svg` icon

* **1.1.31** - *2017-04-22* (Json_support)

    + `.json` coloring
        + Array / Dictionary punctuations
        + Key-Value coloring
        + See more in [`eppz-code.json.json`](https://github.com/eppz/VSCode.Extension.eppz_Code/blob/master/themes/default/eppz-code.json.json)
    + `.ts` TypeScript support (basic)
        + Hotfixes only (full language not covered yet)
    + Meta
        + File extension analytics (what to support next)

* **1.0.42 - 1.1.25** - *2017-04-19* (Markdown_support)

    + `.md` markdown coloring
        + Headings, links, inline code, list identation levels and more
        + Punctuations toned down locally
        + See more in [`eppz-code.markdown.json`](https://github.com/eppz/VSCode.Extension.eppz_Code/blob/master/themes/default/eppz-code.markdown.json)
    + Fixed link / image coloring issues
    + Meta
        + Alternative review popup message
        + Basic usage analytics (language, review popup)
        + Marketplace media, metadata

* **1.0.36** - *2017-04-07*

    + Command `eppz.code.resetReviewCounters` (for resetting review notification counters)
    + "Review" renamed to "Rate"
    
* **1.0.35** - *2017-04-07*

    + Added a gentle reminder to rate the extension (that help others discover this theme)
        + 4 reminder at all in a lifetime (2nd, 5th, 200th, 2000th launch)

* **Features/Review_popup/0.0.3** - *2017-04-07*

    + Small tweaks on popup logic

* **Features/Review_popup/0.0.2** - *2017-04-07*

    + `Data`
        + Extension storage access
    + `ReviewPopup`
        + Shows review message (and determine whether it should be)

* **Features/Review_popup/0.0.1** - *2017-04-07*

    + Added Typescript extension bootstrap (no tests yet)
    + Fixed license SPDX expression

* **1.0.31** - *2017-04-06*

    + Resolved [issue #2](https://github.com/eppz/VSCode.Extension.eppz_Code/issues/2) that prevented C# extension to load IntelliSense properly
        + Contribution language `id` renamed to `csharp` (instead `cs`)

* **1.0.29** - *2017-04-05*

    + Marketplace media, metadata

* **1.0.21 - 1.0.26** - *2017-04-04*

    + Metadata, marketplace assets
    + Renamed (debug) extensions to use them as tags in marketplace

* **1.0.2** - *2017-04-04* (Release_candidate)

    + More sample code tweak
    + Hooked up Unity class definitions to `variable.other.object` in `member-access-expression` 
        + Unity classes colored right when accessing static class methods
    + Minor color tweaks

* **1.0.1** - *2017-04-04*

    + Tweaked sample codes for screenshots

* **1.0.0** - *2017-04-04*

    + More Unity classes
    + Hooked up scopes to theme

* **0.9.0** - *2017-04-04*

    + Added rules for Unity classes

* **0.8.0** - *2017-04-04*

    + XML Doc design / implementation

* **0.7.8** - *2017-04-04*

    + Theme settings swatches (base colors, highlights)

* **0.7.5** - 0.7.51 *2017-04-04*

    + Added new swatches to theme files

* **0.7.0** - *2017-04-04*

    + Removed theme variations
    + Refined colors

* **0.6.0** - *2017-04-03*

    + Implemented theme definitions
        + Implemented regions (with extended region scopes)
        + Finetuned design
    + Grammar tweaks
        + Don't extend `using-statement`

* **0.4.0** - *2017-04-02*

    + Implemented color design
        + Actually a color space focused towards important parts of the code

* **0.3.0** - *2017-04-02*

    + `type` extensions
        + Added some `UnityEngine` types to `support` scope domain (only for testing yet)

* **0.2.0** - *2017-04-01* (Grammar_stable)

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

* **0.1.0** - *2017-04-01*

    + Extension reference chain (injections to the top of the rules)
        + Declare `C# (official)`
            + From official [Syntax grammar used for C# colorization](https://github.com/dotnet/csharp-tmLanguage)
            + Scope renamed to preserve rules (instead overwriting)
        + Declare `C# (extensions)`
            + Extension rule definitions
                + Fallback to `official` counterpart at the end of each rule
        + Declare `C# (extended)`
            + A patched version of `C# (official)`
                + Extended rules referened from `C# (extensions)`
        + Declare `C#`
            + An alias that handles `cs` files directly

* **0.0.4** - *2017-04-01*

    + Added some scope to theme
    + Factored out injections

* **0.0.2 - 0.0.3** - *2017-03-31*

    + Worked around including original C# grammar
        + Introduced a fake language only to be able to include rules from it
        + From official [Syntax grammar used for C# colorization](https://github.com/dotnet/csharp-tmLanguage)

* **0.0.1** - *2017-03-31*

    + Initial commit
    + Have something usable regarding reusing of official C# grammar rules
    + Combined pack of theme and grammar extensions
