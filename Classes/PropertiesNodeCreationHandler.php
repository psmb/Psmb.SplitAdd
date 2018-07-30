<?php
namespace Psmb\SplitAdd;

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Annotations as Flow;
use Neos\Neos\Ui\NodeCreationHandler\NodeCreationHandlerInterface;

class PropertiesNodeCreationHandler implements NodeCreationHandlerInterface
{
    /**
     * @param NodeInterface $node The newly created node
     * @param array $data incoming data
     * @return void
     */
    public function handle(NodeInterface $node, array $data)
    {
        if (isset($data['properties'])) {
            foreach($data['properties'] as $propertyName => $value) {
                $node->setProperty($propertyName, $value);
            }
        }
    }
}
