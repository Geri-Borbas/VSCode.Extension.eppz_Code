* In `csharp.original.tmLanguage`

    + Rename file extensions
        + `cs` to `cs.original`
    + Rename scope
        + `source.cs` to `source.cs.original`
    + Rename extensions
        + Rewritten rules
            + `#using-directive` to `source.cs.extensions#using-directive`
            + `#using-statement` to `source.cs.extensions#using-statement`
            + `#attributes-section` to `source.cs.extensions#attributes-section`
            + `#namespace-declaration` to `source.cs.extensions#namespace-declaration`
            + `#type` to `source.cs.extensions#type`
        + Rewritten names
            + `<key>name</key><string>variable.other.object.cs</string>`
                + Added `<key>patterns</key><array><dict><key>include</key><string>source.cs.extensions#variable-other-object</string></dict></array>`
                + Resulting `<key>name</key><string>variable.other.object.cs</string><key>patterns</key><array><dict><key>include</key><string>source.cs.extensions#variable-other-object</string></dict></array>`
