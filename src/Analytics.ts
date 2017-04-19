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


    context: vscode.ExtensionContext;
    visitor: any;
    

    private constructor(context: vscode.ExtensionContext)
    {
         this.context = context;
         this.visitor = analytics('UA-37060479-24', { https: true });
    }

    public static AppEvent(action: string)
    { Analytics.instance.visitor.event('App', action).send(); }

    public static _ReviewEvent(action: string)
    { Analytics.instance.visitor.event('Review', action).send(); }

    public static ReviewEvent(action: string, label: string = null)
    { Analytics.instance.visitor.event('Review', action, label).send(); }
}