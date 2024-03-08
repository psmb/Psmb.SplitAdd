Adding a new node inside a text node in Neos CMS
===============================================

This package adds a button to the inline editor toolbar that splits the current node after the current paragraph, and then allows to insert a new node in between.

This is useful to insert new nodes inside a text node, e.g. to insert images or headlines inside some text node.

It (obviously) works only on nodes inside ContentCollections.

![Demo](https://user-images.githubusercontent.com/837032/43409799-9657c1f4-942d-11e8-9e37-922bffeccec4.gif)


## Installation and Configuration

1. `composer require 'psmb/splitadd'`
2. Enable the splitAdd button on node properties that should support it, e.g.:

```yaml
'Neos.NodeTypes:TextMixin':
  properties:
    text:
      ui:
        inline:
          editorOptions:
            formatting:
              splitAdd: true
```

### !!! Migration from 0.x to 1.0

In versions below 1.0, the configuration mentioned before was simply ignored - if SplitAdd was installed, it was enabled for all inline editor node types. So when upgrading from 0.x to 1.0, you need to add the configuration to enable SplitAdd for the node types you want it to be enabled for.

## Compatibility and Maintenance

This package is currently being maintained for the following versions:

| Neos Version       | Version | Maintained |
|--------------------|---------|------------|
| Neos 7.3 and above | 1.x     | Yes        |
| Neos 3.3 - 7.2     | 0.4     | No         |
