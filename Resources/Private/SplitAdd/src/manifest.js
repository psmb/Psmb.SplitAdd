import manifest from '@neos-project/neos-ui-extensibility';
import {$add} from 'plow-js';
import SplitPlugin from './splitPlugin';
import SplitAddButton from './SplitAddButton';

const addPlugin = (Plugin, isEnabled) => (ckEditorConfiguration, options) => {
    // we duplicate editorOptions here so it would be possible to write smth like `$get('formatting.sup')`
    if (!isEnabled || isEnabled(options.editorOptions, options)) {
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        return $add('plugins', Plugin, ckEditorConfiguration);
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
        isVisible: () => true
    }, 'before strong');

    const config = globalRegistry.get('ckEditor5').get('config');
    config.set('splitAdd', addPlugin(SplitPlugin));
});
