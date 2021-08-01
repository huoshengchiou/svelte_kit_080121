<script context='module'>

    console.log('server')

export const  load= async({page})=> {
    //會在component mount之前運行
    console.log({page})
    const {id} = page.params

    return {props:{id}}
}


</script>


<script>

    export let id  //接server side 值
</script>

<div>{id}</div>