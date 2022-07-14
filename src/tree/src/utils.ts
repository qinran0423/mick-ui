import { IInnerTreeNode, ITreeNode } from './tree-type'

export function generateInnerTree(
  tree: ITreeNode[],
  level = 0, //表示当前节点所处层级
  path = [] as IInnerTreeNode[] // 递归过程的路径，用来判断父节点id
): IInnerTreeNode[] {
  level++
  return tree.reduce((prev, cur) => {
    const o = { ...cur, level } as IInnerTreeNode

    // 记录调用栈，用于计算parentId
    if (path.length > 0 && path[path.length - 1].level >= level) {
      while (path[path.length - 1]?.level >= level) {
        path.pop()
      }
    }

    path.push(o)

    const parentNode = path[path.length - 2]
    if (parentNode) {
      o.parentId = parentNode.id
    }

    // 判断cur 中是够存在children,如果存在则递归遍历
    if (o.children) {
      const children = generateInnerTree(o.children, level, path)
      delete o.children
      return prev.concat(o, children)
    } else {
      // 叶子节点
      o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}
