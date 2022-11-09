import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Exploria`;
    }, [title])
}

export default useTitle;