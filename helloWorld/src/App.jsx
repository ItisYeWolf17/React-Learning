import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
//Estilos se pueden colocar directamente aca pero en forma de objeto
//<article style={{display:'flex', alignItems: 'center', color: '#fff'}}>
export function App(){
    return(
        <>
            <section className='App'>
                <TwitterFollowCard username={"GeraldBlanco10"} name={"Gerald Blanco Navarro"} isFollowing={false}/>
                <TwitterFollowCard username={"TheGrefg"} name={"Grefg=)"} isFollowing={true}/>
                <TwitterFollowCard username={"GaboCAbo04"} name={"Gabo"} isFollowing={false}/>
                <TwitterFollowCard username={"AlphaSniper97"} name={"AlphaSniper97"} isFollowing={true}/>
            </section>
        </>
    )
}