import { ifError } from 'assert'
import { computed, defineComponent, ref, toRefs } from 'vue'
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type'
import { generateInnerTree } from './utils'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props)
    const innerData = ref(generateInnerTree(data.value))

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

    const getChildren = (node: IInnerTreeNode): IInnerTreeNode[] => {
      const result = []
      // 找到node在列表中的索引
      const startIndex = innerData.value.findIndex(item => item.id === node.id)
      // 找到它后面所有子节点（ level比当前节点大i)
      for (
        let i = startIndex + 1;
        i < innerData.value.length && node.level < innerData.value[i].level;
        i++
      ) {
        result.push(innerData.value[i])
      }
      return result
    }
    return () => {
      return (
        <div class="s-tree">
          {expandedTree.value.map(treeNode => (
            <div
              class="s-tree-node"
              style={{
                paddingLeft: `${24 * (treeNode.level - 1)}px`
              }}
            >
              {/* 折叠图标 */}
              {/* 判断当前节点是否是叶子节点 */}
              {treeNode.isLeaf ? (
                <span style={{ display: 'inline-block', width: '25px' }}></span>
              ) : (
                <svg
                  onClick={() => toggleNode(treeNode)}
                  style={{
                    width: '18px',
                    height: '18px',
                    display: 'inline-block',
                    transform: treeNode.expanded ? 'rotate(90deg)' : ''
                  }}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M384 192v640l384-320.064z"
                  ></path>
                </svg>
              )}
              {/* 标签 */}
              {treeNode.label}
            </div>
          ))}
        </div>
      )
    }
  }
})
