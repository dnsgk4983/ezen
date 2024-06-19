import { useCallback, useEffect, useState    } from 'react'

async function sendHttpRequest(url, config) {
    const response = await fetch(url, config)

    const resData = await response.json()
    // 응답이 ok가 아니다 즉, 정상이 아니면 오류메시지 출력
    if(!response.ok) {
        throw new Error(
            resData.message || '뭔가 이상합니다. 전송요청 실패'
        )
    }
    return resData
}

export default function useHttp(url, config, initialData) {
    // 데이터, 데이터 로딩상태, 오류상태를 useState로 전부 관리합니다
    const [data, setData] = useState(initialData)
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState()

    function clearData() {
        setData(initialData)
    }

    const sendRequest = useCallback(
        // 데이터를 받아서 전송하는데 전송이 잘 되지 않는경우 에러메세지 표시
        // 부모 컴포넌트의 재실행에 영향받지않도록 조치함
        async function sendRequest(data) {
            setIsloading(true)
            try {
                const resData = await sendHttpRequest(url, {...config, body: data})
                setData(resData)
            }
            catch (error) {
                setError(error.message || "뭔가 이상합니다")
            }
            setIsloading(false)
        }, [url, config]
    )

    useEffect( () => {
        if ((config && (config.method === "GET" || !config.method)) || !config  ) {
            sendRequest()
        }
    }, [sendRequest, config] )
    // 데이터, 에러여부, 로딩여부, 요청전송, 데이터 클리어 등의 각 유형을 리턴한다
    
    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData
    }
}

