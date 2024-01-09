(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js
  var init_manifest = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js
  var init_createConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"() {
      init_manifest();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js
  var init_AbstractRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"() {
    }
  });

  // node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js
  var init_positionalArraySorter = __esm({
    "node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js
  var init_SynchronousRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"() {
      init_AbstractRegistry();
      init_positionalArraySorter();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js
  var init_SynchronousMetaRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"() {
      init_SynchronousRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js
  var init_registry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js"() {
      init_SynchronousRegistry();
      init_SynchronousMetaRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  var dist_default;
  var init_dist = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/index.js"() {
      init_createConsumerApi();
      init_readFromConsumerApi();
      init_registry();
      dist_default = readFromConsumerApi("manifest");
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js
  var require_ckeditor5_exports = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().CkEditor5;
    }
  });

  // src/splitPlugin.js
  var import_ckeditor5_exports, SplitCommand, Split;
  var init_splitPlugin = __esm({
    "src/splitPlugin.js"() {
      import_ckeditor5_exports = __toESM(require_ckeditor5_exports());
      SplitCommand = class extends import_ckeditor5_exports.Command {
        execute(callback) {
          const editor = this.editor;
          const range = editor.model.document.selection.getFirstRange();
          const element = range.start.parent;
          editor.model.change((writer) => {
            const marker = writer.createElement("paragraph");
            writer.insertText("###NEOS_SPLIT###", marker, "end");
            writer.insert(marker, element, "after");
            const content = editor.getData();
            const [contentBefore, contentAfter] = content.split("<p>###NEOS_SPLIT###</p>");
            editor.setData(contentBefore);
            const { contextPath, propertyName, nodeType } = editor.neos;
            callback({ contentBefore, contentAfter, contextPath, propertyName, nodeType });
          });
        }
      };
      Split = class extends import_ckeditor5_exports.Plugin {
        static get pluginName() {
          return "Split";
        }
        init() {
          this.editor.commands.add("neosSplit", new SplitCommand(this.editor));
        }
      };
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js
  var require_neos_ui_ckeditor5_bindings = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().CkEditorApi;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js
  var require_react_redux = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reactRedux;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // src/dom.js
  var getGuestFrameDocument, findInGuestFrame, findNodeInGuestFrame, closestNodeInGuestFrame, calculateDomAddresses;
  var init_dom = __esm({
    "src/dom.js"() {
      getGuestFrameDocument = () => {
        return document.getElementsByName("neos-content-main")[0].contentDocument;
      };
      findInGuestFrame = (selector) => getGuestFrameDocument().querySelector(selector);
      findNodeInGuestFrame = (contextPath, fusionPath) => fusionPath ? findInGuestFrame(
        `[data-__neos-node-contextpath="${contextPath}"][data-__neos-fusion-path="${fusionPath}"]`
      ) : findInGuestFrame(
        `[data-__neos-node-contextpath="${contextPath}"]`
      );
      closestNodeInGuestFrame = (el) => {
        if (!el || !el.dataset) {
          return null;
        }
        return el.dataset.__neosNodeContextpath ? el : closestNodeInGuestFrame(el.parentNode);
      };
      calculateDomAddresses = (contextPath, fusionPath) => {
        const element = findNodeInGuestFrame(contextPath, fusionPath);
        const parentElement = element ? closestNodeInGuestFrame(element.parentNode) : null;
        return {
          siblingDomAddress: {
            contextPath,
            fusionPath
          },
          parentDomAddress: parentElement ? {
            contextPath: parentElement.getAttribute("data-__neos-node-contextpath"),
            fusionPath: parentElement.getAttribute("data-__neos-fusion-path")
          } : {
            contextPath: parentNodeContextPath(contextPath),
            fusionPath: null
          }
        };
      };
    }
  });

  // src/SplitAddButton.js
  var import_react, import_prop_types, import_react_ui_components, import_neos_ui_decorators, import_neos_ui_ckeditor5_bindings, import_react_redux, import_neos_ui_redux_store, SplitAddButton;
  var init_SplitAddButton = __esm({
    "src/SplitAddButton.js"() {
      import_react = __toESM(require_react());
      import_prop_types = __toESM(require_prop_types());
      import_react_ui_components = __toESM(require_react_ui_components());
      import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
      import_neos_ui_ckeditor5_bindings = __toESM(require_neos_ui_ckeditor5_bindings());
      import_react_redux = __toESM(require_react_redux());
      import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());
      init_dom();
      SplitAddButton = class extends import_react.PureComponent {
        constructor() {
          super(...arguments);
          __publicField(this, "handleSplit", ({ contentAfter, contextPath, propertyName, nodeType }) => {
            this.props.persistChanges([
              {
                type: "Neos.Neos.Ui:CreateAfter",
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
          });
          __publicField(this, "handleClick", () => {
            (0, import_neos_ui_ckeditor5_bindings.executeCommand)("neosSplit", this.handleSplit);
          });
        }
        render() {
          const props = {
            onClick: this.handleClick,
            isActive: Boolean(this.props.isActive),
            title: this.props.i18nRegistry.translate(this.props.tooltip),
            icon: this.props.icon
          };
          return /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.IconButton, { ...props });
        }
      };
      __publicField(SplitAddButton, "propTypes", {
        i18nRegistry: import_prop_types.default.object,
        tooltip: import_prop_types.default.string
      });
      SplitAddButton = __decorateClass([
        (0, import_react_redux.connect)((state) => ({
          fusionPath: state.cr.nodes.focused.fusionPath
        }), {
          persistChanges: import_neos_ui_redux_store.actions.Changes.persistChanges,
          commenceNodeCreation: import_neos_ui_redux_store.actions.CR.Nodes.commenceCreation
        }),
        (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
          i18nRegistry: globalRegistry.get("i18n")
        }))
      ], SplitAddButton);
    }
  });

  // src/manifest.js
  var manifest_exports = {};
  var addPlugin;
  var init_manifest2 = __esm({
    "src/manifest.js"() {
      init_dist();
      init_splitPlugin();
      init_SplitAddButton();
      addPlugin = (Plugin2, isEnabled) => (ckEditorConfiguration, options) => {
        if (!isEnabled || isEnabled(options.editorOptions, options)) {
          ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
          return {
            ...ckEditorConfiguration,
            plugins: [
              ...ckEditorConfiguration.plugins ?? [],
              Plugin2
            ]
          };
        }
        return ckEditorConfiguration;
      };
      dist_default("Psmb.SplitAdd:SplitAdd", {}, (globalRegistry) => {
        const richtextToolbar = globalRegistry.get("ckEditor5").get("richtextToolbar");
        richtextToolbar.set("splitAdd", {
          commandName: "neosSplit",
          component: SplitAddButton,
          icon: "plus-square",
          tooltip: "Create new node after paragraph",
          isVisible: (editorOptions) => editorOptions?.formatting?.splitAdd
        }, "before strong");
        const config = globalRegistry.get("ckEditor5").get("config");
        config.set("splitAdd", addPlugin(Split));
      });
    }
  });

  // src/index.js
  init_manifest2();
})();
//# sourceMappingURL=Plugin.js.map
