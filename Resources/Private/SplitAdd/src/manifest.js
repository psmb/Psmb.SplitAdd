import manifest from '@neos-project/neos-ui-extensibility';
import SplitPlugin from './splitPlugin';
import SplitAddButton from './SplitAddButton';

const addPlugin = (Plugin, isEnabled) => (ckEditorConfiguration, options) => {
    if (!isEnabled || isEnabled(options.editorOptions, options)) {
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        return {
            ...ckEditorConfiguration,
            plugins: [
                ...(ckEditorConfiguration.plugins ?? []),
                Plugin,
            ]
        };
    }
    return ckEditorConfiguration;
};

manifest('Psmb.SplitAdd:SplitAdd', {}, globalRegistry => {
    const richtextToolbar = globalRegistry.get('ckEditor5').get('richtextToolbar');

    richtextToolbar.set('splitAdd', {
        commandName: 'neosSplit',
        component: SplitAddButton,
        icon: 'plus-square',
        tooltip: 'Create new node after paragraph',
        isVisible: editorOptions => editorOptions?.formatting?.splitAdd,
    }, 'before strong');

    const config = globalRegistry.get('ckEditor5').get('config');
    config.set('splitAdd', addPlugin(SplitPlugin));
});
