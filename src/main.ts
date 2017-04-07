'use strict';
import * as vscode from 'vscode';
import { Data } from './Data';
import { ReviewPopup } from './ReviewPopup';


export function activate(context: vscode.ExtensionContext)
{
    // Heavy business 👨‍💼
    Data.CreateInstanceWithContext(context);
    ReviewPopup.PopInContextIfNeeded(context);

    // Direct invocation (for testing mainly).
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