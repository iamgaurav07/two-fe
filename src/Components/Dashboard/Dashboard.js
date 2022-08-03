import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import * as actions from "../../Store/Actions";

export const Dashboard = () => {
  const history = useNavigate();
  const [current, setCurrent] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const { userData } = useSelector(
    (state) => ({
      userData: state.userReducer.userData,
    }),
    shallowEqual
  );

  useEffect(() => {
    setIsLoading(true)
    dispatch(actions.getUser(pageLimit, current, ()=>{ setIsLoading(false) }));
    return () => {};
  }, [pageLimit, current]);

  const onShowSizeChange = (current, pageLimit) => {
    setPageLimit(pageLimit);
  };

  const onChange = (pageNumber) => {
    setCurrent(pageNumber);
  };

  const logoutHandler = () => {
    localStorage.clear();
    history("/");
  };

  return (
    <>
      {isLoading && <div id="loader" />}
      <div className="container">
        <h3 className="text-center my-5">User</h3>
        <Button className="my-2" onClick={logoutHandler}>
          Logout
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData?.[0]?.data?.map((data) => (
                <tr key={data?._id}>
                  <td>{data.username}</td>
                  <td>{data.name}</td>
                </tr>
              ))}
          </tbody>
        </Table>

        <Pagination
          showSizeChanger
          current={current}
          onShowSizeChange={onShowSizeChange}
          total={userData?.[0]?.totalCount?.[0]?.count}
          showTotal={(total) => `Total ${total} items`}
          onChange={onChange}
        />
      </div>
    </>
  );
};
