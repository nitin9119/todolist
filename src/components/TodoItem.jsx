export const TodoItem = ({title,status,id, handletoggle}) =>{
    console.log("Id from",title,"is",id);
    return (
        <>
        <div> {title} {status ? 'Done' : 'Not Done'}</div><button onClick={() =>{handletoggle(id)}}>Mark as done</button>
        </>
    );
};