# NFO File Support

A Visual Studio Code extension that provides dedicated support for `.nfo` files, featuring custom font settings, optimized font size, and CP437 encoding defaults for an authentic retro DOS experience.

## Features

- **Auto-Detection**: Automatically recognizes `.nfo` files and assigns the "NFO" language mode.
- ~~**Correct Encoding**: Configures default file encoding to `cp437` (DOS standard) to ensure special characters display correctly.~~ It doesn't work. **Please set file encoding to `cp437` to open nfo file.**

## Installation

1. **Download** the latest `.vsix` file from the [Releases](https://github.com/Sn0wflakeQWQ/vscode-nfo-file-support/releases) page.
2. Open Visual Studio Code.
3. Go to the **Extensions** view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
4. Click the **...** (More Actions) button in the top-right corner of the Extensions panel.
5. Select **Install from VSIX...**.
6. Browse to and select the downloaded `nfo-support-*.vsix` file.
7. Reload VS Code if prompted.

## Configuration

This extension automatically applies the following default settings for `.nfo` files via `configurationDefaults`:

```json
{
  "[nfo]": {
    "editor.fontFamily": "'Perfect DOS VGA 437 Win', 'Lucida Console', monaspace",
    "files.encoding": "cp437"
  }
}
```

## Recommended Font: Perfect DOS VGA 437

To get the authentic retro look for your .nfo files, we strongly recommend installing the Perfect DOS VGA 437 font. This font replicates the classic IBM PC VGA text mode characters.

Once installed, the extension will automatically use this font for all .nfo files. If the font is not found, it will fall back to Lucida Console or Monaspace.