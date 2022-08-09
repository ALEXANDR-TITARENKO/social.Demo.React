import p from'./Post.module.css'



const Post = (prop) => {
    
    return(
   
                 <div className={p.item}> 
                     <img className={p.img1} src={prop.img} alt="" />  
                     {prop.post}
                
                    <div className={p.container}>
                         <img className={p.like} src="https://cdn.pixabay.com/photo/2016/02/04/11/57/heart-1179054_1280.png" alt="" />
                         <div className={p.numberLike}>{prop.like}</div>
                    </div>
                  
                 </div>
                

    )
}


export default Post;