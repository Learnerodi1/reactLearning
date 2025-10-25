import React,{useState} from "react"

const Form = () =>{
    const [text, updateText] = useState("mango")
    const changingValue =(e)=>{
        const ada = text
        updateText((previousstate)=>{return previousstate = e.target.previousElementSibling.value})
        updateText(g => {
                console.log(g)
                return g
            })
    }
    return(
        <>
          <form action="">
            <p>
                <label htmlFor="">{text}</label>
                <input type="text"/>
                <input type="button" value="Submit"  onClick={(e)=> changingValue(e)} />
            </p>
        </form>
        </>
    )
}
export {Form}