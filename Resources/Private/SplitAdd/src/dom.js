// TODO: would be nice to expose this stuff from Neos
const getGuestFrameDocument = () => {
    return document.getElementsByName('neos-content-main')[0].contentDocument;
};
const findInGuestFrame = selector =>
    getGuestFrameDocument().querySelector(selector);
const findNodeInGuestFrame = (contextPath, fusionPath) => fusionPath ? findInGuestFrame(
    `[data-__neos-node-contextpath="${contextPath}"][data-__neos-fusion-path="${fusionPath}"]`
) : findInGuestFrame(
    `[data-__neos-node-contextpath="${contextPath}"]`
);
const closestNodeInGuestFrame = el => {
    if (!el || !el.dataset) {
        // el.dataset is not existing for window.document; and we need to prevent this case from happening.
        return null;
    }

    return el.dataset.__neosNodeContextpath ? el : closestNodeInGuestFrame(el.parentNode);
};

export const calculateDomAddresses = (contextPath, fusionPath) => {
    const element = findNodeInGuestFrame(contextPath, fusionPath);
    const parentElement = element ? closestNodeInGuestFrame(element.parentNode) : null;

    return {
        siblingDomAddress: {
            contextPath,
            fusionPath
        },
        parentDomAddress: parentElement ? {
            contextPath: parentElement.getAttribute('data-__neos-node-contextpath'),
            fusionPath: parentElement.getAttribute('data-__neos-fusion-path')
        } : {
                contextPath: parentNodeContextPath(contextPath),
                fusionPath: null
            }
    };
};
