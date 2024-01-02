import Propic from "./Propic"

export default function Border({name,myteam}){
    // console.log(myteam)
    // error or fix here
    const sum = myteam.reduce((acc, cur)=>{return acc + cur;},0);
    console.log(sum)
    return(
    <div className="con">
        <h1>{name}</h1>
        <Propic/>
        <h2>합</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{myteam}</p>
    </div>
    )
}