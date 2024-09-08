import React from 'react'
import TopBanner from '../../../components/TopBanner'
import BlogList from '../../../components/BlogList'


export default function page() {
    return (
        <div className='service-page-wrapper'>
            {/* Top banner  */}
            <TopBanner Title="Blog" description="Here you can see every updated blog" image="https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg" />
            {/* Top banner  */}


            <BlogList/>

        </div>
    )
}