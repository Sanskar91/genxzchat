import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
   
    return(
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='e01aa7ef-e194-4eb8-b5d1-feebf9e93fe2'
                username={props.user.username}
                secret={props.user.secret}
                style={{height:'100%'}}
            />
        </div>
    )
}
export default ChatsPage