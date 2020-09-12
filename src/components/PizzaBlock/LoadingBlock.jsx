import React from 'react'
import ContentLoader from 'react-content-loader'

function LoadingBlock() {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="137" cy="118" r="119" />
            <rect x="4" y="256" rx="5" ry="5" width="280" height="26" />
            <rect x="5" y="304" rx="7" ry="7" width="280" height="84" />
            <rect x="6" y="409" rx="3" ry="3" width="91" height="31" />
            <rect x="189" y="409" rx="18" ry="18" width="89" height="35" />
        </ContentLoader>
    )
}

export default LoadingBlock
