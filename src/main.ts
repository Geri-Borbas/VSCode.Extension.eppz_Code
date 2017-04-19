'use strict';
import * as vscode from 'vscode';
import { Data } from './Data';
import { ReviewPopup } from './ReviewPopup';
import { GoogleAnalytics } from './GoogleAnalytics';


export function activate(context: vscode.ExtensionContext)
{
    // 👨‍💼 heavy business.
    Data.CreateInstanceWithContext(context);
    GoogleAnalytics.CreateInstanceWithContext(context);
    ReviewPopup.PopInContextIfNeeded(context);

    // 📊 Google Analytics.
    GoogleAnalytics.AppEvent("Launched");
    vscode.workspace.onDidOpenTextDocument((textDocument: vscode.TextDocument) =>
    { GoogleAnalytics.AppEvent("Did Open Text Document", textDocument.languageId); });    

    // 👉 direct invocations (for testing mainly).
    context.subscriptions.push(vscode.commands.registerCommand(
        'eppz.code.popUpReview', 
        () =>
        {
            Data.Instance().reviewDidClicked = false; // Reset
            ReviewPopup.PopInContext(context);
        }
        ));   
    context.subscriptions.push(vscode.commands.registerCommand(
        'eppz.code.resetReviewCounters',
        () => { Data.Reset(); }
        ));
}


export function deactivate() { }