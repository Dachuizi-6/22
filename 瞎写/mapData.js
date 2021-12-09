const originData = [
  {
    asmtQstn:1,
    scope:1
  },
  {
    asmtQstn:2,
    scope:1
  },
  {
    asmtQstn:3,
    scope:1
  },
  {
    asmtQstn:4,
    scope:1
  },
  {
    asmtQstn:5,
    scope:1
  },
  {
    asmtQstn:6,
    scope:1
  },
  {
    asmtQstn:7,
    scope:1
  },
  {
    asmtQstn:8,
    scope:1
  },
  {
    asmtQstn:9,
    scope:1
  },
]

const resData = {
  assessmentData:0,
  isChineseVersion:0,
  lastUpdateBy:'string',
  lastUpdateDtm:0,
  smcNum:'string',
  totalScore:0
}


originData.forEach(item => {
  if(item.asmtQstn===1){
    resData[`score${item.asmtQstn}st`] = item.scope
  }else if(item.asmtQstn===3){
    resData[`score${item.asmtQstn}rd`] = item.scope
  }else{
    resData[`score${item.asmtQstn}th`] = item.scope
  }
})

console.log(resData)