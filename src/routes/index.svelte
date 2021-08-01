

<script>   //同時也會在server side運行
     import {pokemons} from '../stores/testStore'
     import PokeCard from '../components/PokeCard/index.svelte'
     console.log($pokemons) //pull the data from store //$ react to the data (當值改變所有使用到跟著改)

     let typeIn=''
     let list=[]
$:{
     console.log({typeIn})    //根據值的callback
     // if(Boolean(typeIn)){
     //      list=$pokemons.filter(pokeman=>pokeman.name.includes(typeIn)) 
     // }else{
     //     list=[...$pokemons]
     // }
}
</script>



<h1>Welcome to SvelteKit</h1>
<svelte:head>
     <title> Svelte Rxjs</title>
</svelte:head>

<input type="text" bind:value={typeIn}>

{#each $pokemons.filter(pokeman=>pokeman.name.includes(typeIn)) as pokeman}
<PokeCard pokeman={pokeman}/>
{/each}




