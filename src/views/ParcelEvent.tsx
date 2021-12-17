import Lottie from 'react-lottie-player'
import giftlottie from '../assets/lottie/gift.json'
import styled from 'styled-components'
import moment from "moment";
import StarYellow from "@src/assets/img/star-yellow.png";
import StarBlack from "@src/assets/img/star-black.png";
import StarStamp from "@src/assets/img/star-stamp.png";

const CalHead = styled.div`
  margin: 30px 0 10px;
  * {
    display: flex;
    justify-content: center;
    flex: 1 1 0;
    font-size: 1rem;
    font-weight: bold;
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
      .calbody-row-date-num {
        position: absolute;
        display: block;
        margin: 0;
        left: 2px;
        top: 0;
        opacity: .8;
        font-size: 11px;
        width: 20px;
      }
    }
  }
  img {
    width: 25px;
    height: 25px;
    flex: none !important;
    &.stamp {
      animation: fade 1s;
    }
  }
`
const Guide = styled.div`
  padding: 50px 0 100px;
`

const attendance = [
  3, 7, 8, 10, 16
]

const ParcelEvent = () => {
  // const attendance = [{
  //   day: 1,
  //   point: 0,
  // },
  // {
  //   day: 2,
  //   point: 100,
  // }];

  const setAttendance = () => {
    
  };

  const generate = () => {
    const today = moment(new Date());
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
              let isToday = today.format("YYYYMMDD") === current.format("YYYYMMDD") ? "today" : "";
              let isOvered = current.format("MM") !== today.format("MM") ? "overed" : "";

              return (
                <div className="calbody-row-date" key={i}>
                  <p className="calbody-row-date-num">{current.format("D")}</p>
                  {isToday && !attendance?.find((x) => String(x) === String(current.format("D"))) ? (
                    <div onClick={() => setAttendance()}>
                      <img src={StarStamp} className='stamp' alt="today"/>
                    </div>
                  ) : (
                    <>
                      {Number(current.format("D")) <= Number(todayD) &&
                        (attendance?.find((x) => String(x) === String(current.format("D"))) ? (
                          <>
                            {attendance?.find((x) => String(x) === String(current.format("D")))&& <img src={StarYellow} alt="checked"/>}
                          </>
                        ) : (
                          <img src={StarBlack} alt="not-checked"/>
                        ))}
                    </>
                  )}
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
      <div>
        <Lottie
          loop
          animationData={giftlottie}
          style={{ height: 300 }}
          play
        />
        <strong>한달간 매일 출석시 행운의 선물을 드립니다.</strong>

        <>
          <CalHead>
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
 