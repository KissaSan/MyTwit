import React, {Component} from 'react';
import './post-list-item.css';





const  PostListItem = ({label, onDelete, onToggleImportant, onToggleLiked, important, like}) => {
    
        let classNames = "app-list-item d-flex justify-content-between";
        if(important) {
            classNames += ' important';
        }
        if(like) {
            classNames += ' like';
        }

        return(
            <div className={classNames}>
            <span 
            onClick={onToggleLiked}
            className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-between align-items-center">
                <button 
                type="button"
                onClick={onToggleImportant}
                className="btn-star btn-sm">
                    <i className="fa fa-star"> </i>
                </button>
                <button 
                onClick={onDelete}
                className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"> </i>
                </button>
                <i className="fa fa-heart"> </i>
            </div>
        </div>
        )
    }




export default PostListItem;