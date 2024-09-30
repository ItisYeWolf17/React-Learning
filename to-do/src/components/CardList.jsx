export function CardList({task}){

    return(
        <li>
        <p>{task}</p>
        <div>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </li>
    )
}