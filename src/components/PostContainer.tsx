import React, { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    const { data, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit);
    const [createPost] = postAPI.useCreatePostMutation();
    const [updatePost] = postAPI.useUpdatePostMutation();
    const [deletePost] = postAPI.useDeletePostMutation();

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3);
        // }, 2000);
    }, []);

    const handlerCreate = async () => {
        const title = prompt('Введите заголовок поста:');
        if (title === null || title.trim() === '') {
            alert('Заголовок не может быть пустым.');
            return;
        }

        await createPost({ title, body: title } as IPost);
        refetch(); 
    };

    const handleRemove = async (post: IPost) => {
        await deletePost(post.id); 
        refetch();
    };

    const handleUpdate = async (post: IPost) => {
        const updatedTitle = prompt('Введите новый заголовок поста:', post.title);
        if (updatedTitle !== null) {
            await updatePost({ ...post, title: updatedTitle });
            refetch();
        }
    };

    return (
        <div className='post__list'>
            <button onClick={handlerCreate}>Add new post</button>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            {data && data.map((post: IPost) => (
                <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostContainer;
