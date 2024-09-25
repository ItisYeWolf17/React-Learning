import { useState } from "react";

export function TwitterFollowCard({username = 'unknow', name, initialIsFollowing}){
    const imgSrc = `https://unavatar.io/x/${username}`;
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const text = isFollowing ? 'Following' : 'Follow'
    const btnClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

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
                <button className= {btnClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}

