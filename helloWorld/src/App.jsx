import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
//Estilos se pueden colocar directamente aca pero en forma de objeto
//<article style={{display:'flex', alignItems: 'center', color: '#fff'}}>
export function App(){

    const users = [
        {
            id: 1,
            userName: 'GeraldBlanco10',
            name: 'Gerald Blanco Navarro',
            initialIsFollowing: false
        },
        {
            id: 2,
            userName: 'TheGrefg',
            name: 'Grefg=)',
            initialIsFollowing: true
        },
        {
            id: 3,
            userName: 'AlphaSniper97',
            name: 'AlphaSniper97',
            initialIsFollowing: true
        },
        {
            id: 4,
            userName: 'GaboCAbo04',
            name: 'Gabo',
            initialIsFollowing: false
        }
    ]

    return(
        <>
        {/*
            <section className='App'>
                <TwitterFollowCard username={"GeraldBlanco10"} name={"Gerald Blanco Navarro"} initialIsFollowing={false}/>
                <TwitterFollowCard username={"TheGrefg"} name={"Grefg=)"} initialIsFollowing={true}/>
                <TwitterFollowCard {...gabo}/> 
                <TwitterFollowCard username={"AlphaSniper97"} name={"AlphaSniper97"} initialIsFollowing={true}/>
            </section>
        */}

        <section className='App'>
            {
                users.map(user => {
                    const {id, userName, name, initialIsFollowing} = user;

                    return(
                        <TwitterFollowCard 
                        key={id}
                        username={userName} 
                        name={name} 
                        initialIsFollowing={initialIsFollowing}
                        />

                    )

                })
            }
        </section>

        </>
    )
}