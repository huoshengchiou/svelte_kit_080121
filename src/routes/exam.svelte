


<script>
    import {count}from'../stores/testStore'
    
    let m;
    let color;
    const handleInput = (e) => {
    //單向改變值，只要color被任何地方使用，所有的地方都會跟著變動
    color = e.target.value;
  };
</script>

<input type="text" on:input={handleInput}  />

<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
    exam
</div>

<pre>
    {JSON.stringify($count)}
</pre>

<div class="box">
    <h1>hello</h1>
</div>

<style lang="scss">

    .box{
        background: teal;
        >h1{
            color:white;
        }
    }

</style>