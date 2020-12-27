const GenerateRandoms=(number,state,handleChange)=>{
    let arrayOfRandoms=[],color=[]
    let  i=0
        while(i<state.numberOfBars)
        {
            color.push('blue')
            i++
        }
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
          }
          while(arrayOfRandoms.length<number)
          {
            arrayOfRandoms.push(Math.floor(Math.random()*number*10))
            arrayOfRandoms.filter(e=>e==='')
            arrayOfRandoms = arrayOfRandoms.filter(onlyUnique)
          }
        handleChange('data',arrayOfRandoms)
        handleChange('color',color)
        return arrayOfRandoms
}
export default GenerateRandoms