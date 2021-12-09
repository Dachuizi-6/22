function useState<T>(state:T):[T,(newValue:T )=> void]{
    let currentState = state

    const changeState = (newState:T) => {
        currentState = newState
    }

    const tuple:[T,(state:T)=>void] = [currentState,changeState]

    return tuple
}

const [counter,setCounter] = useState(10)

const [str,setStr] = useState("abc")

let zohnny:[string,number]

zohnny[0] = "zohnny"
zohnny[1] = 18

// console.log(zohnny)

// const req = { url: "https://example.com", method: "GET" } as const
const req = { url: "https://example.com", method: "GET" } as const

function handleRequest(url:string,method:'GET'){

}
handleRequest(req.url, req.method)
