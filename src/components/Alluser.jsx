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
import { useSelector, useDispatch } from "react-redux";
import { orange } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import { useEffect } from "react";
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

  const { users, isError, message } = useSelector(
    (state) => state.users
  );

  // console.log("==========",users);

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
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i}</TableCell>
                  <TableCell align="center">{student._id}</TableCell>
                  <TableCell align="center">{student.name}</TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Delete">
                      <span>
                        {" "}
                        <IconButton
                          onClick={() => dispatch(deleteOne(student._id))}
                        >
                          <DeleteIcon color="secondary" />
                        </IconButton>
                      </span>
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
