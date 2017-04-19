import * as vscode from 'vscode';
import * as analytics from 'universal-analytics';


export class Analytics
{


    // Singleton.
    private static instance: Analytics;
    static CreateInstanceWithContext(context: vscode.ExtensionContext)
    { Analytics.instance = new Analytics(context); }
    static Instance()
    { return Analytics.instance; }

    // Settings.
    private static Disabled()
    { return (vscode.workspace.getConfiguration('eppz-code')['analytics'] == false); }


    context: vscode.ExtensionContext;
    visitor: any;
    

    private constructor(context: vscode.ExtensionContext)
    {
         this.context = context;
         if (Analytics.Disabled()) return;
         this.visitor = analytics('UA-37060479-24', { https: true });
    }

    public static AppEvent(action: string, label: string = null)
    {
        if (Analytics.Disabled()) return;
        Analytics.instance.visitor.event('App', action, label).send();
    }

    public static ReviewEvent(action: string, label: string = null)
    {
        if (Analytics.Disabled()) return;
        Analytics.instance.visitor.event('Review', action, label).send();
    }
}