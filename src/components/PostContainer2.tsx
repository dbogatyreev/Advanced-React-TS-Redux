import React from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer2 = () => {
    const { data, error, isLoading } = postAPI.useFetchAllPostsQuery(100);
    return (
        <div className='post__list'>
            {isLoading && <h1>Идет загрузка...</h1>}
        </div>
    );
};

export default PostContainer2;
