import { Ref, ref, unref, computed } from 'vue'
import { IInnerTreeNode, ITreeNode } from '../tree-type'
import { generateInnerTree } from '../utils'

export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  console.log(unref(node))

  const innerData = ref(generateInnerTree(unref(node)))
  console.log(innerData)

  const toggleNode = (node: IInnerTreeNode) => {
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) {
      cur.expanded = !cur.expanded
    }
  }

  // 获取那些展开的节点列表
  const expandedTree = computed(() => {
    let excludeNodes: IInnerTreeNode[] = []
    const result = []

    // 循环列表，找出那些！expended
    for (const item of innerData.value) {
      // 如果遍历节点在排除列表中，直接跳出本次循环
      if (excludeNodes.map(node => node.id).includes(item.id)) {
        continue
      }
      // 当前节点处于折叠状态，它的子节点应该被排除
      if (item.expanded !== true) {
        excludeNodes = getChildren(item)
      }

      result.push(item)
    }
    return result
  })

  const getChildren = (
    node: IInnerTreeNode,
    recursive = true
  ): IInnerTreeNode[] => {
    const result = []
    // 找到node在列表中的索引
    const startIndex = innerData.value.findIndex(item => item.id === node.id)
    // 找到它后面所有子节点（ level比当前节点大i)
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      if (recursive) {
        result.push(innerData.value[i])
      } else if (node.level === innerData.value[i].level - 1) {
        // 直接子节点
        result.push(innerData.value[i])
      }
    }

    return result
  }

  const toggelCheckNode = (node: IInnerTreeNode) => {
    // 避免初始化时候 node中没有checked的设置
    node.checked = !node.checked
    // 父 -> 子 之间的联动
    // 获取子节点，并同步他们的选中状态和父节点一致
    getChildren(node).forEach(child => {
      child.checked = node.checked
    })

    // 子 -> 父 之间联动
    const parentNode = innerData.value.find(item => item.id === node.parentId)
    if (!parentNode) {
      return
    }

    const siblingNodes = getChildren(parentNode, false)
    // 过滤出所有选中的兄弟节点
    const checkedSiblingNodes = siblingNodes.filter(item => item.checked)
    // 兄弟节点全部选中，父节点应该被选中
    parentNode.checked =
      siblingNodes.length === checkedSiblingNodes.length ? true : false
  }

  return {
    innerData,
    toggleNode,
    expandedTree,
    getChildren,
    toggelCheckNode
  }
}
