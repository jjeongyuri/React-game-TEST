export default function Proplay({count,aTeam,bTeam}){
    const Aplus = aTeam.reduce((hap,a)=>{return hap+a},0);
    const Bplus = bTeam.reduce((hap,b)=>{return hap+b},0);
    // console.log(Aplus,Bplus);

    return(
      // error or fix here
    <div>
      {count === 6?
        ( <>
          <p>{
            Aplus>Bplus
            ?
            (`A팀이 ${Aplus}점으로 승리하였습니다.`)
            :
            (`B팀이 ${Bplus}점으로 승리하였습니다.`)
            }</p>
        </>)
        :
        (<>
          <p>
            {
              count === 0?
              (`게임은 5번만 실행됩니다.`):
              (`${count}번째 실행`)
            }</p>
        </>)
      }
    </div>
    )
}