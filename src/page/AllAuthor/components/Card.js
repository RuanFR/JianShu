import React from 'react';
import {
    CardWrapper
} from '../style';


function Card(props){
    return(
        <CardWrapper>
            <img alt="" src={props.data.get('heardImg')} />
            <h4 className="author-Name">{props.data.get('authorName')}</h4>
            <p className="introduce">{props.data.get('introduce')}</p>
            <div className="follw-btn">+关注</div>
            <hr />
            <div className="lately">最近更新</div>
            <div className="bottom-content">
                {
                    props.data.get('recentUpdates').map((item)=>(
                        <a href="/" key={item.get('linkID')}>{item.get('title')}</a>
                    ))
                }
            </div>
        </CardWrapper>
    )
}

export default Card;