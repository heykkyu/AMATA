import Lottie from 'react-lottie-player'
import giftlottie from '../assets/lottie/gift.json'
import styled from 'styled-components'
import moment from "moment";

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
    * {
    display: flex;
      justify-content: center;
      flex: 1 1 0;
    }
  }
`

const ParcelEvent = () => {
  const attendance = [{
    day: 1,
    point: 0,
  },
  {
    day: 2,
    point: 100,
  }];

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
                <div className='test' key={i}>
                  <p>{current.format("D")}</p>
                  {isToday && !attendance?.find((x) => String(x.day) === String(current.format("D"))) ? (
                    <div onClick={() => setAttendance()}>
                      <h1>오늘</h1>
                    </div>
                  ) : (
                    <>
                      {Number(current.format("D")) <= Number(todayD) &&
                        (attendance?.find((x) => String(x.day) === String(current.format("D"))) ? (
                          <>
                            {attendance?.find((x) => String(x.day) === String(current.format("D")))?.point === 100 && <p>출첵</p>}
                            {attendance?.find((x) => String(x.day) === String(current.format("D")))?.point === 500 && <p>출첵</p>}
                            {attendance?.find((x) => String(x.day) === String(current.format("D")))?.point === 1000 && <p>출첵</p>}
                          </>
                        ) : (
                          <h1>{todayD}</h1>
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
      </div>
    </>
  );
}

export default ParcelEvent;
 