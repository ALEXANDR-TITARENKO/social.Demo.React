import { getUzers } from "./../../redux/uzerReduce";
import Uzer from "./Uzer";
import React, { useEffect } from "react";
import Preolader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hok/authRedirect";
import { getIsFetching } from "./../../selector/uzerSelectors";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentPage, getPageSize } from "../../selector/uzerSelectors";

const UzersContainer = (props) => {
  //  const isAuth = useSelector(getIsAuth)
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const isFetching = useSelector(getIsFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUzers(currentPage, pageSize));
  }, [currentPage, pageSize]);

  return (
    <div>
      {isFetching ? <Preolader /> : null}
      <Uzer />
    </div>
  );
};
export default UzersContainer;
