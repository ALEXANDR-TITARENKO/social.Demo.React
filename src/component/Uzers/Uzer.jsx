import style from "./Uzers.module.css";
import uzerFoto from "../../images/uzer/uzer.png";
import { NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { followAC, unfollowAC, getUzers } from "../../redux/uzerReduce";
import {
  getTotalUsersCount,
  getCurrentPage,
  getPageSize,
  getFollowingProgress,
  getAddUzersSuperSelector,
} from "../../selector/uzerSelectors";
import { Pagination } from "antd";

// import { createSelector } from "reselect";

const Uzer = ({ portionSize = 10 }) => {
  const totalUsersCount = useSelector(getTotalUsersCount, shallowEqual);
  const currentPage = useSelector(getCurrentPage, shallowEqual);
  const pageSize = useSelector(getPageSize, shallowEqual);
  const followingProgress = useSelector(getFollowingProgress, shallowEqual);
  const uzers = useSelector(getAddUzersSuperSelector, shallowEqual);

  const dispatch = useDispatch();
  const onPageChangege = (number) => {
    dispatch(getUzers(number, pageSize));
  };

  const pageCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortiomNumber = portionNumber * portionSize;

  return (
    <>
      <div className={style.numberList}>Списсок друзей</div>

      <div className={style.numberList}>
        <div>
          {portionNumber > 1 && (
            <button
              className={style.btn}
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
            >
              назад
            </button>
          )}
          {/* <Pagination defaultCurrent={6} total={500} /> */}
          {pages
            .filter(
              (f) => f >= leftPortionPageNumber && f <= rightPortiomNumber
            )
            .map((a) => {
              return (
                <span
                  className={
                    currentPage === a ? style.select : style.selectAction
                  }
                  key={a}
                  onClick={(e) => {
                    onPageChangege(a);
                  }}
                >
                  {a}
                </span>
              );
            })}

          {portionNumber < 10 && (
            <button
              className={style.btn}
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
            >
              вперед
            </button>
          )}
        </div>
      </div>

      <div className={style.selectAction}></div>

      <div>
        {uzers.map((u) => (
          <div className={style.container} key={u.id}>
            <div className={style.info}>
              <div className={style.ava}>
                <NavLink to={/profail/ + u.id}>
                  <img
                    className={style.foto}
                    src={u.photos.large || uzerFoto}
                  />
                </NavLink>
              </div>

              <div className={style.knopk}>
                <div>{u.name}</div>

                {u.followed ? (
                  <button
                    disabled={followingProgress.some((id) => id === u.id)}
                    className={style.btn}
                    onClick={() => {
                      dispatch(unfollowAC(u.id));
                    }}
                  >
                    ДРУГ
                  </button>
                ) : (
                  <button
                    disabled={followingProgress.some((id) => id === u.id)}
                    className={style.btn_1}
                    onClick={() => {
                      dispatch(followAC(u.id));
                    }}
                  >
                    Не ДРУГ
                  </button>
                )}
              </div>

              <div className={style.box}>
                <div className={style.status}>
                  <div>{u.status}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Uzer;
