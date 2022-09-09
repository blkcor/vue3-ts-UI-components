import { defineComponent,reactive, ref } from 'vue';
import HelloWorld from './components/HelloWorld'
export default defineComponent({
    setup(){
        const state = reactive({
            name:'blkcor'
        })
        return () => {
        const numberRef = ref(1);
        
        return(
            <div id='app'>
                <h1>{state.name}</h1>
                <h2>{numberRef.value}</h2>
                <HelloWorld msg='ddd'></HelloWorld>
            </div> 
        )
        }
    }
})

export {}