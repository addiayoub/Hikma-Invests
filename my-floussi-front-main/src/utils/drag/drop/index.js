export const handleDragItemOfGroup = (group, srcId, destId, srcIndex, destIndex, draggableId) => {
    const groupSrcIndex = group.findIndex(item => item.id == srcId)
    const groupDestIndex = group.findIndex(item => item.id === destId)

    const srcItems = [...group[groupSrcIndex].data]
    const destItems = srcId === destId ? srcItems : [...group[groupDestIndex].data]
    const draggableItemIndex = srcItems.findIndex(d => d.id === draggableId)
    const item = srcItems[draggableItemIndex]

    srcItems.splice(srcIndex, 1)
    destItems.splice(destIndex, 0, item)
    return [srcItems, destItems, groupSrcIndex, groupDestIndex]
}

