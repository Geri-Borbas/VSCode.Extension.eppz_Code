import * as vscode from 'vscode';
import { Data } from './Data';


export class ReviewPopup
{


    private static ShouldPop(): boolean
    {
        // Only if not clicked yet.
        if (Data.Instance().reviewDidClicked) return false;

        // Gentle reminders.
        if (Data.Instance().launchesSinceLastReviewClose == 2) return true;
        if (Data.Instance().launchesSinceLastReviewClose == 5) return true;
        if (Data.Instance().launchesSinceLastReviewClose == 200) return true;        
        if (Data.Instance().launchesSinceLastReviewClose == 2000) return true; // 😢

        return false;    
    }

    public static PopInContextIfNeeded(context: vscode.ExtensionContext): void
    {
        if (ReviewPopup.ShouldPop() == false) return; // Only if should
        ReviewPopup.PopInContext(context);
    }

    public static PopInContext(context: vscode.ExtensionContext): void
    {
        // Literals.
        var message = "Like **eppz! (C# theme for Unity)**)? ✨⭐🌟⭐✨ Leave a review on the Marketplace!";
        var url = "https://marketplace.visualstudio.com/items?itemName=eppz.eppz-code"; // Skip `#review-details` for now
        var uri = vscode.Uri.parse(url);
        
        // Show.
        vscode.window.showInformationMessage(message, "Review").then
        (
            selectedOption =>
            {
                if (selectedOption == "Review")
                {
                    vscode.commands.executeCommand('vscode.open', uri); // Open
                    Data.Instance().reviewDidClicked = true; // Save
                }
                else
                {
                    Data.Instance().launchesSinceLastReviewClose = 0; // Reset
                }
            }
        );
    }
}