import React from 'react'
import Tweet from "../../../../../components/common/Tweet";

const TweetsListOfHome = ({loading, tweets}) => {
    return <>
        {loading && "Cargando data..."}
        {tweets?.map((t, i) => (
            <Tweet {...t} key={t._id} />
        ))}
    </>
}

export default React.memo(TweetsListOfHome);