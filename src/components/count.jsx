import { useSelector } from "react-redux";
function Count() {
 

  const { users} = useSelector(
    (state) => state.users
  );

    //  const data= users.studentData
     const length=users?.length
     console.log("count of all data is",length);

  return (
    <>
     
      <div style={{border:5}}>
        <h4>Users Count </h4>
        <div>{length} </div>
      </div>
    </>
  );
}

export default Count;
