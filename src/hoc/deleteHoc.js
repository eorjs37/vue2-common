import { h } from 'vue'
import { deleteDummyApi } from '@/api/dummyapi1';
export default function createHoc(ChildComp){
    return{
        name:'CreateHoc',
        components:{ChildComp},
        props:ChildComp.props,
        methods:{
            logMessage() {
                setTimeout(() => {
                    deleteDummyApi()
                    .then((res)=>{
                        const { status, data} = res
                        if(status === 200){
                            const { resultMsg } = data
                            alert(resultMsg)
                        }
                    })
                }, 3000);
            },
        },
        render(){
            return h('div', [
                h(ChildComp, {
                  ...this.$props, // HOC로 전달된 props를 ChildComp로 전달
                  onDeleteDummyApi:this.logMessage
                }),
            ]);
        }
    }
}