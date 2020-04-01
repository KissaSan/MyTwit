import React from 'react';

import PostListitem from '../post-list-item';
import { ListGroup } from 'reactstrap';

import './post-list.css';



const PostList = ({posts, onDelete, onToggleLiked, onToggleImportant }) => {

    const elements = posts.map((item) => 
    {const {id, ...itemProps} = item;

        return(
            <li key={id} className='list-group-item'>
                <PostListitem
                {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}
                 />
            </li>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;