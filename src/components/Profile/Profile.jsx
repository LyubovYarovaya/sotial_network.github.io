import React from 'react';
import style from './Profile.module.css';
import MyPost from './MyPost';


const Profile = () => {
    return <div className={style.content}>
    <div>
      <div>
        
      </div>
      <div>
        <div>
          <img src="https://previews.dropbox.com/p/thumb/AAqVNjAxYb3RnCaYM4G9Jk5rSEdQkEumGg9dp47dYacYcle1Ml8bcfSjAj-daL0f14OeGxmiWN0D4d38Up-sPUonyNGPyzu6rYQbN3PFHpQ5VPJ8LJo0obUw3-CVoXbB0TKxghlHIEFo9Rqibs0_yfLVQdNuPJBACIhheZRzFBDuwJtvcISTQFdeb5ciSOOt5osBrGa2nzAC6YZDXeTb2Vv9cfl5QxicfM9yClsKLmY41UXaYsIPa92q6PeKycJRbnVeU_TMhZJs7t9r5VhNNBjByAJlDS2KtXZuo2vPPrQiMQXLTv-cxbWF-mMHcYtVqRO3sHtZKZsSbRi1CaRl0NkTlLIg1d5fq_zxCWZ4krAJIg/p.jpeg?fv_content=true&size_mode=5" width="1080px" height="320px" alt=""/>
        </div>
        <div>
          <a href="#" alt="Ava"><img src="http://www.en.splayn.com/pic/no_ava.gif" alt="Ava"/></a>

        </div>
      </div>
    </div>
    <div>
    <textarea name="text"></textarea>
      <button>Add post</button>
    </div>
    <MyPost message='my post' count='44'/>
    <MyPost message='my first post'count='33'/>
    <MyPost />
    <MyPost />
    <MyPost />
    <MyPost />
  </div>
}

export default Profile;