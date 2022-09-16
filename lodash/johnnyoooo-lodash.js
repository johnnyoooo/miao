  var johnnyoooo = {
    chunk : function(ary, size)  {
      let arynum = Math.ceil(ary.length / size)
      let result = []
      for(let i = 0; i < arynum; i++) {
        let separy = []
        for(let j = 0; j < size; j++) {
          let idx = j + i * size
          if(!ary[idx]) {
            break
          }
          separy.push(ary[idx])
        }
        result.push(separy)
      }
      return result
    } ,

    compact : function(ary) {
      return ary.reduce((result, val) => {
        if(val) {
          result.push(val)
        }
        return result
      }, [])
    } ,
  }
