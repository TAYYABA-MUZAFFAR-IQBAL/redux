import {
  Typography,
  Box,
  makeStyles,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@material-ui/core";
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import Spinner from "../components/Spinner";
import { orange } from "@material-ui/core/colors";
// import VisibilityIcon from "@material-ui/icons/Visibility";
// import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
// import { Link } from "react-router-dom";
// import axios from "axios";
import { useState, useEffect } from "react";
import { deleteOne, getAll, reset } from "../features/user/userSlice";
const useStyles = makeStyles({
  stuListColor: {
    backgroundColor: orange[400],
    color: "white",
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const List = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { users, isLoading, isError, message } = useSelector(
    (state) => state.users
  );
    // const [students, setStudents] = useState();
    //  const data= users.studentData
    //  const length=data?.length
    //  console.log("count of all data is",length);

  // console.log("==========",users);
  // console.log("============data", data);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getAll());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  //    console.log(Users);

  // const [students, setStudents] = useState([]);

  // function getAllStudent() {
  //   axios
  //     .get("http://localhost:2000/student")
  //     //   .then((response) => response.json())
  //     .then((response) => {
  //       // response.json();
  //       // console.log(response.data);
  //       setStudents(response.data.studentData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // useEffect(() => {
  //   getAllStudent();
  // }, []);

  // const handleDelete = async (id) => {
  //   dispatch(deleteOne(id))
  //   window.location.reload(false);
  // };

  return (
    <>
      <Box textAlign="center" p={2} className={classes.stuListColor}>
        <Typography
          variant="h4"
          style={{ marginBottom: 15, textAlign: "center" }}
        >
          All Users
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                No
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                _id
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Name
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Email
              </TableCell>
              <TableCell
                align="center"
                className={classes.tableHeadCell}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((student, i) => {
              // console.log("+++++++++++++++++++++", student);
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i}</TableCell>
                  <TableCell align="center">{student._id}</TableCell>
                  <TableCell align="center">{student.name}</TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell align="center">
                    {/* <Tooltip title="View"><span>
                      <IconButton>
                        <VisibilityIcon color="primary" />
                      </IconButton></span>
                    </Tooltip> */}
                    <Tooltip title="Delete">
                    <span> <IconButton onClick={() => dispatch(deleteOne(student._id)) }>
                        <DeleteIcon color="secondary" />
                      </IconButton></span>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
