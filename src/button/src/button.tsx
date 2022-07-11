import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SButton',
  setup(props, { slots }) {
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return <button class="s-btn s-btn--primary">{defaultSlot}</button>
    }
  }
})
