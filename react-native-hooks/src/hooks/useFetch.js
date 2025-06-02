import { useState, useEffect } from "react";

export const useFetch = url => {
    //서버에서 받아온 데이터를 저장
    const [data, setData] = useState(null);
    //오류 발생시 에러 객체를 저장
    const [error, setError] = useState(null);
    const [inProgress, setInProgress] = useState(false);

    //useEffect의 콜백함수는 비동기함수로 선언이 불가능하다.
    //그래서 내부에 비동기 함수를 별도로 정의한 뒤 호출
    useEffect(() => {
        const fetchData = async () => {
            try {
                setInProgress(true);
                //fetch API로 데이터를 요청
                const res = await fetch(url);

                //응답결과를 JSON으로 파싱
                const result = await res.json();

                //응답이 성공적인 경우(HTTP 상태코드 : 200 ~ 299)
                if(res.ok){
                    setData(result); //성공한 데이터 저장
                    setError(null); //에러는 초기화
                }else{
                    throw result; //응답은 됐지만 에러가 있는 경우(catch블록으로 이동)
                }
            } catch (error) {
                setError(error);
            } finally {
                setInProgress(false);
            }
        }
        fetchData();
    },[url])
    
    return {data,error,inProgress};

}