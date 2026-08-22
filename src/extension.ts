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
            `检测到 .nfo 文件未使用 CP437 编码。建议设置为 cp437 以正确显示 DOS 字符。`,
            '打开设置',
            '忽略'
        );
        
        if (action === '打开设置') {
            vscode.commands.executeCommand('workbench.action.openSettingsJson');
        }
    }
}

export function deactivate() {}