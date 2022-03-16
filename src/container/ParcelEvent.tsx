import { useState, useEffect } from 'react'; 
import Lottie from 'react-lottie-player'
import giftlottie from '../assets/lottie/gift.json'
import styled from 'styled-components'
import moment from "moment";
import 'moment/locale/ko';
import StarYellow from "@src/assets/img/star-yellow.png";
import StarBlack from "@src/assets/img/star-black.png";

const CalHead = styled.div`
  margin: 30px 0 10px;
  * {
    display: flex;
    justify-content: center;
    flex: 1 1 0;
    font-size: 1rem;
    font-weight: bold;
  }
  h1 {
    font-size: 30px;
  }
  .calhead-name {
    color: #222;
    &:nth-child(1) {
      color: red;
    }
    &:nth-last-child(1) {
      color: blue;
    }
  }
`

const CalBody = styled.div`
  .calbody-row {
    display: flex;
    justify-content: center;
    height: 70px;
    * {
      display: flex;
      justify-content: center;
      flex: 1 1 0;
    }
    .calbody-row-date {
      position: relative;
      > p, img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .calbody-row-date-num {
        display: block;
        z-index: 1;
        margin: 0;
        opacity: .8;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
  img {
    width: 35px;
    height: 35px;
    &.stamp {
      opacity: 0.5;
      animation: fadein 2s;
      animation-iteration-count: infinite;
      animation-fill-mode:forwards;
      &:hover {
        cursor: pointer;
      }
    }
    &.star-black {
      opacity: .2
    }
  }
`
const Guide = styled.div`
  padding: 50px 0;
`

const ParcelEvent = () => {
  const [attendance, setAttendance] = useState<Array<string>>([]);

  const joinAttendance = () => {
    setAttendance(prev => 
      [...prev, String(`${moment(new Date()).format("YYYY")}-${moment(new Date()).format("MM")}-${moment(new Date()).format("DD")}`)]
    );
    alert("정상적으로 출석체크되셨습니다.")
  };

  useEffect(() => {
    const now = moment(new Date());
    const array = [1,3,4,5,6,10];
    const array2 = array.map((x) => `${moment(now).format("YYYY")}-${moment(now).format("MM")}-${x*2 < 10 ? '0'+x*2 : x*2}`);

    setAttendance(array2);
  }, [])

  const generate = () => {
    const today = moment();
    const startWeek = today.clone().startOf("month").week();
    const endWeek = today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf("month").week();

    let calendar = [];
    const todayD = today.format("D");

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div key={week} className="calbody-row">
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = today
                .clone()
                .week(week)
                .startOf("week")
                .add(n + i, "day");
              let isToday = today.format("YYYYMMDD") === current.format("YYYYMMDD") ? true : false;
              let isOvered = current.format("MM") !== today.format("MM") ? "overed" : "";

              return (
                <div className="calbody-row-date" key={i}>
                  {!isOvered && 
                     <>
                        <p className="calbody-row-date-num">{current.format("D")}</p>
                        {isToday && !attendance?.find((x) => String(moment(x).format("D")) === todayD) ? (
                          <div onClick={() => joinAttendance()} className="today">
                            <img src={StarYellow} className='stamp' alt="today"/>
                          </div>
                        ) : (
                          <>
                            {Number(current.format("D")) <= Number(todayD) &&
                              (attendance?.find((x) => String(moment(x).format("D")) === String(current.format("D"))) ? (
                                <>
                                  {attendance?.find((x) => String(moment(x).format("D")) === String(current.format("D")))&& <img src={StarYellow} alt="checked"/>}
                                </>
                              ) : (
                                <img src={StarBlack} className="star-black" alt="not-checked"/>
                              ))}
                          </>
                        )}
                   </>
                  }
                </div>
              );
            })}
        </div>
      );
    }
    return calendar;
  };

  return (
    <>
      <div style={{background: "white", marginTop: "15px"}}>
        <Lottie
          loop
          animationData={giftlottie}
          style={{ height: 300 }}
          play
        />
        <strong>한달간 매일 출석시 행운의 선물을 드립니다.</strong>

        <>
          <CalHead>
            <h1>{moment().format("MM")}월</h1>
            <div>
              {["일", "월", "화", "수", "목", "금", "토"].map((el) => (
                <div key={el} className="calhead-name">
                  <p>{el}</p>
                </div>
              ))}
            </div>
          </CalHead>
          <CalBody>{generate()}</CalBody>
        </>
        <Guide>
          <p>행운의 선물은 다음달 7일에 문자메시지로 발송됩니다.</p>
        </Guide>
      </div>
    </>
  );
}

export default ParcelEvent;
 