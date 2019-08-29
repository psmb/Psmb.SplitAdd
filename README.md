This package adds a button to CKE5 toolbar that splits the current node after the current paragraph, and then allows to insert a new node in between.
E.g. especially useful to insert images or headlines inside some text node.
Works only on nodes inside ContentCollections (obviously).

![Demo](https://user-images.githubusercontent.com/837032/43409799-9657c1f4-942d-11e8-9e37-922bffeccec4.gif)


## Installation

1. `composer require 'psmb/splitadd'`
2. Enable splitNode button on node properties that should support it, e.g.:

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

Note: when using `neos/neos-ui` older than 2.0, you need to switch to using CKeditor 5:

```yaml
Neos:
  Neos:
    Ui:
      frontendConfiguration:
        defaultInlineEditor: 'ckeditor5'
```
