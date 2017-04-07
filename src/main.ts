'use strict';
import * as vscode from 'vscode';
import { Data } from './Data';
import { ReviewPopup } from './ReviewPopup';


export function activate(context: vscode.ExtensionContext)
{
    // Heavy business 👨‍💼
    Data.CreateInstanceWithContext(context);
    ReviewPopup.PopInContextIfNeeded(context);

    // Direct invocation (for testing).
    context.subscriptions.push(vscode.commands.registerCommand(
        'extension.popUpReview',
        () => { ReviewPopup.PopInContextIfNeeded(context); }
        ));
}


export function deactivate() { }