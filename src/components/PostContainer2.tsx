import React from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer2 = () => {
    const { data, error, isLoading } = postAPI.useFetchAllPostsQuery(100);
    return (
        <div className='post__list'>
            {isLoading && <h1>Идет загрузка...</h1>}
            {/* {error && <h1>Произошла ошибка при загрузке</h1>}
            {data && data.map((post: IPost) => (
                <PostItem key={post.id} post={post} />
            ))} */}
        </div>
    );
};

export default PostContainer2;
