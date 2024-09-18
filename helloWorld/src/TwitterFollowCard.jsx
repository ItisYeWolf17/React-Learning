export function TwitterFollowCard({username, name, isFollowing}){
    const imgSrc = `https://unavatar.io/x/${username}`;
    let follow = 'Follow';


    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="avatar usuario" 
                src={imgSrc} 
                ></img>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{username}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    {follow}
                </button>
            </aside>
        </article>
    )
}

