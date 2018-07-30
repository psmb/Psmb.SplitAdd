import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Command from '@ckeditor/ckeditor5-core/src/command';

class SplitCommand extends Command {
    execute(callback) {
        const editor = this.editor;
        const range = editor.model.document.selection.getFirstRange();
        const element = range.start.parent;
        editor.model.change(writer => {
            const marker = writer.createElement('paragraph');
            writer.insertText('###NEOS_SPLIT###', marker, 'end');
            writer.insert(marker, element, 'after');
            const content = editor.getData();
            const [contentBefore, contentAfter] = content.split('<p>###NEOS_SPLIT###</p>');
            editor.setData(contentBefore);
            const {contextPath, propertyName, nodeType} = editor.neos;
            callback({contentBefore, contentAfter, contextPath, propertyName, nodeType});
        });
    }
}

export default class Split extends Plugin {
    static get pluginName() {
        return 'Split';
    }
    init() {
        this.editor.commands.add('neosSplit', new SplitCommand(this.editor));
    }
}
