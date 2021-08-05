
<script context='module'>

export const load= async({ page,session,fetch,context })=> {
    //會在component mount之前運行

    console.log('load')
    
    return {
             props:{
              
              }
            }
}


</script>




<script>   //同時也會在server side運行
	import { onMount } from 'svelte';
     import axios from 'axios'

     import {pokemons} from '../stores/testStore'
     import PokeCard from '../components/PokeCard/index.svelte'
     import Secret from './_secret.svelte'
     // console.log($pokemons) //pull the data from store //$ react to the data (當值改變所有使用到跟著改)

     let typeIn=''
     let typeIn2=''
     let list=[]
     let singleVal=''
$:{
     console.log({typeIn})    //根據值的callback
     
  }
  $:singleVal=`${typeIn}`
  //根據其他值連動產生的行為reactive statememt
  
onMount(async()=>{
  console.log('mount')

return ()=>  console.log('unmount')


})
</script>


<Secret/>
{singleVal}
<h1>Welcome to SvelteKit</h1>
<svelte:head>
     <title> Svelte Rxjs</title>
</svelte:head>

<input type="text" bind:value={typeIn}>
<input type="text" bind:value={typeIn2}>


{#each $pokemons.filter(pokeman=>pokeman.name.includes(typeIn)) as pokeman}
<PokeCard pokeman={pokeman}/>
{/each}




