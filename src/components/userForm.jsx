import { useDispatch } from 'react-redux'
import { deleteOne } from '../features/user/userSlice'

function UserItem({ user }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <h2>{user.text}</h2>
      <button onClick={() => dispatch(deleteOne(user._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default UserItem