import * as vscode from 'vscode';


export class Data
{


    // Singleton.
    private static instance: Data;
    static CreateInstanceWithContext(context: vscode.ExtensionContext)
    {
        Data.instance = new Data(context);
        Data.instance.launchesSinceLastReviewClose++; // Increase launch counter
    }
    static Instance()
    { return Data.instance; }


    context: vscode.ExtensionContext;


    private constructor(context: vscode.ExtensionContext)
    { this.context = context; }


    // `reviewDidClicked`.
    public get reviewDidClicked(): boolean
    { return this.context.globalState.get("review") == "clicked"; }
    public set reviewDidClicked(value:boolean)
    { this.context.globalState.update("review", "clicked"); }

    // `launchesSinceLastReviewClose`.
    public get launchesSinceLastReviewClose(): number
    { return Number(this.context.globalState.get("launchesSinceLastReviewClose")); }
    public set launchesSinceLastReviewClose(value: number)
    { this.context.globalState.update("launchesSinceLastReviewClose", value.toString()); }
}