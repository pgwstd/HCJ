import axios from 'axios'

export default{
    state:{
        classes:[],
        url:'http://localhost:8080/api/classes'
    },
    getters:{
        classes:state=>state.classes
    },
    mutations:{
        alterClasses:(state,data)=>{
            state.classes = data;
        }
    },
    actions:{
        findAllClass:(context)=>{
            var urll = this.a.state.url+'findAll';

            axios.get(urll).then(function({data}){
                context.commit('alterClasses',data)
            })
        },
        saveClass:(context,form)=>{
            var urll = this.a.state.url+'save';

            return new Promise((resolve,reject)=>{
                axios.post(urll,form).then(function(result){
                    //保存成功之后
                    context.dispatch('findAllClass');
                    resolve(result);
                }).catch((error)=>{
                    reject(error)
                })
            })
        },
        updateClass:(context,form)=>{
            var urll = this.a.state.url+'update';

            return new Promise((resolve,reject)=>{
                axios.post(urll,form).then(function(result){
                    //保存成功之后
                    context.dispatch('findAllClass');
                    resolve(result);
                }).catch((error)=>{
                    reject(error)
                })
            })
        },
        deleteClass:(context,row)=>{
            var urll = this.a.state.url+'batchDelete';

            var ids = {ids:JSON.stringify([row.id])};
            return new Promise((resolve,reject)=>{
                axios.post(urll,ids).then(function(result){
                    context.dispatch('findAllClass');
                    resolve(result);
                }).catch((error)=>{
                    console.log(error);
                    reject(error)
                })
            })
        }
    }
}