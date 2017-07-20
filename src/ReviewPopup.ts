import * as vscode from 'vscode';
import { Data } from './Data';
import { GoogleAnalytics } from './GoogleAnalytics';


export class ReviewPopup
{


    private static ShouldPop(): boolean
    {
        // Only if not clicked yet.
        if (Data.Instance().reviewDidClicked) return false;

        // Lookup gentle reminder launch counts.
        var should: boolean;
        [2, 35, 100, 2000].forEach((item) => should = should || (Data.Instance().launchCountSinceInstall == item));
        
        return should;    
    }

    public static PopInContextIfNeeded(context: vscode.ExtensionContext): void
    {
        if (ReviewPopup.ShouldPop() == false) return; // Only if should
        ReviewPopup.PopInContext(context);
    }

    public static PopInContext(context: vscode.ExtensionContext): void
    {
        // Literals.
        var messages =
        [
            {
                "text" : "Like **eppz!** (C# theme for Unity)? ✨⭐🌟⭐✨ Rate it on the Marketplace!",
                "label" : "Like?"
            },
            {
                "text" : "Help others discover **eppz!** (C# theme for Unity)! ✨⭐🌟⭐✨ Rate it on the Marketplace!",
                "label" : "Help others!"
            },
        ];
        var message = messages[Math.floor(Math.random() * messages.length)]; // Random question from above
        var url = "https://marketplace.visualstudio.com/items?itemName=eppz.eppz-code"; // Skip `#review-details` for now
        var uri = vscode.Uri.parse(url);
        
        // Show.       
        vscode.window.showInformationMessage(message.text, "Rate🌟").then
        (
            selectedOption =>
            {
                if (selectedOption == "Rate🌟")
                {
                    vscode.commands.executeCommand('vscode.open', uri); // Open
                    Data.Instance().reviewDidClicked = true; // Save
                    GoogleAnalytics.ReviewEvent('Review clicked', message.label);
                }
                else
                {
                    GoogleAnalytics.ReviewEvent('Close clicked', message.label);
                }
            }
        );
        GoogleAnalytics.ReviewEvent('Pop up', message.label);
    }
}