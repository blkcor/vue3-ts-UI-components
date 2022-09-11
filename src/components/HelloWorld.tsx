import { defineComponent } from 'vue';

const PropType = {
  msg:String,
  age:{
    type:Number,
    required:true
  }
} as const

export default defineComponent({
  name:'HelloWorld',
  props:PropType,
  setup(props){
      return ()=>
        <div>
            <p>{props.msg}</p>
            <h1>{props.age}</h1>
        </div>
  }
})

export {}

// `java ts js go python solidy rust ruby and so on vue react`
