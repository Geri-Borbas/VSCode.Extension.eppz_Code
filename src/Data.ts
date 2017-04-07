import * as vscode from 'vscode';


export class Data
{


    // Singleton.
    private static instance: Data;
    static CreateInstanceWithContext(context: vscode.ExtensionContext)
    {
        Data.instance = new Data(context);
        Data.instance.launchCountSinceInstall++; // Increase launch counter
    }
    static Instance()
    { return Data.instance; }
    static Reset()
    {
        Data.instance.reviewDidClicked = false;
        Data.instance.launchCountSinceInstall = 0;
    }


    context: vscode.ExtensionContext;


    private constructor(context: vscode.ExtensionContext)
    { this.context = context; }


    // `reviewDidClicked`.
    public get reviewDidClicked(): boolean
    { return this.context.globalState.get("reviewDidClicked") == true; }
    public set reviewDidClicked(value: boolean)
    { this.context.globalState.update("reviewDidClicked", value); }

    // `launchesSinceLastReviewClose`.
    public get launchCountSinceInstall(): number
    { return Number(this.context.globalState.get("launchCount")); }
    public set launchCountSinceInstall(value: number)
    { this.context.globalState.update("launchCount", value); }
}