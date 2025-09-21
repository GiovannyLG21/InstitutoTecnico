import React, { useEffect, useState, type ReactNode } from 'react'

interface Props {
    children: ReactNode
}
function Loader({ children }: Props) {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    if (loading) return <div className="loading"></div>
    return (children)
}

export default Loader