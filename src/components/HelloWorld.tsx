import { defineComponent, onMounted, PropType, reactive, ref, watchEffect } from 'vue';


const PropType = {
  msg: String,
  /* age: {
    type:Number,
    required:false
  } */
} as const


export default defineComponent({
  name:'HelloWorld',
  props:PropType,
  setup(props){
    const state = reactive({
      age:20
    })
    let name = ref('blkcor')
      return(
        <div>
            <h3>{props.msg}</h3>
            <h3>{name}</h3>
            <h2>{ state.age }</h2>
        </div>
      )
  }
})



export {}
