import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('NFO Support extension is now active!');
    
    // 监听 nfo 文件打开
    vscode.workspace.onDidOpenTextDocument((document) => {
        if (document.languageId === 'nfo') {
            checkEncoding(document);
        }
    });
}

async function checkEncoding(document: vscode.TextDocument) {
    const config = vscode.workspace.getConfiguration('files', document.uri);
    const encoding = config.get<string>('encoding');
    
    if (encoding !== 'cp437') {
        const action = await vscode.window.showWarningMessage(
            `Detected .nfo file not using CP437 encoding. Consider setting to cp437 for proper display of DOS characters.`,
            'Open Settings',
            'Ignore'
        );
        
        if (action === 'Open Settings') {
            vscode.commands.executeCommand('workbench.action.openSettingsJson');
        }
    }
}

export function deactivate() {}