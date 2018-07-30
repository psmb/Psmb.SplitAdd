import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {$get, $transform} from 'plow-js';
import {IconButton} from '@neos-project/react-ui-components';
import {neos} from '@neos-project/neos-ui-decorators';

import {executeCommand} from '@neos-project/neos-ui-ckeditor5-bindings';
import {connect} from 'react-redux';
import {actions} from '@neos-project/neos-ui-redux-store';
import {calculateDomAddresses} from './dom';

@connect($transform({
    fusionPath: $get('cr.nodes.focused.fusionPath')
}), {
        persistChanges: actions.Changes.persistChanges,
        commenceNodeCreation: actions.CR.Nodes.commenceCreation
    })
@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n')
}))
export default class SplitAddButton extends PureComponent {
    static propTypes = {
        i18nRegistry: PropTypes.object,
        tooltip: PropTypes.string
    };
    handleSplit = ({contentAfter, contextPath, propertyName, nodeType}) => {
        this.props.persistChanges([
            {
                type: 'Neos.Neos.Ui:CreateAfter',
                subject: contextPath,
                payload: {
                    ...calculateDomAddresses(contextPath, this.props.fusionPath),
                    nodeType: nodeType.name,
                    data: {
                        properties: {
                            [propertyName]: contentAfter
                        }
                    }
                }
            }
        ]);
        this.props.commenceNodeCreation(contextPath, this.props.fusionPath);
    };
    handleClick = () => {
        executeCommand('neosSplit', this.handleSplit);
    };
    render() {
        const props = {
            onClick: this.handleClick,
            isActive: Boolean(this.props.isActive),
            title: this.props.i18nRegistry.translate(this.props.tooltip),
            icon: this.props.icon
        };
        return <IconButton {...props} />;
    }
}
