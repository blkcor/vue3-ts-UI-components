import { defineComponent,reactive, ref } from 'vue';
import HelloWorld from './components/HelloWorld'
export default defineComponent({
    setup(){
        const state = reactive({
            name:'blkcor'
        })
        return () => {
        const numberRef = ref(123333);
        
        return(
            <div id='app'>
                <h1>{state.name}</h1>
                <h2>{numberRef.value}</h2>
                <HelloWorld msg="Blkcor is very good" age={12}></HelloWorld>
            </div> 
        )
        }
    }
})

export {}