import { defineComponent, toRefs } from 'vue'
import { SpaceProps, spaceProps } from './space-type'

export default defineComponent({
  name: 'SSpace',
  props: spaceProps,
  setup(props: SpaceProps) {
    return () => {
      return <div class="s-space"></div>
    }
  }
})
